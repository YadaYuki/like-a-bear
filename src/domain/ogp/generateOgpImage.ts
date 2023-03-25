import { join } from "node:path";
import { readFileSync } from "node:fs";
import satori from "satori";
import sharp from "sharp";
import { OgImgTemplate } from "./OgImgTemplate";
import { FONT_DIR } from "~/consts/path";

export const generateSvgFromComponent = async (title: string) => {
  const fontData = readFileSync(
    join(FONT_DIR, "Noto_Sans_JP", "NotoSansJP-Bold.otf")
  );
  const svg = await satori(
    OgImgTemplate({
      title,
    }),
    {
      width: 900,
      height: 437,
      fonts: [
        {
          name: "Noto Sans JP",
          data: fontData,
        },
      ],
    }
  );

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
};
