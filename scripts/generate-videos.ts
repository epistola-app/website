/**
 * Video generation pipeline for demo-reel scripts.
 *
 * Finds all .demo.ts files in src/content/, compares their content hash
 * against public/videos/manifest.json, and regenerates only changed videos.
 *
 * Usage:
 *   pnpm run demo:all          — regenerate changed videos
 *   pnpm run demo:all:force    — regenerate all videos
 *
 * TODO: When the video collection grows, move generated files to a CDN
 * (Cloudflare R2 or S3) instead of committing them to git. The manifest
 * would then track CDN URLs, and the build would download them.
 */

import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname, basename } from "node:path";

const CONTENT_DIR = "src/content";
const MANIFEST_PATH = "public/videos/manifest.json";
const force = process.argv.includes("--force");

interface ManifestEntry {
  hash: string;
  generatedAt: string;
}

type Manifest = Record<string, ManifestEntry>;

function findDemoScripts(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findDemoScripts(fullPath));
    } else if (entry.name.endsWith(".demo.ts")) {
      results.push(fullPath);
    }
  }
  return results;
}

function hashFile(path: string): string {
  const content = readFileSync(path);
  return "sha256:" + createHash("sha256").update(content).digest("hex");
}

function scriptToKey(scriptPath: string): string {
  // src/content/learn/en/create-template.demo.ts → learn/create-template
  const rel = relative(CONTENT_DIR, scriptPath);
  const parts = rel.split("/");
  // Remove locale directory (en/nl) and .demo.ts extension
  const filename = basename(parts.pop()!, ".demo.ts");
  const collection = parts[0];
  // Skip the locale dir (parts[1])
  return `${collection}/${filename}`;
}

function loadManifest(): Manifest {
  if (!existsSync(MANIFEST_PATH)) return {};
  return JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
}

function saveManifest(manifest: Manifest): void {
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
}

const scripts = findDemoScripts(CONTENT_DIR);

if (scripts.length === 0) {
  console.log("No .demo.ts files found.");
  process.exit(0);
}

console.log(`Found ${scripts.length} demo script(s).\n`);

const manifest = loadManifest();
let generated = 0;
let skipped = 0;

for (const script of scripts) {
  const key = scriptToKey(script);
  const hash = hashFile(script);
  const existing = manifest[key];

  if (!force && existing?.hash === hash) {
    console.log(`  ✓ ${key} — up to date (skipped)`);
    skipped++;
    continue;
  }

  const reason = force ? "forced" : existing ? "changed" : "new";
  console.log(`  → ${key} — ${reason}, generating...`);

  try {
    execSync(`npx tsx ${script}`, {
      stdio: "inherit",
      timeout: 5 * 60 * 1000, // 5 minute timeout per video
    });

    manifest[key] = {
      hash,
      generatedAt: new Date().toISOString(),
    };
    saveManifest(manifest);
    generated++;
    console.log(`  ✓ ${key} — done\n`);
  } catch (err) {
    console.error(`  ✗ ${key} — generation failed\n`);
    process.exitCode = 1;
  }
}

console.log(`\nDone: ${generated} generated, ${skipped} skipped.`);
