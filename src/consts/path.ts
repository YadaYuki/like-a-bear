import { join } from "node:path";

export const PROJECT_ROOT_DIR = process.cwd();
export const SRC_DIR = join(PROJECT_ROOT_DIR, "src");
export const FONT_DIR = join(SRC_DIR, "assets", "fonts");
