import type { NoteType } from "~/schemas/note";

export const sortNoteListByPubDate = (
  notes: NoteType[],
  order: "desc" | "asc" = "desc"
): NoteType[] => {
  const sortFn = (a: NoteType, b: NoteType) => {
    if (order === "asc") {
      return a.pubDate.getTime() - b.pubDate.getTime();
    }
    return b.pubDate.getTime() - a.pubDate.getTime();
  };
  return [...notes].sort(sortFn);
};
