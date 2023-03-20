import { Notes, NoteType } from "~/schemas/note";

const CompanyTechBlog: NoteType[] = [];

const AiScholarNote: NoteType[] = [];

const ZennNotes: NoteType[] = [
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
];

export const ExternalNotes = [
  ...ZennNotes,
  ...CompanyTechBlog,
  ...AiScholarNote,
];

Notes.parse(ExternalNotes);
