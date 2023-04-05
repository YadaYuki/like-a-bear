import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "~/consts/meta";
import { SITE_URL } from "~/consts/url";
import { sortNoteListByPubDate } from "~/utils/collection";
import { ExternalNotes } from "~/data/externalNotes";

export async function get(context) {
  const collections = await getCollection("notes");
  const internalNotes = collections.map((collection) => collection.data);
  const noteItems = sortNoteListByPubDate([...internalNotes, ...ExternalNotes]);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: noteItems.map((note) => {
      const link =
        note.externalLink !== undefined
          ? note.externalLink
          : `${SITE_URL}/${note.noteId}`;
      return {
        title: note.title,
        pubDate: note.pubDate,
        link: link,
        description: note.description,
      };
    }),
  });
}
