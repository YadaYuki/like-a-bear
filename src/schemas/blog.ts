import { z } from "astro:content";

export const BlogCategory = z.union([
  z.literal("tech"),
  z.literal("life"),
  z.literal("other"),
]);

export const Blog = z.object({
  title: z.string(),
  description: z.string(),
  category: BlogCategory,
  emoji: z.string(), // TODO: Consider Twemoji.
  tags: z.array(z.string()).min(1).max(10),
  publishedDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  externalLink: z.string().optional(),
});
