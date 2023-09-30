import { WorkType, Works as WorksValidator } from "~/schemas/work";

export const Works: WorkType[] = [
  {
    workId: "dark-patterns-in-e-commerce",
    title:
      "Dark Patterns in e-commerce: a dataset and its base line evaluation",
    category: "Research",
    description: [
      "Dark patterns, which are user interface designs in online services, induce users to take unintended actions. Recently, dark patterns have been raised as an issue of privacy and fairness.",
      "In this work, we constructed a dataset for dark pattern detection and prepared its baseline detection performance with state-of-the-art machine learning methods. The original dataset was obtained from Mathur et al.'s study in 2019, which consists of 1,818 dark pattern texts from shopping sites. Then, we added negative samples, i.e., non-dark pattern texts, by retrieving texts from the same websites as Mathur et al.'s dataset.",
      "We also applied state-of-the-art machine learning methods to show the automatic detection accuracy as baselines, including BERT, RoBERTa, ALBERT, and XLNet. As a result of 5-fold cross-validation, we achieved the highest accuracy of 0.975 with RoBERTa. We published the dataset and baseline source codes on Github.",
      "This research work has been published in IEEE BigData 2022.",
    ],
    githubUrl: "https://github.com/yamanalab/ec-darkpattern",
    thesisUrl: "https://arxiv.org/abs/2211.06543",
  },
  {
    workId: "search-engine-omochi",
    title: "Omochi: Full text search engine from scratch in Golang",
    category: "OSS",
    description: [
      "Omochi is a full-text search engine built using Go programming language. It implements various features including morphological analysis for separating documents into words, ranking documents using TfIdf, compression and decompression of inverted indexes and posting lists, and document indexing, all from scratch using Go.",
      "Omochi adopts a layered architecture design for its application. MySQL is used for storing inverted indexes and documents, while Meta's ent is used for object-relational mapping.",
      "It supports two languages, Japanese and English, allowing for registration and search of any document.",
      "Omochi's source code is publicly available on Github and has garnered more than 70 stars as of April 2023.",
    ],
    githubUrl: "https://github.com/YadaYuki/Omochi",
    thesisUrl: "https://zenn.dev/yukiyada/articles/7e2c67d8406f0d",
  },
  {
    workId: "underwriting",
    title:
      "Underwriting: Real Estate Investment Simulation App for Professional",
    category: "Development",
    description: [
      "UnderWriting is a real estate investment simulation app developed by GRIT Tech, a startup in the real estate tech industry. It is specifically designed for professional real estate investors. As the lead engineer, I was involved in the development of the service from its launch to release in a limited resource environment with a few project managers.",
      "Users input over 60 different variables such as the location of the property they intend to purchase (entered via Google Maps), purchase price, loan taken at the time of purchase, monthly repayment amount, and expected rental income during the investment period through a form. Based on these inputs, the application calculates metrics such as monthly cash flow, loan repayment amount, and total return on investment throughout the investment period.",
      "To achieve high-precision real estate investment simulation calculations, complex calculations are required. Therefore, UnderWriting implements a total of approximately 150 calculation logic (functions) on the front-end application.",
      "The technology stack used in the project is React (SPA), Typescript, Python, and FastAPI, tailored to the existing product.",
    ],
    serviceUrl: "https://app.propmtx.com/",
  },
  {
    workId: "velox-label-pfn",
    title:
      "VeloxLabel: An Efficient Annotation Tool for Object Recognition (Semantic Segmentation) Using Active Learning Techniques.",
    category: "Research",
    description: [
      'VeloxLabel is an efficient annotation tool equipped with AI annotation functionality for object detection (semantic segmentation). This project is developed by Preferred Networks Inc. The RIPU technique used in this tool is an active learning method proposed through a paper titled "Towards Fewer Annotations: Active Learning via Region Impurity and Prediction Uncertainty for Domain Adaptive Semantic Segmentation," which was accepted at CVPR 2022, a top conference in the field of computer vision.',
      "The annotation process involves inferring the image to be annotated using a pre-trained model and identifying areas of high uncertainty using the Region Impurity and Prediction Uncertainty (RIPU) metric, which is calculated based on the number of classes within adjacent pixels and the predicted label entropy.",
      "The tool was implemented using PyTorch for deep learning model implementation, FastAPI for API implementation, and React/TypeScript/Vite for frontend development.",
    ],
    thesisUrl:
      "https://tech.preferred.jp/ja/blog/efficient-annotation-tool-using-active-learning/",
  },
  {
    workId: "news-recommendation-llm",
    title: "News Recommendation by LLM",
    category: "Research",
    description: [
      "Implementation of a News Recommendation system utilizing Pretrained Large Language Models named PLM-NR(NRMS-BERT) using Python and PyTorch. We employed BERT-base and DistilBERT-base as the underlying language models, and utilized the Microsoft-originated MIND dataset for model training and evaluation.",
      "Our trained models achieved impressive performance on validation data, closely aligning with the results reported in the PLM-NR research paper. We have also made our pretrained models publicly available for further research and applications.",
    ],
    thesisUrl: "https://zenn.dev/yukiyada/articles/d028faf7217ec8",
    githubUrl: "https://github.com/YadaYuki/news-recommendation-llm",
  },
  {
    workId: "nand2tetris-golang",
    title:
      "Nand2tetris in Golang: Building a Modern Computer & Programming Language from First Principles",
    category: "OSS",
    description: [
      "Nand2tetris is a unique project that allows you to build a complete computer system from scratch, starting with nothing but a Nand gate.",
      "By following the step-by-step instructions provided in the project, you will be able to create your own computer hardware, design a programming language, and write software programs to run on your custom-built computer.",
      "Through this hands-on approach, you will gain a deep understanding of how modern computers work, including hardware, compilers, and assembly. The project is divided into several chapters, each of which covers a different aspect of computer design and programming.",
    ],
    githubUrl: "https://github.com/YadaYuki/Omochi",
    thesisUrl: "https://zenn.dev/yukiyada/articles/7e2c67d8406f0d",
  },
  {
    workId: "neural-net-typescript",
    title:
      "Neural Network by Typescript: Very Simple Neural Network Implementation By Typescript.",
    category: "OSS",
    description: [
      "This project is a simple implementation of Convolutional Neural Networks (CNNs) and Deep Neural Networks (DNNs) using TypeScript.",
      "The implementation is built from scratch and is heavily inspired by the book 'Deep Learning from Scratch'. ",
      "The project aims to demonstrate the basics of neural network implementation and provide a starting point for those interested in learning more about deep learning.",
      "The dataset used for this project is MNIST, a well-known handwritten digits dataset that is commonly used as a benchmark for image classification tasks. MNIST consists of a training set of 60,000 examples and a test set of 10,000 examples.",
    ],
    githubUrl: "https://github.com/YadaYuki/neural_net_typescript",
    thesisUrl: "https://zenn.dev/yukiyada/articles/053722ddadd18a",
  },
  {
    workId: "neural-net-golang",
    title: "Deep Learning by Golang",
    category: "OSS",
    description: [
      "This project is a simple implementation of Deep Neural Networks (DNNs) using Golang. ",
      "The implementation is built from scratch and is heavily inspired by the book 'Deep Learning from Scratch'.",
      "The project aims to demonstrate the basics of neural network implementation and provide a starting point for those interested in learning more about deep learning.",
      "The dataset used for this project is MNIST, a well-known handwritten digits dataset that is commonly used as a benchmark for image classification tasks. MNIST consists of a training set of 60,000 examples and a test set of 10,000 examples.",
    ],
    githubUrl: "https://github.com/YadaYuki/deeplearning-golang",
    thesisUrl:
      "https://docs.google.com/presentation/d/1xgZ-q9xg8QciYratFcFoUVVn1_MJOMA5KTJI1IQoQq8/edit",
  },
  {
    workId: "like-a-bear",
    title: "Like a Bear",
    category: "Development",
    description: ["My Blog Site by Astro"],
    serviceUrl: "",
  },
  {
    workId: "transformer-from-scratch-pytorch",
    title:
      "Transformer from scratch: English to Japanese translator by Pytorch.",
    category: "OSS",
    description: [
      "Transformer is one of deep learning model that exhibits high performance in natural language processing tasks such as translation, document generation, and question answering.",
      "This is a project that involves building an English to Japanese translator using PyTorch, with the neural network architecture based on the Transformer model. ",
      "The implementation of the layers for the Transformer model (e.g. ScaledDotProductAttention, PositionalEncoding... etc) is done from scratch using Python/PyTorch.",
      "The dataset used for training is a parallel corpus called kftt.",
    ],
    githubUrl:
      "https://github.com/YadaYuki/en_ja_translator_pytorch/stargazers",
    thesisUrl: "https://zenn.dev/yukiyada/articles/59f3b820c52571",
  },
  {
    workId: "study-app-effectivest",
    title: "Effectivest: study app that maximizes learning efficiency",
    category: "Development",
    description: [
      "Effectivest is a learning app that maximizes your learning efficiency. ",
      "You can create your own tests using the app. The app saves your accuracy rates for each question, allowing you to focus on areas where you struggle. ",
      "Additionally, the app provides graphs of your progress, allowing you to visually track your growth over time. This application is implemented by React/JavaScript/Node.js. ",
    ],
  },
  {
    workId: "portfolio-me",
    title: "Portfolio Site",
    category: "Development",
    description: ["My Portfolio Site by Vue.js"],
    serviceUrl: "https://www.yyada.jp/",
  },
];

WorksValidator.parse(Works);
