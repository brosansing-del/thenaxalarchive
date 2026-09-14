import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    dek: z.string().optional(),
    section: z.enum(['News Desk', 'Opinions']),
    type: z.string().default('Article'),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('The Naxal Archive'),
    featured: z.boolean().default(false),
    readTime: z.string().optional(),
    cover: z.string().optional(),
    verificationNote: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
