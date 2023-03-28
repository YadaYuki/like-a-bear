import { WorkType, Works as WorksValidator } from "~/schemas/work";

export const Works: WorkType[] = [
  {
    workId: "dark-patterns-in-e-commerce",
    title:
      "Dark Patterns in e-commerce: a dataset and its base line evaluation",
    category: "Research",
    description: [
      "Dark patterns are malicious user interface design that induce users to take unintended actions on the web.",
      "In this research, we constructed a text-based dataset for dark pattern auto detection in e-commerce sites. We also applied machine learning methods to show the automatic detection accuracy as baselines including transformer-based pre-trained language models ( e.g. BERT ). This research work has been published in IEEE BigData 2022.",
    ],
    githubUrl: "https://github.com/yamanalab/ec-darkpattern",
    thesisUrl: "https://arxiv.org/abs/2211.06543",
  },
  {
    workId: "search-engine-omochi",
    title: "Omochi: Full text search engine from scratch in Golang",
    category: "OSS",
    description: [
      "Omochi is an inverted index based search engine by Golang.",
      "If indexed correctly, any text-based documents can be searched. You can search documents from RESTful API. Supported language: English, Japanese.",
    ],
    githubUrl: "https://github.com/YadaYuki/Omochi",
    thesisUrl: "https://zenn.dev/yukiyada/articles/7e2c67d8406f0d",
  },
  {
    workId: "underwriting",
    title:
      "Underwriting: Real Estate Investment Simulation App for Professional",
    category: "Development",
    description: [""],
  },
  {
    workId: "velox-label-pfn",
    title:
      "VeloxLabel: An Efficient Annotation Tool for Object Recognition (Semantic Segmentation) Using Active Learning Techniques.",
    category: "Research",
    description: [
      "This is a project at Preferred Networks Inc. VeloxLabel is an Efficient Annotation Tool for Object Recognition (Semantic Segmentation) Using Active Learning Techniques. ",
    ],
    thesisUrl:
      "https://tech.preferred.jp/ja/blog/efficient-annotation-tool-using-active-learning/",
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
      "This project is a simple implementation of Convolutional Neural Networks (CNNs) and Deep Neural Networks (DNNs) using TypeScript programming language. The implementation is built from scratch and is heavily inspired by the book 'Deep Learning from Scratch'. The project aims to demonstrate the basics of neural network implementation and provide a starting point for those interested in learning more about deep learning. The dataset used for this project is MNIST, a well-known handwritten digits dataset that is commonly used as a benchmark for image classification tasks. MNIST consists of a training set of 60,000 examples and a test set of 10,000 examples.",
    ],
    githubUrl: "https://github.com/YadaYuki/neural_net_typescript",
    thesisUrl: "https://zenn.dev/yukiyada/articles/053722ddadd18a",
  },
  {
    workId: "neural-net-golang",
    title: "Deep Learning by Golang",
    category: "OSS",
    description: [
      "This project is a simple implementation of Deep Neural Networks (DNNs) using Golang programming language. The implementation is built from scratch and is heavily inspired by the book 'Deep Learning from Scratch'. The project aims to demonstrate the basics of neural network implementation and provide a starting point for those interested in learning more about deep learning. The dataset used for this project is MNIST, a well-known handwritten digits dataset that is commonly used as a benchmark for image classification tasks. MNIST consists of a training set of 60,000 examples and a test set of 10,000 examples.",
    ],
    githubUrl: "https://github.com/YadaYuki/deeplearning-golang",
    thesisUrl:
      "https://docs.google.com/presentation/d/1xgZ-q9xg8QciYratFcFoUVVn1_MJOMA5KTJI1IQoQq8/edit",
  },
  {
    workId: "like-a-bear",
    title: "Like a Bear",
    category: "Development",
    description: ["My own blog."],
    serviceUrl: "",
  },
  {
    workId: "transformer-from-scratch-pytorch",
    title:
      "Transformer from scratch: English to Japanese translator by Pytorch.",
    category: "OSS",
    description: [
      "This is a project that involves building an English to Japanese translator using PyTorch, with the neural network architecture based on the Transformer model. The implementation of the layers for the Transformer model is done from scratch using PyTorch. The dataset used for training is a parallel corpus called kftt.",
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
      "Effectivest is a learning app that maximizes your learning efficiency. You can create your own tests using the app. The app saves your accuracy rates for each question, allowing you to focus on areas where you struggle. Additionally, the app provides graphs of your progress, allowing you to visually track your growth over time.",
    ],
  },
  {
    workId: "portfolio-me",
    title: "Portfolio Site",
    category: "Development",
    description: ["My Portfolio Site. Developed in Vue.js/JavaScript"],
    serviceUrl: "https://www.yyada.jp/",
  },
];

WorksValidator.parse(Works);
