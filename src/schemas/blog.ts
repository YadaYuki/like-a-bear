import { z } from "astro:content";

export const Category = z.union([
  z.literal("tech"),
  z.literal("life"),
  z.literal("other"),
]);
export const Tag = z.string(); // TODO: to union
export const Blog = z.object({
  title: z.string(),
  category: Category,
  emoji: z.string(), // TODO: Consider Twemoji.
  tags: z.array(Tag).min(1).max(10),
  publishedDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  externalLink: z.string().optional(),
});
