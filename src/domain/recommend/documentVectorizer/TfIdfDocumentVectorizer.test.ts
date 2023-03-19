import { expect, describe, it } from "vitest";
import { TfIdfDocumentVectorizer } from "./TfIdfDocumentVectorizer";
import type { TokenizedDocument } from "../type";

// The two tests marked with concurrent will be run in parallel
describe("TfIdfDocumentVectorizer", () => {
  it(`fitTransform() by single document`, async () => {
    const vectorizer = new TfIdfDocumentVectorizer();
    const tokenizedDocuments: TokenizedDocument[] = [
      {
        documentId: "document-id-1",
        tokenizedContent: ["This", "is", "the", "first", "document"],
      },
    ];
    const vectors = vectorizer.fitTransform(tokenizedDocuments);
    const expected = [[0.4472136, 0.4472136, 0.4472136, 0.4472136, 0.4472136]];
    vectors.forEach((vector, i) => {
      vector.forEach((v, j) => {
        expect(v).toBeCloseTo(expected[i][j], 5);
      });
    });
  });
  it(`fitTransform() by multiple document`, async () => {
    const vectorizer = new TfIdfDocumentVectorizer();
    const tokenizedDocuments: TokenizedDocument[] = [
      {
        documentId: "document-id-1",
        tokenizedContent: ["this", "is", "the", "first", "document"],
      },
      {
        documentId: "document-id-2",
        tokenizedContent: [
          "this",
          "document",
          "is",
          "the",
          "second",
          "document",
        ],
      },
      {
        documentId: "document-id-3",
        tokenizedContent: ["and", "this", "is", "the", "third", "one"],
      },
      {
        documentId: "document-id-4",
        tokenizedContent: ["is", "this", "the", "first", "document"],
      },
    ];
    const vectors = vectorizer.fitTransform(tokenizedDocuments);
    const expected = [
      [
        0.0, 0.46979138557992045, 0.5802858236844359, 0.38408524091481483, 0.0,
        0.0, 0.38408524091481483, 0.0, 0.38408524091481483,
      ],
      [
        0.0, 0.6876235979836938, 0.0, 0.281088674033753, 0.0,
        0.5386476208856763, 0.281088674033753, 0.0, 0.281088674033753,
      ],
      [
        0.511848512707169, 0.0, 0.0, 0.267103787642168, 0.511848512707169, 0.0,
        0.267103787642168, 0.511848512707169, 0.267103787642168,
      ],
      [
        0.0, 0.46979138557992045, 0.5802858236844359, 0.38408524091481483, 0.0,
        0.0, 0.38408524091481483, 0.0, 0.38408524091481483,
      ],
    ];
    vectors.forEach((vector, i) => {
      vector.forEach((v, j) => {
        expect(v).toBeCloseTo(expected[i][j], 5);
      });
    });
  });
  it(`fitTransform() by multiple document`, async () => {
    const vectorizer = new TfIdfDocumentVectorizer();
    const tokenizedDocuments: TokenizedDocument[] = [
      {
        documentId: "document-id-1",
        tokenizedContent: ["this", "is", "the", "first", "document"],
      },
      {
        documentId: "document-id-2",
        tokenizedContent: [
          "this",
          "document",
          "is",
          "the",
          "second",
          "document",
        ],
      },
      {
        documentId: "document-id-3",
        tokenizedContent: ["and", "this", "is", "the", "third", "one"],
      },
      {
        documentId: "document-id-4",
        tokenizedContent: ["is", "this", "the", "first", "document"],
      },
    ];
    vectorizer.fitTransform(tokenizedDocuments);
    const vector = vectorizer.vectorize("document-id-2");
    const expected = [
      0.0, 0.6876235979836938, 0.0, 0.281088674033753, 0.0, 0.5386476208856763,
      0.281088674033753, 0.0, 0.281088674033753,
    ];

    vector.forEach((v, i) => {
      expect(v).toBeCloseTo(expected[i], 5);
    });
  });
});
