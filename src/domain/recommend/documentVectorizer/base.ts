import type { TokenizedDocument } from "~/domain/recommend/type";

export interface DocumentVectorizerBase {
  fitTransform(docments: TokenizedDocument[]): number[][];
  vectorize(documentId: string): number[];
}
