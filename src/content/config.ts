import { Blog } from "~/schemas/blog";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  schema: Blog,
});

export const collections = { blog };
