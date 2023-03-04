export const PAGES = ["notes", "works"] as const;
export type PageType = (typeof PAGES)[number];
export const PAGES_TO_LABEL_MAP = {
  notes: "Notes",
  works: "Works",
} as const;
