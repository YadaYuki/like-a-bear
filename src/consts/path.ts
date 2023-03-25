import { dirname, join } from "node:path";

export const PROJECT_ROOT_DIR = join(
  dirname(new URL(import.meta.url).pathname),
  "..",
  ".."
);
export const SRC_DIR = join(PROJECT_ROOT_DIR, "src");
export const FONT_DIR = join(SRC_DIR, "assets", "fonts");
