import { Note } from "~/schemas/note";
import { defineCollection } from "astro:content";

const notes = defineCollection({
  schema: Note,
});

export const collections = { notes };
