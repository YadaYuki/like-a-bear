import { Notes, NoteType } from "~/schemas/note";

const CompanyTechBlog: NoteType[] = [
  {
    title:
      "Vision-Language Modelを活用した「見た目が近い商品」レコメンド改善の取り組み",
    description: "",
    category: "tech",
    emoji: "😳",
    tags: ["machine learning", "recommendation", "vision & language"],
    pubDate: new Date("2024-11-08"),
    externalLink:
      "https://engineering.mercari.com/blog/entry/20241104-similar-looks-recommendation-via-vision-language-model/",
  },
  {
    title:
      "ソウゾウのインターン生として特集一括エントリー機能をリリースしました！",
    description: "",
    category: "tech",
    emoji: "🏹",
    tags: [
      "frontend",
      "backend",
      "go",
      "graphql",
      "react",
      "typescript",
      "grpc",
      "pubsub",
      "internship",
    ],
    pubDate: new Date("2023-04-28"),
    externalLink:
      "https://engineering.mercari.com/blog/entry/20230428-6aa09381e4/",
  },
  {
    title:
      "アクティブラーニングの手法を活用した物体認識における効率的なアノテーションツールの開発",
    description: "",
    category: "tech",
    emoji: "🎩",
    tags: [
      "machine learning",
      "computer vision",
      "semantic segmentation",
      "active learning",
      "internship",
    ],
    pubDate: new Date("2022-11-18"),
    externalLink:
      "https://tech.preferred.jp/ja/blog/efficient-annotation-tool-using-active-learning/",
  },
  {
    title:
      "フロントエンドエンジニアとしてRECRUIT Job for Student 2021 Summerに参加しました!",
    description: "",
    category: "tech",
    emoji: "🎸",
    tags: ["frontend", "typescript", "react", "internship"],
    pubDate: new Date("2021-10-05"),
    externalLink: "https://blog.recruit.co.jp/rmp/etc/post-21636/",
  },
];

const AiScholarNote: NoteType[] = [
  {
    title:
      "専門知識を持つデータで事前学習することの重要性とは？ ~ 法律文書の分類に対するBERTの応用 ~",
    description: "",
    category: "tech",
    emoji: "📕",
    tags: ["machine learning", "nlp", "bert", "text classification"],
    pubDate: new Date("2022-06-21"),
    externalLink:
      "https://ai-scholar.tech/articles/natural-language-processing/legal-document-classification-bert",
  },
  {
    title:
      "レコメンドは思想にも影響を与えてしまうのか: トピック間の政治的立場の違いに着目したニュース推薦",
    description: "",
    category: "tech",
    emoji: "🔦",
    tags: ["machine learning", "recommendation", "bert", "text classification"],
    pubDate: new Date("2023-02-06"),
    externalLink:
      "https://ai-scholar.tech/articles/recommendation/news-recommendation-political-stance",
  },
];

const ZennNotes: NoteType[] = [
  {
    title: "自動運転のための大規模なVisual QAデータセット・AutoScenesQAの作成",
    description: "",
    category: "tech",
    emoji: "😽",
    tags: ["machine learning", "nlp", "llm", "vision and language"],
    pubDate: new Date("2023-10-23"),
    externalLink: "https://zenn.dev/turing_motors/articles/64936f88ba720e",
  },
  {
    title:
      "【LLM for NewsRec】大規模言語モデル(BERT)を活用したニュース推薦のPyTorchによる実装と評価",
    description: "",
    category: "tech",
    emoji: "📑",
    tags: ["machine learning", "recommendation", "bert"],
    pubDate: new Date("2023-09-25"),
    externalLink: "https://zenn.dev/yukiyada/articles/d028faf7217ec8",
  },
  {
    title: "【Astro on Cloudflare】個人ブログを支える技術",
    description: "",
    category: "tech",
    emoji: "🐈",
    tags: ["frontend", "astro", "recommendation", "react"],
    pubDate: new Date("2023-04-17"),
    externalLink: "https://zenn.dev/yukiyada/articles/d5681300a7fc28",
  },
  {
    title:
      "【脱ランタイムCSS in JS】styled-componentsを別のCSS in JSに自動置換するCLIツールの開発",
    description: "",
    category: "tech",
    emoji: "🔖",
    tags: [
      "frontend",
      "typescript",
      "react",
      "css",
      "ast",
      "styled-components",
      "internship",
    ],
    pubDate: new Date("2022-11-01"),
    externalLink: "https://zenn.dev/yukiyada/articles/0ac6ef8d566b96",
  },
  {
    title: "Go製の全文検索エンジンOmochiを作った.",
    description: "",
    category: "tech",
    emoji: "😊",
    tags: ["backend", "go", "nlp", "search engine", "docker"],
    pubDate: new Date("2022-07-25"),
    externalLink: "https://zenn.dev/yukiyada/articles/7e2c67d8406f0d",
  },
  {
    title: "Python(PyTorch)で自作して理解するTransformer",
    description: "",
    category: "tech",
    emoji: "🙊",
    tags: ["machine learning", "python", "pytorch", "nlp", "docker"],
    pubDate: new Date("2022-03-31"),
    externalLink: "https://zenn.dev/yukiyada/articles/59f3b820c52571",
  },
  {
    title:
      "Nand2tetrisをGoで実装する ~ コンパイラ(コンパイラ・フロントエンド)編(10,11章) ~",
    description: "",
    category: "tech",
    emoji: "😺",
    tags: ["go", "ast", "computer"],
    pubDate: new Date("2021-11-26"),
    externalLink: "https://zenn.dev/yukiyada/articles/23c9fde740744d",
  },
  {
    title:
      "Nand2tetrisをGoで実装する ~ 中間言語・VM(コンパイラ・バックエンド)編 ~",
    description: "",
    category: "tech",
    emoji: "😺",
    tags: ["go", "ast", "computer", "virtual machine"],
    pubDate: new Date("2021-11-26"),
    externalLink: "https://zenn.dev/yukiyada/articles/f90cf5fa34073c",
  },
  {
    title: "Nand2tetrisをGoで実装する ~ アセンブラ編(6章) ~",
    description: "",
    category: "tech",
    emoji: "😺",
    tags: ["go", "ast", "computer", "assembler"],
    pubDate: new Date("2021-12-03"),
    externalLink: "https://zenn.dev/yukiyada/articles/44805448111905",
  },
  {
    title: "Nand2tetrisを実装する ~ハードウェア編(1 ~ 5章)~",
    description: "",
    category: "tech",
    emoji: "😺",
    tags: ["hardware", "cpu", "computer"],
    pubDate: new Date("2021-11-26"),
    externalLink: "https://zenn.dev/yukiyada/articles/1c5708ddfb36db",
  },
  {
    title: "Typescriptでゼロから作るニューラルネット",
    description: "",
    category: "tech",
    emoji: "🧠",
    tags: ["machine learning", "typescript"],
    pubDate: new Date("2021-10-01"),
    externalLink: "https://zenn.dev/yukiyada/articles/053722ddadd18a",
  },
  {
    title: "個人開発物のインフラを爆速で改善する(ECS,Fargate,Docker Compose)",
    description: "",
    category: "tech",
    emoji: "🎃",
    tags: ["infrastructure", "fargate", "docker", "ecs", "aws"],
    pubDate: new Date("2021-06-29"),
    externalLink: "https://zenn.dev/yukiyada/articles/ae01f51e9d92c1",
  },
];

export const ExternalNotes = [
  ...ZennNotes,
  ...CompanyTechBlog,
  ...AiScholarNote,
];

Notes.parse(ExternalNotes);
