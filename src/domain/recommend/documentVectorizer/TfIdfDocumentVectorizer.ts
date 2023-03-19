import type { DocumentVectorizerBase } from "./base";
import type { TokenizedDocument } from "../type";
import { uniq, sorted, sum } from "~/utils/collection";

export class TfIdfDocumentVectorizer implements DocumentVectorizerBase {
  private documentIdToVector?: { [k: string]: number[] };

  fitTransform(documents: TokenizedDocument[]): number[][] {
    const N = documents.length;
    // idf
    const termsToDocumentFrequency: { [k: string]: number } = {};
    for (const doc of documents) {
      const termsInDoc = uniq(doc.tokenizedContent);
      for (const term of termsInDoc) {
        if (term in termsToDocumentFrequency) {
          termsToDocumentFrequency[term] += 1;
          continue;
        }
        termsToDocumentFrequency[term] = 1;
      }
    }

    const vocab = sorted(Object.keys(termsToDocumentFrequency));
    const termToIdx = Object.fromEntries(vocab.map((term, idx) => [term, idx]));
    const termsToIDF: { [k: string]: number } = {};
    for (const term of vocab) {
      const idf = Math.log((N + 1) / (termsToDocumentFrequency[term] + 1)) + 1;
      termsToIDF[term] = idf;
    }

    // tf
    const tfIdfVectors: number[][] = [];
    for (let i = 0; i < N; i++) {
      tfIdfVectors.push(Array<number>(vocab.length).fill(0));
    }
    for (let i = 0; i < N; i++) {
      const doc = documents[i];
      for (const term of doc.tokenizedContent) {
        const vocabIdx = termToIdx[term];
        tfIdfVectors[i][vocabIdx] += 1;
      }
    }
    // console.log(tf);
    // tf-idf
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < vocab.length; j++) {
        const term = vocab[j];
        tfIdfVectors[i][j] *= termsToIDF[term];
      }
    }

    const normalizedTfIdfVectors = tfIdfVectors.map((vector) =>
      this.normalizeL2(vector)
    );
    this.documentIdToVector = {};

    for (let i = 0; i < N; i++) {
      this.documentIdToVector[documents[i].documentId] =
        normalizedTfIdfVectors[i];
    }

    return normalizedTfIdfVectors;
  }

  vectorize(documentId: string): number[] {
    if (this.documentIdToVector === undefined) {
      throw Error("The TF-IDF vectorizer is not fitted");
    }
    return this.documentIdToVector[documentId];
  }

  normalizeL2(vector: number[]): number[] {
    const norm = Math.sqrt(sum(vector.map((v) => v * v)));
    return vector.map((v) => v / norm);
  }
}
