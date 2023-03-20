import { sum } from "~/utils/collection";

export const norm = (v: number[]): number => {
  return Math.sqrt(sum(v.map((v) => v * v)));
};

export const innerProduct = (va: number[], vb: number[]): number => {
  if (va.length != vb.length) {
    throw new Error("va and vb has different dimensions");
  }
  return sum(va.map((_, idx) => va[idx] * vb[idx]));
};
