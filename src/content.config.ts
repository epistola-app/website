import { defineCollection, z } from 'astro:content';

export const collections = {
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
