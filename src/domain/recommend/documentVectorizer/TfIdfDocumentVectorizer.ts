import type { DocumentVectorizerBase } from "./base";
import type { TokenizedDocument } from "../type";

export class TfIdfDocumentVectorizerBase implements DocumentVectorizerBase {
  fit(docments: TokenizedDocument[]): void {
    return;
  }

  vectorize(documentId: string): number[] {
    return [];
  }
}
