import type { TokenizedDocument } from "~/domain/recommend/type";

export interface DocumentVectorizerBase {
  fit(docments: TokenizedDocument[]): void;
  vectorize(documentId: string): number[];
}
