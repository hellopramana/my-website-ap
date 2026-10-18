// Content configuration for Astro build-in CMS

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date().optional(),
      slug: z.string().optional(),
      image: image(),
      alt: z.string().optional(),
      author: z.string(),
    }),
});

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string().optional(),
    url: z.string(),
    featured: z.boolean(),
  }),
});

export const collections = { blog, works };
