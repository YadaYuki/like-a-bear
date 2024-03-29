import { z } from "astro:content";

export const NoteCategory = z.union([
  z.literal("tech"),
  z.literal("life"),
  z.literal("other"),
]);

export type NoteCategoryType = z.infer<typeof NoteCategory>;

export const Note = z.object({
  title: z.string(),
  description: z.string(),
  category: NoteCategory,
  emoji: z.string(),
  tags: z.array(z.string()).min(1).max(10),
  pubDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val)),
  externalLink: z.string().optional(),
  noteId: z.string().optional(),
});

export const Notes = z.array(Note);

export type NoteType = z.infer<typeof Note>;
