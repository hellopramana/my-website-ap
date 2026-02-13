// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{mdx,md}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };
