export type Perspective = {
  title: string;
  category: string;
  href: string;
};

export type Essay = {
  title: string;
  paragraph: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type LecturePreview = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const perspectives: Perspective[] = [
  {
    title: "Finance is failing Gen Z",
    category: "Business",
    href: "/writing/business/finance-is-failing-gen-z",
  },
  {
    title: "AI drives growth in micro enterprises",
    category: "Economics",
    href: "/writing/economics/ai-drives-growth-in-micro-enterprises",
  },
  {
    title: "Prosperity underpins economic growth",
    category: "Public policy",
    href: "/writing/public-policy/prosperity-underpins-economic-growth",
  },
];

export const essays: Essay[] = [
  {
    title: "Sound analysis is key to the long term",
    paragraph: "A look at patience, compounding and avoiding short-term noise.",
    category: "Investing",
    date: "24 May 2025",
    readingTime: "6 min read",
    image: "/images/essay-markets.png",
    imageAlt: "Financial chart with stacked coins",
    href: "/writing/economics/sound-analysis-is-key-to-the-long-term",
  },
  {
    title: "The economy: risks, resilience and reality",
    paragraph: "Observations on growth, inflation and where we go from here.",
    category: "Economics",
    date: "20 May 2025",
    readingTime: "5 min read",
    image: "/images/essay-economy.png",
    imageAlt: "City skyline at sunset",
    href: "/writing/economics/the-economy-risks-resilience-and-reality",
  },
  {
    title: "Behavioural biases that influence decisions",
    paragraph: "Understanding the psychology behind smarter choices.",
    category: "Behavioural finance",
    date: "16 May 2025",
    readingTime: "7 min read",
    image: "/images/essay-behaviour.png",
    imageAlt: "Chess pieces arranged on a board",
    href: "/writing/economics/behavioural-biases-that-influence-decisions",
  },
  {
    title: "Scotland's economy and health",
    paragraph: "current issues in health, society and education.",
    category: "Scotland",
    date: "12 May 2025",
    readingTime: "4 min read",
    image: "/images/essay-scotland.png",
    imageAlt: "Notebook and coffee on a desk",
    href: "/writing/other-interests/scotlands-economy-and-health",
  },
];

export const lectures: LecturePreview[] = [
  {
    number: "01",
    title: "Behavioural Finance in Practice",
    description: "How human behaviour shapes investment decisions.",
    image: "/images/lecture-finance.png",
    imageAlt: "A speaker presenting to an audience",
    href: "/lectures/behavioural-finance-in-practice",
  },
  {
    number: "02",
    title: "Current Topics in Investment",
    description: "Key trends and what they mean for investors.",
    image: "/images/lecture-behaviour.png",
    imageAlt: "Financial market chart",
    href: "/lectures/current-topics-in-investment",
  },
];
