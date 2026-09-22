export type WritingPost = {
  slug?: string;
  title: string;
  category: string;
  categoryHref?: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  href: string;
  author?: {
    name: string;
    avatar: string;
    role?: string;
  };
  content?: {
    lead: string;
    sections: Array<{
      heading?: string;
      paragraphs?: string[];
      bulletList?: Array<{
        title: string;
        description: string;
      }>;
      numberedList?: string[];
    }>;
    closing?: string;
  };
  htmlContent?: string;
};

export const featuredPost: WritingPost = {
  slug: "the-power-of-compounding",
  title: "The Power of Compounding: Small Steps, Big Freedom",
  category: "Investing",
  categoryHref: "/writing/economics",
  excerpt:
    "How consistent investing over time can turn small contributions into life-changing wealth through the magic of compounding.",
  date: "May 12, 2024",
  readingTime: "6 min read",
  image: "/images/blog1.png",
  imageAlt: "A young plant growing from stacked coins in fertile soil",
  href: "/writing/economics/the-power-of-compounding",
  author: {
    name: "Aria Lewis",
    avatar: "/images/aria-lewis.jpg",
    role: "Financial Contributor",
  },
  content: {
    lead: 'Albert Einstein reportedly called compounding the "eighth wonder of the world." And while he might not have been talking about your personal finances, the title fits. Compounding is the quiet force that can turn modest, consistent investments into extraordinary wealth over time.',
    sections: [
      {
        heading: "What is Compounding?",
        paragraphs: [
          "Compounding is the process of earning returns on your initial investment—and then earning returns on those returns. It's like a snowball rolling downhill, growing bigger and faster the longer it goes.",
          "The earlier you start, and the more consistent you are, the more powerful compounding becomes.",
        ],
      },
      {
        heading: "A Simple Example",
        paragraphs: [
          "Let's say you invest $200 every month in an index fund that returns an average of 8% per year.",
        ],
      },
      {
        heading: "Why It Matters",
        bulletList: [
          {
            title: "Time is your greatest ally:",
            description: "The longer your money compounds, the less you have to contribute.",
          },
          {
            title: "Consistency beats intensity:",
            description: "Small, regular investments often outperform irregular, large ones.",
          },
          {
            title: "It creates financial freedom:",
            description: "Compounding helps your money grow even when you're not actively working.",
          },
        ],
      },
      {
        heading: "How to Start Compounding Today",
        numberedList: [
          "Start early, even if it's small.",
          "Invest consistently.",
          "Reinvest your returns.",
          "Stay patient and avoid unnecessary withdrawals.",
        ],
      },
    ],
    closing:
      "Compounding doesn't happen overnight. But give it time—and the freedom it can create for your future is truly life-changing.",
  },
};

export const latestPosts: WritingPost[] = [
  {
    slug: "companies-are-not-living",
    title: "Sound analysis is key to the long term",
    category: "Investing",
    categoryHref: "/writing/economics",
    excerpt: "A look at patience, compounding and avoiding short-term noise.",
    date: "24 May 2025",
    readingTime: "6 min read",
    image: "/images/essay-markets.png",
    imageAlt: "Financial chart with stacked coins",
    href: "/writing/economics/companies-are-not-living",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
    content: {
      lead: "Sound analysis and a patient outlook remain the cornerstone of successful long-term investing.",
      sections: [
        {
          heading: "Patience and Compounding",
          paragraphs: [
            "Market volatility often tempts investors into unnecessary activity. Yet history shows that patience, sound fundamental analysis, and the discipline to let compounding work deliver the most durable outcomes.",
          ],
        },
      ],
    },
  },
  {
    slug: "us-trade-policy-and-the-debate-on-sustainable-growth",
    title: "The economy: risks, resilience and reality",
    category: "Economics",
    categoryHref: "/writing/economics",
    excerpt: "Observations on growth, inflation and where we go from here.",
    date: "20 May 2025",
    readingTime: "5 min read",
    image: "/images/essay-economy.png",
    imageAlt: "City skyline at sunset",
    href: "/writing/economics/us-trade-policy-and-the-debate-on-sustainable-growth",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
    content: {
      lead: "Navigating global economic risks requires balancing resilience with realistic expectations for sustainable growth.",
      sections: [
        {
          heading: "Trade Policy and Growth",
          paragraphs: [
            "Observations on how trade tariffs, inflation trends, and structural shifts influence international markets and domestic prosperity.",
          ],
        },
      ],
    },
  },
  {
    slug: "behavioural-finance-the-risks-of-mixing-emotion-and-investments",
    title: "Behavioural biases that influence decisions",
    category: "Behavioural finance",
    categoryHref: "/writing/economics",
    excerpt: "Understanding the psychology behind smarter choices.",
    date: "16 May 2025",
    readingTime: "7 min read",
    image: "/images/essay-behaviour.png",
    imageAlt: "Chess pieces arranged on a board",
    href: "/writing/economics/behavioural-finance-the-risks-of-mixing-emotion-and-investments",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
    content: {
      lead: "Understanding the psychological traps of fear and greed is essential to making smarter financial decisions.",
      sections: [
        {
          heading: "Recognising Cognitive Biases",
          paragraphs: [
            "From confirmation bias to loss aversion, our instincts can lead us astray when navigating complex investment landscapes.",
          ],
        },
      ],
    },
  },
  {
    slug: "scotlands-private-sector-health",
    title: "Scotland’s economy and health",
    category: "Scotland",
    categoryHref: "/writing/economics",
    excerpt: "current issues in health, society and education.",
    date: "12 May 2025",
    readingTime: "4 min read",
    image: "/images/essay-scotland.png",
    imageAlt: "Notebook and coffee on a desk",
    href: "/writing/economics/scotlands-private-sector-health",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
    content: {
      lead: "Examining the intersection of Scotland's economic productivity, private sector vitality, and public health challenges.",
      sections: [
        {
          heading: "Current Issues in Health, Society and Education",
          paragraphs: [
            "A healthy population is the foundation of a thriving economy. Addressing the structural hurdles in public health and education is paramount for Scotland's future.",
          ],
        },
      ],
    },
  },
  {
    slug: "simple-habits-that-improved-my-financial-life",
    title: "7 Simple Habits That Improved My Financial Life",
    category: "Personal finance",
    categoryHref: "/writing/economics",
    excerpt: "Small daily habits that helped me save more, spend better and build real wealth.",
    date: "May 8, 2024",
    readingTime: "5 min read",
    image: "/images/essay-markets.png",
    imageAlt: "Financial data displayed on a laptop",
    href: "/writing/economics/simple-habits-that-improved-my-financial-life",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
  },
  {
    slug: "build-wealth-with-the-right-money-mindset",
    title: "How to Build Wealth with the Right Money Mindset",
    category: "Saving & budgeting",
    categoryHref: "/writing/business",
    excerpt: "Change the way you think about money and everything else will follow.",
    date: "Apr 20, 2024",
    readingTime: "4 min read",
    image: "/images/business.png",
    imageAlt: "A hand placing a brick on a growing wall",
    href: "/writing/business/build-wealth-with-the-right-money-mindset",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
  },
  {
    slug: "why-an-emergency-fund-is-your-first-investment",
    title: "Why an Emergency Fund is Your First Investment",
    category: "Personal finance",
    categoryHref: "/writing/economics",
    excerpt: "The safety net that protects your financial future and gives you true peace of mind.",
    date: "Apr 10, 2024",
    readingTime: "5 min read",
    image: "/images/health.png",
    imageAlt: "Money stored in an emergency fund jar",
    href: "/writing/economics/why-an-emergency-fund-is-your-first-investment",
    author: {
      name: "Aria Lewis",
      avatar: "/images/portrait.png",
    },
  },
  {
    slug: "index-funds-vs-active-funds",
    title: "Index Funds vs. Active Funds: Which One is Better?",
    category: "Investing",
    categoryHref: "/writing/economics",
    excerpt: "A clear comparison to help you choose the right investment approach for your goals.",
    date: "Apr 15, 2024",
    readingTime: "6 min read",
    image: "/images/essay-economy.png",
    imageAlt: "Investment chart and stacked coins",
    href: "/writing/economics/index-funds-vs-active-funds",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
  },
  {
    slug: "50-30-20-budget-rule",
    title: "50/30/20 Budget Rule: A Simple Money Plan That Works",
    category: "Financial planning",
    categoryHref: "/writing/business",
    excerpt: "A practical budgeting framework to manage your income, reduce stress and reach your goals.",
    date: "Apr 28, 2024",
    readingTime: "6 min read",
    image: "/images/lecture-finance.webp",
    imageAlt: "A person reviewing a financial plan",
    href: "/writing/business/50-30-20-budget-rule",
    author: {
      name: "Aria Lewis",
      avatar: "/images/portrait.png",
    },
  },
  {
    slug: "overcoming-money-fears",
    title: "Overcoming Money Fears That Hold You Back",
    category: "Financial mindset",
    categoryHref: "/writing/public-policy",
    excerpt: "Identify the hidden beliefs keeping you stuck and learn how to move forward.",
    date: "Apr 5, 2024",
    readingTime: "6 min read",
    image: "/images/essay-scotland.png",
    imageAlt: "British currency notes",
    href: "/writing/public-policy/overcoming-money-fears",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
  },
];

export type CategoryItem = {
  name: string;
  count: number;
  href: string;
  active?: boolean;
};

export const categories: CategoryItem[] = [
  { name: "Market Economics", count: 12, href: "/writing/economics" },
  { name: "Business", count: 11, href: "/writing/business" },
  { name: "Public Policy", count: 9, href: "/writing/public-policy" },
  { name: "Education", count: 7, href: "/writing/education" },
  { name: "Other Interests", count: 5, href: "/writing/other-interests" },
];

export const popularPosts: WritingPost[] = [
  {
    slug: "how-i-paid-off-debt",
    title: "How I Paid Off $20,000 in Debt in 10 Months",
    category: "Personal Finance",
    categoryHref: "/writing/economics",
    excerpt: "A realistic and aggressive debt payoff strategy that eliminated five figures of debt.",
    date: "Apr 20, 2024",
    readingTime: "5 min read",
    image: "/images/essay-markets.png",
    imageAlt: "Budget planning and debt repayment calculator",
    href: "/writing/economics/how-i-paid-off-debt",
    author: {
      name: "Aria Lewis",
      avatar: "/images/portrait.png",
    },
  },
  {
    slug: "dollar-cost-averaging",
    title: "Dollar-Cost Averaging: A Beginner's Secret Weapon",
    category: "Investing",
    categoryHref: "/writing/economics",
    excerpt: "Take emotional swings out of your investment strategy with scheduled investing.",
    date: "Apr 5, 2024",
    readingTime: "4 min read",
    image: "/images/essay-economy.png",
    imageAlt: "Investment charts showing dollar-cost averaging trend",
    href: "/writing/economics/dollar-cost-averaging",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
  },
  {
    slug: "financial-freedom",
    title: "Financial Freedom: What It Really Means and How to Achieve It",
    category: "Financial Mindset",
    categoryHref: "/writing/public-policy",
    excerpt: "True financial freedom isn't about luxury; it's about ownership over your time.",
    date: "Mar 28, 2024",
    readingTime: "6 min read",
    image: "/images/business.png",
    imageAlt: "Looking out towards a sunny horizon symbolizing freedom",
    href: "/writing/public-policy/financial-freedom",
    author: {
      name: "Colin McLean",
      avatar: "/images/portrait.png",
    },
  },
];

export const allWritingPosts: WritingPost[] = [
  featuredPost,
  ...popularPosts,
  ...latestPosts,
];

export function getPostBySlug(slug: string): WritingPost | undefined {
  return allWritingPosts.find((p) => p.slug === slug || p.href.endsWith(`/${slug}`));
}
