import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { existsSync, mkdirSync } from "node:fs";

const WORKS_DIR = new URL("../public/works", import.meta.url).pathname;
const THUMBS_DIR = join(WORKS_DIR, "thumbs");

const THUMB_WIDTH = 32;
const BLUR_SIGMA = 3;

if (!existsSync(THUMBS_DIR)) {
  mkdirSync(THUMBS_DIR, { recursive: true });
}

const files = await readdir(WORKS_DIR);
const pngFiles = files.filter((f) => f.endsWith(".png"));

console.log(`Generating ${pngFiles.length} thumbnails...`);

await Promise.all(
  pngFiles.map(async (file) => {
    const input = join(WORKS_DIR, file);
    const output = join(THUMBS_DIR, basename(file, ".png") + ".webp");
    await sharp(input)
      .resize(THUMB_WIDTH)
      .blur(BLUR_SIGMA)
      .webp({ quality: 20 })
      .toFile(output);
    console.log(`  ${file} -> thumbs/${basename(output)}`);
  })
);

console.log("Done!");
