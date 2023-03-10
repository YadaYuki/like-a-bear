import dayjs from "dayjs";

export const renderDate = (d: Date, fmt = "YYYY.MM.DD"): string => {
  return dayjs(d).format(fmt);
};
