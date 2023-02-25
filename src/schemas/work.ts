import { z } from "astro:content";

export const WorkCategory = z.union([
  z.literal("OSS"),
  z.literal("Research"),
  z.literal("Development"),
]);

export const Work = z.object({
  title: z.string(),
  thumbnailUrl: z.string(),
  category: WorkCategory,
  description: z.string(),
  githubUrl: z.string().optional(),
  thesisUrl: z.string().optional(),
  serviceUrl: z.string().optional(),
  blogUrl: z.string().optional(),
});
