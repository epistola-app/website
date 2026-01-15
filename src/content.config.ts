import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	blog: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			updatedDate: z.date().optional(),
			author: z.string().default('Anonymous'),
			cover: z.string().optional(),
			tags: z.array(z.string()).default([]),
		}),
	}),
};
