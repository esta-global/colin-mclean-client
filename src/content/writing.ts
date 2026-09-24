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


export const universityOfGlasgowPost: WritingPost = {
  slug: "university-of-glasgow-talk-january-2022",
  title: "UNIVERSITY OF GLASGOW TALK JANUARY 2022",
  category: "Business",
  categoryHref: "/writing/business",
  excerpt:
    "Behavioural finance is at an exciting juncture. Practical applications are emerging as biases and emotional distinctions are re-evaluated.",
  date: "Jan 15, 2022",
  readingTime: "12 min read",
  image: "/images/lecture-finance.png",
  imageAlt: "UNIVERSITY OF GLASGOW TALK JANUARY 2022",
  href: "/writing/business/university-of-glasgow-talk-january-2022",
  author: {
    name: "Colin McLean",
    avatar: "/images/portrait.png",
  },
  htmlContent: `<p>Behavioural finance is at an exciting juncture. There is no single unified theory, no integration with conventional economics, but real, practical application is now emerging. This is happening as the early behavioural focus on biases is questioned, as is the over-simplified distinction between emotion and thinking. However, classical economic theory - resting on its pillar of equilibrium to make the maths work - still survives and is taught as the core from which presumably irrational behaviour departs.</p><table><tr><td><h3>Key themes</h3><ul><li>Heuristics: experience, context, patterns</li><li>Investment: a noisy environment</li><li>Narratives: making sense of our world</li><li>Issues in psychology</li><li>Incentives and accounting</li><li>The future for judgement</li></ul></td><td><p>Behavioural finance is growing in relevance as some of the softer factors in investment get attention; ESG, incentives, corporate behaviour and the best way to integrate investment professionals and artificial intelligence. There are positives and negatives in our biases, but psychology helps us understand human strengths.</p><p>For many, the starting point in behavioural finance is set out here by its best known exponent, Daniel Kahneman. It draws distinctions between the unconscious and knowing, heuristics and hard thinking, automatic and thoughtful. I will pick-up later on his reference to stories.</p></td></tr></table><h3>Thinking Fast and Slow</h3><p><strong>Our minds are the union of two systems.</strong></p><ul><li>The intuitive and fast <strong>System 1</strong> operates below the level of consciousness and tends toward simple tactics guided by heuristics which short circuit our intense cognitive machinery. The unaided intuition of System 1 drives us to disbelief in System 2 as a separate entity.</li><li>The hard work of contemplation and computation of higher math depends on <strong>System 2</strong>. System 2 is lazy because invoking its power strains our brains with mental heavy lifting.</li></ul><blockquote>“Your subjective experience consists largely of the story that your System 2 tells itself about what is going on.”</blockquote><p><em>Source: Kahneman, “Thinking, Fast and Slow”</em></p><p>But this sharp distinction does not fully cover all the aspects of psychology that are relevant to investment – we can learn much more. Quite apart from cognitive dissonance, there are also differences in beliefs – not just emotion but hard-wired differences in people’s view of how the world works, the logic of it. Rationality is hard to define – in a number of areas, the science is not settled. Sensible, thoughtful people expect entirely different outcomes to well-informed considered decisions. And, with most firms making decisions in groups, social behaviour matters too.</p><p>An issue I will focus on particularly here, is the role of incentives – we expect them to shape behaviour and outcomes, yet fail to understand just how precisely they can be gamed by humans. There are often unintended consequences. I prefer to view behavioural finance through the lens of the five issues I list here. Incentives explain a lot – in finance, these usually involve money.</p><table><tr><td><h3>Behavioural issues</h3><ul><li>Emotional biases / affect</li><li>Cognitive biases and errors</li><li>Incentives and biases</li><li>Individual vs social</li><li>Beliefs</li></ul></td><td><p>The starting point is that biases are usually helpful. We draw on experience and context to make sense of the new. However, we may not realise how much of previous learning we bring automatically and unconsciously to evaluate new decisions, and in general navigate the world about us.</p></td></tr></table><p>The pareidolia slide is an example of where we try to create a pattern or narrative out of randomness. We bring a lot of previous experience and modelling to this, and these patterns are quite difficult to unsee. Similarly, for me standing upside down in the Museum of Illusions in Vilnius in Lithuania. Some of these actual problems are difficult to unsee even when we are aware of the error.</p><p>The Bristol Café Wall illusion has been stylised in this picture making it very difficult to accept that the blue lines are in fact horizontal. It will take some new frame, such as a ruler or grid to help us to see this as it is.</p><p>For our sense of scale and perspective, we rely a lot on visual cues and assumptions about vertical, horizontal and relations between objects. But there is a cue in what I have suggested about putting a ruler to the wall illusion. Sometimes the assistance of a frame or taking a different perspective can much reduce a bias. This concept of framing, the context in which we look at information or a decision – is one of the useful learnings from behavioural finance.</p><p>A key starting point for behavioural finance was loss aversion and this differs by age, context and wealth. It has proved to have useful application in wealth management and recognising that the right financial planning for one person might not suit another with different emotion on loss and risk.</p><table><tr><td><h3>What we bring to what we see</h3><p><strong>Bristol cafe wall illusion</strong></p><p><em>Source: Blake et al. (2019)</em></p></td><td><h3>Misleading cues</h3><p><strong>Loss aversion</strong></p><p><em>Source: Joachim Klement, Liberum, 26.1.2021</em></p></td></tr></table><p>Added to this challenge - interpreting what is new without drawing on unhelpful previous experience - is the difficulty of investment itself. Even the best managers find it difficult to pick a single stock and a specific timeframe. It is a noisy environment in which we are ill-equipped to understand what is statistically valid.</p><table><tr><td><h3>Volume &amp;amp; Noise</h3><p><strong>Bitcoin 7 Day Average Volume</strong></p><p>The slide shows a chart relating Bitcoin activity/volume and search interest over time.</p><p><em>Source: Google Trends</em></p></td><td><p>For the purpose of good decision-making, increasing thought is also being given to the noisy environment that investment inhabits. Professor Robert Shiller of Yale University, another Nobel Laureate in behavioural finance, has noted how much price movements can be fuelled by the volume of activity and press comment.</p><p>Cryptocurrency, Bitcoin, for example has been volatile but its strong gains have often come alongside a widening of interest and increase in trading activity. Sometimes this noisy background is unhelpful for decisions, and can simply encourage herding behaviour, copying other investors.</p><p>For good decision-making it is important not only to view in a frame that reduces risk of bias, but also to minimise bias in the information inputs themselves. That is, good decision-making is helped by a favourable signal-to-noise ratio, as bad information can easily swamp good decisions.</p></td></tr></table><h3>ECB forecasts</h3><p>A noisy environment is compounded by headlines and comment that may be based on little fact or insight. And, we can see just how difficult it is for experts to make forecasts when we see the ECB inflation forecasts here in blue, that are all wrong with no apparent learning, so rooted are they to assumed correlation with money supply.</p><p><em>Chart period shown: 2013 - Dec. 2019.</em></p><p><em>Source: Berenberg, 31 January 2020</em></p><p>And company management is difficult, too. We pay attention to the social validation of reputation, but it may not be relevant. And a lot of the numbers that we must work with as analysts are not what they seem - even things that look precise, like earnings per share or organic growth. These may not be comparable between companies, or even in the same company from year-to-year.</p><p>Research points to the impact this has on pay, despite the lack of correlation with actual share price performance. That is, non-GAAP or non-IFRS measures that adjust statutory earnings (also called Alternative Performance Measures) appear not to fool analysts and markets. But they do mislead company boards who reward executives based on those adjustments.</p><p><em>Guest et al., “High Non-GAAP Earnings Predict Abnormally High CEO Pay”, Massachusetts Institute of Technology Sloan School of Management, May 2018.</em></p><table><tr><td><h3>Adjusted earnings boosts pay not shares</h3><p><strong>#funnynumbers</strong></p><p><strong>High Non-GAAP Earnings Predict Abnormally High CEO Pay*</strong></p><p>Nicholas Guest, S.P. Kothari, and Robert Pozen</p><p>Sloan School of Management</p><p>May 2018</p><p><strong>Abstract</strong></p></td></tr></table><p><em>Source: Robert Pozen et al., High Non-GAAP Earnings Predict Abnormally High CEO Pay, MIT Sloan School of Management, May 2018.</em></p><table><tr><td><h3>Narratives &amp;amp; growth</h3><p><strong>Strong NAV growth since IPO</strong></p><p>The slide presents a growth chart illustrating how the visual presentation of growth can frame subsequent analysis.</p><p><em>Source: Chrysalis Investments, SVM analysis</em></p></td><td><p>And, while we might unpick the adjusted numbers, it is difficult to unsee the attractive images and trends that appear in annual reports. Even if we only take away the impression that this is a good business or is a growth company, the graphs frame our subsequent analysis. This is, of course, intended by company management and boards.</p><p>These images often come early in presentations or at the start of annual reports, and appear more salient. Images, and the patterns we make of them, appear more vivid. We can more easily construct a narrative from them, although companies usually provide that anyway.</p></td></tr></table><p>We quite often see in company or fund manager presentations, a striking graph suggesting growth. It is interesting that this graph actually comes with a narrative that dismisses the dull earlier performance as an investment phase and ignores a more recent downturn, whilst all the time making the reader forget that constant growth rates show straight lines on logarithmic paper not in the way presented here. It takes a trained eye and discipline to cut through an impression given of strong and consistent performance, so powerful are images.</p><table><tr><td><h3>Anchoring: analyst forecasts</h3><p>Peter Clarkson analysed c. 1.3 million target price forecasts for US stocks made and also sentiment and psychological markets like the 52-week high of the share price.</p><p><em>Source: Clarkson, 2020</em></p></td><td><p>Biases and errors affect all parts of the investment process; company reporting, investment analysis, portfolio construction and trading, and how clients and their advisers perceive and use the results.</p><p>This recent study shows the effect of anchoring. The concept of anchoring as a type of priming with prior information, means that the previous high point of a stock has an influence on subsequent analyst forecasts and optimism.</p></td></tr></table><p>Becoming a good investment analyst and manager does involve understanding the theories and techniques that are, say, in the Chartered Financial Analyst course. But applying all this in the real world and becoming a consistent high performer in the profession, is I believe greatly helped by an understanding of behavioural finance. Much of the data on which good analysis depends is inconsistent, or not truly comparable and presented along with often misleading narrative, the stories that executives and investors tell.</p><h3>Anchoring &amp;amp; bias</h3><ul><li>Using earnings forecasts alone creates target price forecasts that are predictive of future share price performance.</li><li>Non-fundamental influences like 52-week highs distort the target price forecast.</li><li>The higher the 52-week high of a stock relative to its own history, or the more optimistic investor sentiment is, the more the target price will be subject to optimism bias.</li><li>Higher past share prices anchor analysts to higher target prices and thus to less accurate forecasts.</li><li>Target price forecasts are useful when share prices are low and investor sentiment is subdued, but as markets climb, analyst target prices become less useful as a predictor of future share price developments.</li></ul><p><em>Source: Joachim Klement, Liberum, 17.3.2024</em></p><p>Compounding this problem is the fact that it takes many years (22) for investment performance to be meaningful, and predictive. And even then, what it indicates is the likely longer term results, not the sort of yearly variability we actually see from good managers.</p><p>Some of the expense in the investment system, and cost to investors, results from the chopping and changing after periods of underperformance by managers. Managers who were thought good enough to invest with in the first place.</p><p>Amidst this noise and confusion, the search for meaning often focuses on narratives. Inevitably, managers with periods of underperformance must construct stories and there is good research on manager behaviour with underperformance. For some, it will mean cutting risk until a record is rebuilt. In other cases, some high profile managers wish to demonstrate that their confidence is undiminished and that they will actually make bigger bets after a tough period. Whilst intended to support a narrative of confidence and consistency, this signalling is in itself a style shift.</p><p><em>Richmond &amp;amp; Byrne, “How to deal with underperforming managers”, CFA Institute Monograph, 2013.</em></p><p>This concept of narratives, attempting to link events in a coherent or apparently plausible way, carries through into a lot of fund manager reporting. Often this sounds convincing, even though it may seem outrageous when dissected.</p><p>Consider how a manager here is unable to see his own conflict in making a significant investment in a major distributor promoting his fund, whilst readily able to interpret what the market might be basing a small bounce from share price lows on. Here, as with the other stories, the manager aims to underline confidence in the story, despite all that has happened, by adding to the investment.</p><p>I think there is often an intellectual arrogance in contrarianism for its own sake – something that Professor Richard Taffler of Warwick Business School highlights in his emotional finance work. A heroic struggle against adversity and unworthy opponents.</p><p><em>Tuckett &amp;amp; Taffler, “Fund Management: an emotional finance perspective”, CFA Institute Research Foundation Publications, August 2012, Vol. 2012, No. 2.</em></p><table><tr><td><h3>Train “can understand” questions</h3><blockquote><p>“Of course we do consider on an ongoing basis the possibility that the investment decision to invest in Hargreaves Lansdown, that Mike [Lindsell] and I first took as long ago as 2007 could lead to such a conflict,” said Train.</p><p>“We do not believe there is a conflict, because we cannot conceive how our investment in Hargreaves Lansdown shares could influence that company’s investment experts to recommend purchasing or selling our funds to its customers,” he added.</p><p>“We were not surprised by the fall and agree that Hargreaves Lansdown’s reputation has taken a blow,” said Train.</p><p>The manager pointed to the recovery of Hargreaves’ shares from the lows reached in the immediate aftermath of Woodford Equity Income’s suspension, arguing this pointed to “investors coming to the conclusion that Hargreaves Lansdown’s reputation can recover over time”.</p><p>“We agree and accordingly have added to our holding over the last few weeks.”</p></blockquote><p><em>Source: Citywire, July 2019</em></p></td></tr></table><p>Investment managers are particularly prone to creating self serving narrative that often misunderstands conflicts and distorts information. And the “better” managers may in fact be worse in this area, given that they can be articulate in excusing failings and can also often be overconfident.</p><p>The overconfidence has led to fund failures, but more generally it can undermine learning, create oversized portfolio positions and encourage excessive trading. Professor Terrance Odean of UCLA has researched this, and identified that overconfidence and excessive trading tends to be more prevalent amongst male portfolio managers.</p><table><tr><td><h3>Over-betting risk</h3><p><strong>Stems from misunderstanding of:</strong></p><ul><li>Edge, probability of event</li><li>Base rate, consensus expectations</li><li>Independence between positions</li><li>Impact of the bet on the odds</li><li>Total assets and liquidity</li></ul></td><td><h3>Manager behaviour and narratives</h3><p><strong>Portfolio Adviser</strong></p><p><strong>Woodford doubles down on contrarian calls</strong></p><p>Although last year brought “tough times” for Neil Woodford, the star fund manager said he will not back down from his contrarian positions but will attempt to provide greater clarity on his views to appease shareholders.</p><blockquote>“Many of you will be aware that my views on market valuations and the broader macroeconomic conditions have gone against the consensus for a while now - and they remain so,” he wrote.</blockquote><p><em>Source: Portfolio Adviser, Jan 18.</em></p><p><em>Citywire Jan 18: “Neil Woodford will vindicate me” / related coverage.</em></p></td></tr></table><p>Sometimes it is possible to quantify confidence, or the extent to which it might be misplaced. Woodford helpfully from launch provided a lot of detail on individual holdings and performance. I captured this in mid-2017, well before there were public concerns about these funds – at which point the information was all taken down.</p><p>We can see here that the large investments intended to display confidence, being 6, 7 or 8% of the fund. This represented a huge risk budget but not adding disproportionately to performance. That is, the liquidity risk of these concentrated holdings was disproportionate - effectively there was a good case for splitting these into smaller liquid, diverse holdings.</p><p>Also of interest, is the fact that all but two of the holdings over 1.5% were in positive territory, which made me question how active price discovery was in these stocks.</p><h3>Portfolio weightings: manager confidence</h3><p><strong>CF Woodford Equity Income Fund: 3 Year Perf.</strong></p><p><strong>Contribution % / Size of Holding % — June 30 2017</strong></p><p>The chart compares portfolio contribution with size of holding, highlighting concentrated holdings and their contribution to performance.</p><p><em>Source: Fund report 2017, SVM analysis.</em></p><p>Overconfidence poses particular problems when managers are faced with extended periods of underperformance. I should add that underperformance for extended periods is more widespread than you might think, given how the statistics work. There is a lot of variability year-by-year even for managers with a true edge. Some of this arises from changing economic conditions. Good research has been done in this showing why managers often fail to learn from mistakes and take the wrong actions to remedy. This goes along with a defensiveness on criticism instead of learning.</p><table><tr><td><h3>Manager behaviour with underperformance</h3><ul><li>Shifts in risk appetite (either direction)</li><li>Lower engagement with colleagues and clients</li><li>Confirmation bias</li><li>Increases in loss aversion</li><li>Shorter time horizons / more trading</li><li>Style shift</li></ul><p><em>Source: Richmond and Byrne, 2019.</em></p></td><td><h3>Dealing with criticism</h3><ul><li><strong>Denial:</strong> It didn’t happen, question the facts, not me, little impact</li><li><strong>Perspective:</strong> Reframe a view of issue, explanation</li><li><strong>Context:</strong> Under pressure, it was a bad time for me</li><li><strong>Motives:</strong> I meant well, did it for the right reasons</li><li><strong>Exception:</strong> Don’t judge me on this, it’s not who I am</li></ul></td></tr></table><p>There are learnings from behavioural finance that you could apply to improve performance, decision-making and forecasting. These have wider application beyond investment, being useful in many other fields.</p><table><tr><td><h3>Priors &amp;amp; base rates</h3><p>Bayesians are always thinking about the context of evidence, not just the evidence itself.</p><p>The essential insight of Thomas Bayes is that the likelihood of an event occurring is always conditional on prior likelihoods.</p><p>Bayesians seek to fuse the new with the already known, and to weight each appropriately.</p><p>This helps you decide what to pay attention to. If I believe something is very probably true, I won't be that interested in new evidence that says it is, since I've already priced that in. I'll also demand a lot of counter-evidence to be persuaded it’s not.</p><p>The Bayesian is always asking, just how much do I need to update my belief about reality, given this new information? A little, a lot, not at all?</p><p>Bayesians typically put numbers on their guesses about reality - on their priors, updates, and predictions.</p><p><em>Source: Ian Leslie, 13.3.2021.</em></p></td><td><p>The first is to think about information you receive in a Bayesian sense. By that I mean thinking about what the likely expected result would be given the base rate of activity. Is information surprising and material in terms of validity? It helps sort out signal from noise and find a rigorous way to incorporate the new information into better decisions.</p><p>Also, even experienced investors routinely make mistakes and it is interesting that recent research here from Hong Kong academics has pointed to the fact that more experienced managers typically have a greater realisation of the value of errors, trying actively to remember and learn from their mistakes.</p></td></tr></table><h3>Learning from mistakes</h3><p>You can improve more by remembering and examining past mistakes than past successes. For inexperienced investors, the first lesson to learn should thus be to focus on your mistakes. Once you have learned that lesson, your learning curve becomes immediately much steeper.</p><p><strong>211 individual investors in Hong Kong who were at least 25 years old and had various degrees of investment experience were asked if they could remember their best and their worst investment.</strong></p><p>Researchers were more interested in how well investors recalled their worst investments.</p><p><em>Source: Joachim Klement, Liberum, 15.12.2020.</em></p><p>For those interested in improving forecasts, there is good work being done by Professor Philip Tetlock of University of Pennsylvania and his research partner Barbara Mellers in the Good Judgement Project. This shows the behaviours that separate out the better and more consistent forecasters from others. Much is to do with rigour of process and learning from errors.</p>p>There are often patterns in how managers change their engagement with colleagues and clients, or parse different periods to help clients frame what is happening.</p><table><tr><td><h3>Parsing the record</h3><p>Whilst intended to support a narrative of confidence and consistency, this signalling can be in itself a style shift. There are often patterns in how managers change their engagement with colleagues and clients, or parse different periods to help clients frame what is happening.</p><blockquote><p>“The decade plus long record clearly shows I am an exceptional manager. The last three years do not negate that, and were atypical. That’s not me. The latest three months demonstrates the beginning of a turnaround and is evidence of my true ability, as you previously recognised.”</p></blockquote><p>Written down, this seems a bizarre mix of selective periods, but sadly is common. It is a heroic narrative, and many investment managers struggling with performance problems do indeed describe their battle against adversity in this way.</p><p>Imagined foes are short sellers, consensus, and myopic investors. The embattled manager is visionary and contrarian. Managers know the emotional appeal of epic tales.</p></td><td><h3>Buying the narrative</h3><p>Chris Ralph, St James’s Place chief investment officer, said:</p><blockquote><p>“We remain confident in Neil's ability.”</p><p>“Neil has a proven long-term investment philosophy and process that he is sticking to. It has delivered exceptional returns over the past 30 years,” he said, adding, “his view is contrarian — believing the UK economy will continue to perform robustly post-Brexit — and, moreover, the companies in his portfolio represent …”</p></blockquote><p><em>Source: Financial Times, 22.3.2019.</em></p></td></tr></table><p>Kahneman notes that stories tend to be judged by our perception of coherence rather than the quality of evidence. The world – and investment, in particular – is less coherent and more ambiguous than we believe.</p><blockquote><p>“The world makes less sense than you think”.</p><p>“We are too easily convinced by simple vivid stories, rather than admitting our discomfort with complex abstract and often random reality”.</p></blockquote><p>The investment profession needs people who can be comfortable with that ambiguity, but it may not be the way we train analysts. The intake for the profession tends to be quite deterministic and numerate in mindset.</p><table><tr><td><h3>Stories: Kahneman on coherence &amp;amp; ambiguity</h3><blockquote><p>“The confidence people have in their beliefs is not a measure of the quality of evidence but of the coherence of the story that the mind has managed to construct.”</p></blockquote><p>Coherence means that you're going to adopt one interpretation in general. Ambiguity tends to be suppressed.</p><p>Other things that don’t fit fall away by the wayside.</p><p>We see the world as much more coherent than it is.</p><p>Our chronic discomfort with ambiguity ... leads us to lock down safe, comfortable, familiar interpretations, even if they are only partial representations of or fully disconnected from reality.</p><p><em>Source: https://www.brainpickings.org/2013/10/30/darkahnemanintuition/</em></p></td><td><h3>Manager warning signs</h3><ul><li>Deeper drawdowns</li><li>Attack distributor / “shoot messenger”</li><li>Refer in third person</li><li>Ever more complex strategies, more abstract reports</li><li>Arcane quotes, refer to halcyon period</li><li>Reports arrive later in month, use terms like “give back” when nothing left to give back</li><li>Focus on shorter periods, parse returns in idiosyncratic way — spin a frame or perspective</li></ul></td></tr></table><table><tr><td><h3>Summary</h3><ul><li>Stressed managers often behave inconsistently</li><li>Position sizing and confident narrative attempts to reassure</li><li>Rebuilding performance needs consistent risk appetite, understanding of edge and odds</li><li>Clients and selectors should examine narratives offered, question performance parsing</li></ul></td><td><p>Academic research in psychology is going through an upheaval. Already the result is an improvement in methodology that should benefit other disciplines, too. Too many early psychology studies have not been replicated, or were underpowered.</p><p>Experiments in incentives were often questionable – what a student might be influenced to do for $5 does not obviously translate into a trading environment or the sort of sums involved in investment and executive bonuses.</p></td></tr></table><p>Viewed from the outside, research in psychology seemed simply to be a growing pile of increasingly specific biases. Many of these appear to contradict – which matters more; priming or recency? It seems too much has been expected of biases – many are likely to have small effects and be very context or culture dependent. It is little wonder that this has not built a coherent substantial economic theory.</p><table><tr><td><h3>Psychology research</h3><ul><li>Failed replication (e.g. priming, stereotype threat)</li><li>Erosion of trust</li><li>Sensitive to context</li><li>Underpowered studies</li><li>Publication biases</li><li>Morality of nudging, choice architecture</li></ul></td><td><h3>Obsession with biases</h3><ul><li>Biases: Broad tendencies not fixed traits</li><li>Biases: Just labels; explain but do not define behaviour</li><li>Behaviour: Complex — wrong to oversimplify as incoherent list of flaws</li><li>Blame: Typically a negative conversation on biases</li></ul></td></tr></table><p>Behavioural research often points to what appears to be irrationality in people’s choices or alternative opportunities - often expressed simply in terms of expected value. Certainly, on a repeated basis, 50% chance of £2 million exceeds a 90% chance of £1 million, but a decisionmaker would need to know more about the number of repetitions.</p><p>Learnings from proportional betting strategies, such as Kelly, point us to different conclusions about rationality. This would be an example of flawed behavioural research.</p><p><em>Kelly criterion: referenced in the original presentation.</em></p><table><tr><td><h3>Biases are small; apparently conflicting responses not actually irrational</h3><ul><li>Priming / anchoring vs recency</li><li>Optimism vs risk aversion</li><li>Shiny novelty vs status quo</li></ul><p>If biases were big they would interfere more with each other, cancel.</p></td><td><h3>Expected value and expected growth</h3><p><strong>a)</strong> 90% chance of £1m</p><p><strong>VS:</strong></p><p><strong>b)</strong> 50% chance of £2m</p><p>Long run wealth maximisation is about stake management.</p><p>Losing means not just loss of stake, but the future expectation of earnings from it.</p></td></tr></table><p>But for the biases that do seem persistent, some solutions have emerged. On hiring, for example, or manager selection, it is now considered good practice to have a process that involves different stages of systematic screening and data collection with separate people handling interviews.</p><p>Equity analysis typically also works best in a systematic process, although it can be challenging to gather comparative company data and to be disciplined in rejecting the spurious idiosyncratic numbers that management often push out.</p><p>In recent years, much effort and legislation has been directed to company incentives and metrics. I will not deal here with the absolute level of executive reward, but bonuses and other incentives, and consequent behaviour.</p><p>Unfortunately, most companies are still obsessed with growth, despite the low growth in the economy in general and the difficulty of measurement. And it is too easy to focus on adjusted numbers, which can become an exercise for CEOs to mark their own homework. Now, much of the focus on audit is on cost rather than quality. And auditors are responsible only to shareholders (as a body) despite the broader obligations of company boards.</p><p>Financial incentives can over time have a very big impact on shareholder value, often negative. We should remember that value creation is usually driven by more than the few executives at the top, and question how deeply and well-aligned incentives are within a business.</p><p>And, it is also worth remembering that many public and not-for-profit organisations are driven very successfully by mission-driven individuals motivated largely non-financially.</p><p>Incentives are usually taken very seriously by management and do direct behaviour. Perhaps this is to be expected when bonus can be twice salary or more - even small components of the bonus mix get attention.</p><table><tr><td><h3>Intellectual seduction of contrarianism</h3><ul><li>Value investing</li><li>Fundamental</li><li>Long term</li><li>Sceptic</li><li>Valuation discrepancy</li><li>Conviction</li><li>Core</li></ul></td><td><h3>Remuneration &amp;amp; incentives: trends</h3><ul><li>Most prioritise growth incentives over ROE</li><li>Few companies have ROCE or ROE in LTIP</li><li>Most have (adjusted) earnings growth</li><li>Risk measures rare</li></ul></td></tr></table><h3>Incentives &amp;amp; culture</h3><p>Note in this recent research for Professor Shiva Rajgopal of Columbia Business School that incentives often win over culture.</p><ul><li><strong>91%</strong> of 1,348 North American executives believe culture is “important” or “very important” at their firm.</li><li><strong>79%</strong> say culture is at least a Top 5 value creator.</li><li><strong>92%</strong> believe improving culture will increase firm value.</li><li><strong>52%</strong> indicate their firm's culture very closely tracks with their stated cultural values.</li></ul><p>Corporate culture may be most important during times of distress.</p><p>The best way to understand culture is by conducting 5–10 interviews of former employees. Shiva argues that 5–10 interviews would produce more valuable output than a survey with 1000+ respondents.</p><h3>Quotes from interviewing 20% of US market capitalization</h3><ol><li>“There is no one in the boardroom pointing their fists. The people on the board are for the most part, handpicked by the CEO and share his long term vision”</li><li>“Incentive compensation is strong motivator and driver of the behavior and ultimately if that is not aligned with culture it will change the culture”</li></ol><p><em>Source: Prof Shivaram Rajgopal, co-author Corporate Culture Evidence from the Field, cited Jefferies, 21.7.2021.</em></p><p>While there is evidence noted in research from Robert Pozen et al, that US earnings adjustments are increasing, it appears less dramatic in the UK. The extent to which bonuses can be driven by adjusted numbers seems to be the main factor, rather than earnings smoothing.</p><p>With a tailwind from easy money, perhaps there has been little need to be concerned about funding or cash needs. Indeed, there are some general patterns on presentation of numbers for growth businesses. Analysts looking for traditional methods of earnings manipulation may miss subtle flattering of gross margins or unit economics that investors favour, and which drive high share ratings.</p><table><tr><td><h3>Smoothing</h3><p><strong>Median exceptionals as a % of adjusted net income – last 10 years</strong></p><p>Chart compares FTSE 100 and UK SMID over 2009–2018.</p><p><em>Source: Liberum, Bloomberg</em></p></td><td><p>While adjustments are often presented as an add back of non-cash items such as depreciation and goodwill amortisation, I would contend that collapsing statutory earnings may often be a better guide to cash and the need for capital.</p><p>Behavioural finance points to a number of issues here. In terms of groupthink, it is clear that a collection of talented individuals on a board and management, often deliver a poorer result collectively than they might as individuals. And individuals are ill-equipped to score their own work. Financial incentives do not help this.</p><p>Incentives can work for a while. The point is that shareholders own the whole result including the reset parts - the only group that has to join-up these different reward packages and different CEOs.</p></td></tr></table><p>The trend for claw-back provisions now goes only in a very small way to bringing accountability back into a bonus package. Generally the metrics for bonuses do not address quality of earnings or service, risk, or the capital consumed by the strategy.</p><p>As Yale’s Robert Schiller commented, an obsession with growth frames our thinking and seems to derive from central bank policy. Monetary authorities have targets above zero but inflation has been so low we have forgotten to adjust for it. With bigger numbers for everything, it is easy to believe that we live in an exceptional age. Bigger GDP, larger daily swings in stockmarket indices etc.</p><p><em>Robert J Shiller, “Silent Inflation”, Project Syndicate, 23.11.2018.</em></p><p>Just as we have trouble in bringing these back to real and per capita measures – such as the lack in the West of real per capita wage growth – it stops us getting to the root of growth.</p><p>Analysts might decide that rolling out new units in a retail consumer business is not organic growth. (This is the source of a lot of our misunderstanding of consumer businesses, as unit economics tend to flatten out after 18 months and subsequently there is little inherently organic in growth of those units.)</p><p>But is raising prices of say, iPhones but selling far fewer, really sustainable organic growth? Or maintaining pricing in consumer items but trimming off a piece of the chocolate bar. We might think much the same of shrinkflation as it now hits the long established consumer staples businesses.</p><p>I think we would agree that it is not quite as good as finding more customers or actually getting those customers to buy more goods and services. I sense that stockmarkets are beginning to work out what true growth is, but there is an urgent need for boards, remuneration committees and CEOs to get the message.</p><p><strong>In summary, the market is beginning to think more about sustainable margin and true growth rates.</strong></p><table><tr><td><p>While there are signs of improvement in the way that remuneration committees are looking at this, there are still widespread weaknesses in incentive packages. Investors should put in more thought to giving feedback and voting on this.</p><p>It makes a strong case for ESG. My own observation is that many of the weakest incentive packages are aligned with weakness in governance structure and both should be areas of focus for ESG investors.</p><p>AIM companies, for example, do not need to publish an audit committee report. And investors should spend more time looking at directors’ comments or thinking about the judgement involved in the numbers.</p><p>Increasingly, as more goodwill piles up on balance sheets and we move to a knowledge-based economy, management projections will underpin inventory valuation, goodwill valuation/impairment and other assets that lie on the balance sheet.</p><p>Any change in trading or even outlook can quickly trigger a cascade of write-downs and covenant breaches - taking a red pen through a balance sheet.</p></td><td><h3>Private equity grows: listings decline</h3><p><strong>The number of US PE backed companies increased 106% over the 11 years to 2017 while the number of publicly traded companies fell 16% from 5100 to 4300.</strong></p><p><em>Source: The McKinsey 2019 PE report.</em></p></td></tr></table><p>The problems with growth don’t end in the listed sector. Regulation and presumed efficiency on public markets has moved many longer term investors onto alternatives, and private equity in particular.</p><p>This is a world of its own valuation metrics and often a firm belief in network effects and the winner takes all strategy of a platform business. I do find valuation of private growth businesses to be strange at times. Often the investors in a private company will re-value their investment to the level of the latest and most optimistic buyer, without it being clear what the rights attaching are.</p><p>For those entering the profession, I think it is interesting to see how investment firms are evolving. Already, many investment management firms are finding that younger analysts are bringing with them new sources of information and search tools. This has the potential to help create alpha and bring an edge back into active management.</p><p>I will finish with some salutary research. Work by Bessembinder has pointed to how narrowly performance is based.</p><table><tr><td><h3>Stock returns: lifetime analysis</h3><ul><li><strong>1.3% of global stocks = all gains</strong></li><li>62,000 global stocks (1990–2018)</li><li><strong>4% of US stocks = all gains</strong></li><li>US stocks (1926–2016)</li></ul><p><em>Source: Bessembinder, Arizona State University, May 2018; July 2019; results in excess of bills.</em></p></td><td><p>The first, 2018, paper noted that in terms of excess returns over risk-free US Treasuries, just 4% of US stocks accounted for all the gains over a 90 year period.</p><p>The later 2019 unpublished work covered global stocks over 38 years and 1.3% of stocks accounted for all the relative gains.</p><p>The first paper showed that the median relative return for US stocks is -100%.</p></td></tr></table><p>Many investors fail to recognise these base rates; remarkably few stocks really perform but those winners could create great wealth, whilst over time it appears the majority of companies fail to perform at all or even to survive.</p><p>Without studying stockmarket history, it can be instructive to pull out a Financial Times or WSJ from 30 and 50 years’ ago and check how many of the companies in the index are still around today.</p><blockquote><p>“The results in this paper imply that the returns to active stock selection can be very large, if the investor is either fortunate or skilled enough to select a concentrated portfolio containing stocks that go on to earn extreme positive returns. Of course, the key question of whether an investor can reliably identify in advance such ‘home run’ stocks, or can identify a manager with the skill to do so, remains”.</p></blockquote><h2>Disclaimer</h2><p><strong>This document is for information purposes only</strong> and should not be considered as an offer, investment recommendation, or solicitation to deal in any of the funds or companies mentioned and does not constitute investment research, investment recommendation or investment advice.</p><p>To the extent that it is passed on, care must be taken to ensure that it is in a form which accurately presents the information presented here. Past performance is not necessarily a guide to future performance.</p><p>Stockmarkets and currency movements may cause the value of an investment and the income from it to fall as well as rise and investors may not get back the amount originally invested.</p><p>The information and author’s opinions presented in this document have been obtained from sources believed by SVM to be reliable, however, SVM makes no representation as to their accuracy or completeness and accept no liability for loss arising from the use of the material.</p><p>Issued by SVM Asset Management Limited which is authorised and regulated by the Financial Conduct Authority.</p><p>SVM Asset Management Ltd, 7 Castle Street, Edinburgh EH2 3AH Tel: 0131 226 6699</p>`,
};

export const scotlandPublicHealthPost: WritingPost = {
  slug: "scotland-should-build-on-the-private-sector-role-in-public-health",
  title: "Scotland Should Build on the Private Sector Role in Public Health",
  category: "Public Policy",
  categoryHref: "/writing/public-policy",
  excerpt:
    "Scotland should build on the private sector role in public health with sustainable and accountable partnerships.",
  date: "Sep 22, 2026",
  readingTime: "5 min read",
  image: "/images/hero.webp",
  imageAlt: "Scotland Should Build on the Private Sector Role in Public Health",
  href: "/writing/public-policy/scotland-should-build-on-the-private-sector-role-in-public-health",
  author: {
    name: "Colin McLean",
    avatar: "/images/portrait.png",
  },
  htmlContent: `<p>&lt;p&gt;Scotland continues to face major health challenges - can our private sector help? It seems a lot to ask when business growth and profitability are squeezed. But the private sector represents the majority of Scotland's economy and workforce and it could have a bigger role in driving the change to wellbeing that Scotland needs. To that sector can be added charities and social enterprises, the third sector. Some of Scotland's business leaders are already stepping up their focus on employee wellbeing. Can these early movers inspire others to follow?&lt;/p&gt;</p><p>&lt;p&gt;Private sector employment in Scotland accounts for approximately two million workers, while the third sector employs around 140,000 people. Together, these parts of the economy represent roughly three quarters of the nation's total employment, offering huge potential to support wellbeing. The linkage of health and work is clearly recognised in Scotland's ten-year Population Health Framework. As much as 80% of what affects population health happens outside the health and care system. Good work is a key building block of physical and mental health; providing secure incomes, purpose and fulfilment.&lt;/p&gt;</p><p>&lt;p&gt;The scale of the challenge is sobering. Scotland's life expectancy, which had been improving steadily for decades, has largely stalled since 2010. Long-term sickness has become the primary reason people are economically inactive in Scotland, with poor mental health and musculoskeletal conditions leading the way. Recently, the Scottish Fiscal Commission warned explicitly about the burden of disease that lies ahead; projecting that, without intervention, healthcare costs will rise as a proportion of GDP while the productive workforce shrinks.&lt;/p&gt;</p><p>&lt;p&gt;A recent survey of Scottish employers revealed both progress and persistent challenges. Most employers expressed concern about employee health, with mental health cited by 87% as the most challenging condition to address in the workplace. Employers identified employee difficulty accessing health support, resulting in pressures on colleagues and constraints around time, cost and resources. Many reported NHS delays affecting their ability to support staff effectively, while others noted gaps in manager awareness and training - particularly around mental health.&lt;/p&gt;</p><p>&lt;p&gt;The good news in the survey is that many of Scotland's largest employers are already going well beyond statutory requirements, with a real focus on wellbeing across their workforce. Most are adopting inclusive workforce policies around parental and carer leave and sick leave. Typically, they provide healthy and safe physical environments and offer flexible working arrangements. Many show genuine engagement with employees to identify opportunities to support employee health, recognising that work is unlikely to be effective when people have other life stresses.&lt;/p&gt;</p><p>&lt;p&gt;The leadership shown in these organisations should be harnessed to improve practice in Scotland's many medium-sized businesses. There may even be some smaller businesses that could step up. This would complement what is being done by the NHS and local authorities.&lt;/p&gt;</p><p>&lt;p&gt;Companies and social enterprises that have moved early to embed health and wellbeing into their operations can demonstrate what works. They are able to share learning about practical implementation; what succeeds and what does not. Their experiences could help smaller and medium-sized businesses recognise that investing in employee health is not a luxury for those with deep pockets, but something that makes sense for all organisations. What Scotland needs is a mechanism or forum to harness this thought leadership and make good practice more widely known.&lt;/p&gt;</p><p>&lt;p&gt;The evidence base linking good workplace practice to productivity and business success is robust and growing. Organisations that invest in employee wellbeing see measurable returns. Reduced absenteeism alone can save substantial costs. Companies with effective health and wellbeing programmes report absenteeism rates up to forty percent lower than industry averages. In contrast, studies have demonstrated that lower control within jobs correlates with higher mortality and more sickness absence.&lt;/p&gt;</p><p>&lt;p&gt;Beyond absence reduction, the productivity gains are significant. Research from health economics shows that presenteeism, where employees attend work while unwell and operate at reduced capacity, costs businesses far more than absenteeism. Employees working with untreated mental health conditions, chronic pain, or other health issues may be physically present but operating at fifty to seventy percent of their normal productivity. Organisations that provide early intervention and appropriate workplace adjustments see substantial improvements in actual productive output, not just attendance figures.&lt;/p&gt;</p><p>&lt;p&gt;Retention benefits compound these advantages. The cost of recruiting and training replacement staff typically ranges from fifty to two hundred percent of an annual salary depending on seniority and sector. Companies recognised as good employers with genuine commitments to workforce health find recruitment easier and retention rates higher, reducing these substantial costs while maintaining institutional knowledge and experience. In sectors facing skills shortages, this competitive advantage becomes even more pronounced.&lt;/p&gt;</p><p>&lt;p&gt;Is the answer a new corporate standard? Scotland already has various recognition schemes and standards. Companies can demonstrate commitment to paying living wages, achieving B Corporation status, or meeting net zero targets. These schemes have helped drive cultural change by making certain practices aspirational and recognisable. Any new initiative would need to be carefully defined to avoid overlap with existing schemes, possibly just focused on rolling out best practice in health and wellbeing.&lt;/p&gt;</p><p>&lt;p&gt;But a specific standard would give organisations that represent a large part of Scotland's economy something concrete to work towards, providing a framework for measuring progress. Helpfully it might create peer pressure in the positive sense, where being recognised as a healthy workplace becomes a badge that attracts talent and customers alike. Such a standard would need to be accessible to organisations of different sizes, and focused on outcomes rather than paperwork. It should recognise that each sector faces different challenges - a healthy workplace in hospitality looks different from one in professional services or the third sector. The standard could build on existing disability confidence schemes and fair work frameworks while adding specific focus on health outcomes and wellbeing practices. It would highlight nationally the contribution that enlightened organisations can make to population health.&lt;/p&gt;</p><p>&lt;p&gt;Many of Scotland's largest organisations are already taking meaningful action to improve employee health and wellbeing. Health and care is a complex system; businesses and the third sector have a role to play. Leadership could bring cohesion and accelerate the impact of best practice in wellbeing at work.&lt;/p&gt;</p>`,
};

export const allWritingPosts: WritingPost[] = [
  featuredPost,
  universityOfGlasgowPost,
  scotlandPublicHealthPost,
  ...popularPosts,
  ...latestPosts,
];

export function getPostBySlug(slug: string): WritingPost | undefined {
  return allWritingPosts.find((p) => p.slug === slug || p.href.endsWith(`/${slug}`));
}
