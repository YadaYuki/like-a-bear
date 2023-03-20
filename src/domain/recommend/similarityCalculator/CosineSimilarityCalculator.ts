import type { SimilarityCalculatorBase } from "./base";
import { norm, innerProduct } from "../vector";

export class CosineSimilarityCalculator implements SimilarityCalculatorBase {
  similarity(va: number[], vb: number[]): number {
    return innerProduct(va, vb) / (norm(va) * norm(vb));
  }
}
