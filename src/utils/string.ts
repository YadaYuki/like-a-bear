import { EmojiEntity, parse } from "twemoji-parser";

export const capitalize = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1, s.length);
};

export const convertEmojiStrToTwiImage = (s: string): EmojiEntity => {
  const entities = parse(s);

  if (entities.length !== 1) {
    throw Error("1 emoji must be set");
  }
  const emojiEntity = entities[0];
  // ref: https://github.com/twitter/twemoji/issues/580#issuecomment-1376290759
  emojiEntity.url = emojiEntity.url.replace("https://twemoji.maxcdn.com/v/latest/svg/", "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/")
  return emojiEntity;
};

export const constructTwitterShareURL = (url: string) => {
  return `http://www.twitter.com/share?url=${url}`;
};
