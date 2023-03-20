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
    if (recommendItemsCnt > tokenizedDocuments.length - 1) {
      throw Error(
        "The recommendItemsCnt should be less than documents count - 1"
      );
    }
    this.vectorizer.fitTransform(tokenizedDocuments);

    this.documentIdToRecommendItemMap = {};

    for (const tokenizedDocument of tokenizedDocuments) {
      const candidateIdAndSimilarity: {
        documentId: string;
        similarity: number;
      }[] = [];
      for (const recommendCandidate of tokenizedDocuments) {
        if (recommendCandidate.documentId === tokenizedDocument.documentId) {
          continue;
        }
        const similarity = this.calculater.similarity(
          this.vectorizer.vectorize(tokenizedDocument.documentId),
          this.vectorizer.vectorize(recommendCandidate.documentId)
        );
        candidateIdAndSimilarity.push({
          documentId: recommendCandidate.documentId,
          similarity,
        });
      }

      // sort documents by similarity. desc
      candidateIdAndSimilarity.sort((a, b) => b.similarity - a.similarity);

      // recommed recommendItemsCnt
      this.documentIdToRecommendItemMap[tokenizedDocument.documentId] = {
        documentId: tokenizedDocument.documentId,
        recommendedDocuments: candidateIdAndSimilarity
          .slice(0, recommendItemsCnt)
          .map((item) => item.documentId),
      };
    }

    return;
  }

  public getRecommendItemById(documentId: string): RecommendItem {
    if (this.documentIdToRecommendItemMap === undefined) {
      throw Error("The Content-based recommender is not fitted");
    }
    return this.documentIdToRecommendItemMap[documentId];
  }
}
