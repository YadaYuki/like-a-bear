import type { APIRoute, APIContext } from "astro";
import { generateSvgFromComponent } from "~/domain/ogp/generateOgpImage";
import { getCollection } from "astro:content";

export const get: APIRoute = async ({ props }: APIContext) => {
  const res = await generateSvgFromComponent(props.note.title);
  return new Response(res, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};

export async function getStaticPaths() {
  const collections = await getCollection("notes");
  const internalNotes = collections.map((collection) => collection.data);
  return internalNotes.map((note) => {
    return {
      params: { note_id: note.noteId },
      props: { note },
    };
  });
}
