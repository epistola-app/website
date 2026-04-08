import { defineCollection, z } from "astro:content";

const stageSchema = z.object({
  label: z.string(),
  detail: z.string(),
});

const nextUnitSchema = z.object({
  slug: z.string(),
  label: z.string(),
});

const deepLinkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

export const collections = {
  learn: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      videoUrl: z.string().optional(),
      videoBrief: z.string().optional(),
      videoCaptions: z.string().optional(),
      posterImage: z.string().optional(),
      sandboxCheckpointId: z.string().optional(),
      nextUnits: z.array(nextUnitSchema).default([]),
      deepLinks: z.array(deepLinkSchema).default([]),
      tags: z.array(z.string()).default([]),
      sortOrder: z.number(),
    }),
  }),

  docs: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      section: z.enum(["core-concepts", "editor", "generation", "platform"]),
      videoUrl: z.string().optional(),
      videoBrief: z.string().optional(),
      videoCaptions: z.string().optional(),
      sortOrder: z.number(),
    }),
  }),

  integrations: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      videoUrl: z.string().optional(),
      videoBrief: z.string().optional(),
      videoCaptions: z.string().optional(),
      plugin: z.string(),
      sortOrder: z.number(),
    }),
  }),

  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default("Anonymous"),
      cover: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
  }),

  pages: defineCollection({
    type: "content",
    schema: z.discriminatedUnion("type", [
      z.object({
        type: z.literal("faq"),
        sortOrder: z.number(),
        question: z.string(),
      }),
      z.object({
        type: z.literal("testimonial"),
        sortOrder: z.number(),
        quote: z.string(),
        name: z.string(),
        role: z.string(),
      }),
      z.object({
        type: z.literal("about"),
        sortOrder: z.number(),
        monoTitle: z.string(),
        title: z.string(),
      }),
      z.object({
        type: z.literal("legal"),
        sortOrder: z.number(),
        page: z.enum(["privacy", "security", "terms"]),
        title: z.string(),
      }),
    ]),
  }),

  product: defineCollection({
    type: "data",
    schema: z.discriminatedUnion("type", [
      z.object({
        type: z.literal("feature-card"),
        sortOrder: z.number(),
        badge: z.string(),
        title: z.string(),
        body: z.string(),
        cta: z.string(),
      }),
      z.object({
        type: z.literal("feature-section"),
        sortOrder: z.number(),
        badge: z.string(),
        title: z.string(),
        body: z.array(z.string()),
      }),
      z.object({
        type: z.literal("pricing"),
        sortOrder: z.number(),
        name: z.string(),
        price: z.string(),
        cadence: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        cta: z.string().optional(),
        highlighted: z.boolean().default(false),
      }),
    ]),
  }),

  homepage: defineCollection({
    type: "data",
    schema: z.discriminatedUnion("type", [
      z.object({
        type: z.literal("how-it-works"),
        sortOrder: z.number(),
        title: z.string(),
        body: z.string(),
      }),
      z.object({
        type: z.literal("why-us"),
        sortOrder: z.number(),
        title: z.string(),
        copy: z.string(),
      }),
      z.object({
        type: z.literal("stats"),
        sortOrder: z.number(),
        value: z.string(),
        label: z.string(),
      }),
      z.object({
        type: z.literal("hero-stats"),
        sortOrder: z.number(),
        value: z.string(),
        label: z.string(),
      }),
      z.object({
        type: z.literal("docops-lane"),
        sortOrder: z.number(),
        title: z.string(),
        body: z.string(),
        bullets: z.array(z.string()),
      }),
      z.object({
        type: z.literal("built-for"),
        sortOrder: z.number(),
        title: z.string(),
        description: z.string(),
        inactiveLabel: z.string(),
        card: z.object({
          eyebrow: z.string(),
          title: z.string(),
          badge: z.string(),
        }),
        stages: z.array(stageSchema),
      }),
      z.object({
        type: z.literal("architecture-step"),
        sortOrder: z.number(),
        label: z.string(),
        description: z.string(),
      }),
      z.object({
        type: z.literal("integration-card"),
        sortOrder: z.number(),
        title: z.string(),
        description: z.string(),
      }),
      z.object({
        type: z.literal("process-step"),
        sortOrder: z.number(),
        title: z.string(),
        description: z.string(),
      }),
    ]),
  }),
};
