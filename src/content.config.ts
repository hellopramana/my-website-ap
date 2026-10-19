// Content configuration for Astro build-in CMS

import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: z
        .object({
          image: image(),
          alt: z.string(),
        })
        .optional(),
      alt: z.string().optional(),
      url: z.string(),
      featured: z.boolean(),
    }),
});

const testimonials = defineCollection({
  loader: file("src/collections/testimonials.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      jobTitle: z.string(),
      testimonial: z.string(),
      featured: z.boolean(),
      image: image(),
    }),
});

export const collections = { blog, works, testimonials };
