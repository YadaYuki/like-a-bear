import type { DocumentVectorizerBase } from "~/domain/recommend/documentVectorizer/base";
import type { SimilarityCalculatorBase } from "~/domain/recommend/similarityCalculator/base";
import type { TokenizedDocument, RecommendItem } from "~/domain/recommend/type";

export class ContentBasedRecommender {
  private vectorizer: DocumentVectorizerBase;
  private calculater: SimilarityCalculatorBase;
  private documentIdToRecommendItemMap?: { [k: string]: RecommendItem };

  constructor(
    vectorizer: DocumentVectorizerBase,
    calculator: SimilarityCalculatorBase
  ) {
    this.vectorizer = vectorizer;
    this.calculater = calculator;
  }

  public fit(
    tokenizedDocuments: TokenizedDocument[],
    recommendItemsCnt = 4
  ): void {
    return;
  }

  public getRecommendItemById(documentId: string): RecommendItem {
    if (this.documentIdToRecommendItemMap === undefined) {
      throw Error("The Content-based recommender is not fitted");
    }
    return this.documentIdToRecommendItemMap[documentId];
  }
}
