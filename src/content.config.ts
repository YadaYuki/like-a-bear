import { Note } from "~/schemas/note";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: Note,
});

export const collections = { notes };
