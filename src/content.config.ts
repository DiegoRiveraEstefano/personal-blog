// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

const tags = defineCollection({
  loader: file("src/data/tags.json"),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    color: z.string(),
    description: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    keywords: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/posts" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    readTime: z.string().default("5 min"),
    image: z.string().optional(),
    recommendedBlogs: z.array(z.string()).optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { tags, posts };
