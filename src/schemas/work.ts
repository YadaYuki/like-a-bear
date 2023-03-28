import { z } from "astro:content";

export const WorkCategory = z.union([
  z.literal("OSS"),
  z.literal("Research"),
  z.literal("Development"),
]);

export type WorkCategoryType = z.infer<typeof WorkCategory>;

export const Work = z.object({
  workId: z.string(),
  title: z.string(),
  category: WorkCategory,
  description: z.array(z.string()), // paragraph seperated
  githubUrl: z.string().optional(),
  thesisUrl: z.string().optional(),
  serviceUrl: z.string().optional(),
});

export const Works = z.array(Work);

export type WorkType = z.infer<typeof Work>;
