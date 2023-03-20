export type TokenizedDocument = {
  documentId: string;
  tokenizedContent: string[];
};

export type RecommendItem = {
  documentId: string;
  recommendedDocuments: string[];
};
