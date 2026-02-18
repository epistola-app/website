export function prepareURL(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const sanitizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${sanitizedBase}${path}`;
}
