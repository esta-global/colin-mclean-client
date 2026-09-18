export type CategoryMeta = {
  id: string;
  name: string;
  slug: string;
  dbSlug: string;
  aliases: string[];
  heading: string;
  subheading: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
};

export const categoriesData: CategoryMeta[] = [
  {
    id: "market-economics",
    name: "Market Economics",
    slug: "economics",
    dbSlug: "economics",
    aliases: ["economics", "economy", "market-economics", "investment-markets"],
    heading: "Industry Trends Reshaping the Market",
    subheading:
      "Key shifts in markets, consumer demand, competition and the economic forces influencing industries.",
    image: "/images/investment.png",
    imageAlt: "Upward financial investment charts and growing capital",
    eyebrow: "Finance & Economics",
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    dbSlug: "business",
    aliases: ["business", "business-technology"],
    heading: "Business Strategies for a Changing Economy",
    subheading:
      "Insights into growth, leadership, innovation, entrepreneurship and the decisions shaping modern businesses.",
    image: "/images/business.png",
    imageAlt: "Business colleagues collaborating in a modern office",
    eyebrow: "Enterprise & Innovation",
  },
  {
    id: "public-policy",
    name: "Public Policy",
    slug: "public-policy",
    dbSlug: "public-policy",
    aliases: ["public-policy", "behaviour-public-health"],
    heading: "Policies Shaping Business and Society",
    subheading:
      "Exploring how government policies, regulations and economic decisions affect businesses and communities.",
    image: "/images/health.png",
    imageAlt: "Public health and policy decision-making illustration",
    eyebrow: "Governance & Society",
  },
  {
    id: "education",
    name: "Education",
    slug: "education",
    dbSlug: "education",
    aliases: ["education", "education-society"],
    heading: "The Future of Education and Skills",
    subheading:
      "Examining changing education models, workforce skills, technology and the evolving needs of learners.",
    image: "/images/education.png",
    imageAlt: "A graduation cap on a globe in warm sunlight",
    eyebrow: "Learning & Workforce",
  },
  {
    id: "other-interests",
    name: "Other Interests",
    slug: "other-interests",
    dbSlug: "other-interests",
    aliases: ["other-interests"],
    heading: "Ideas Beyond Business and Economics",
    subheading:
      "Perspectives on technology, society, culture and other developments influencing the world around us",
    image: "/images/listing-banner.png",
    imageAlt: "Books, notebook and ideas beyond business and economics",
    eyebrow: "Culture & Perspectives",
  },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  const normalized = slug.toLowerCase().trim();
  return categoriesData.find(
    (cat) =>
      cat.slug === normalized ||
      cat.dbSlug === normalized ||
      cat.aliases.includes(normalized)
  );
}

export function getAllCategorySlugs(): string[] {
  const slugs = new Set<string>();
  categoriesData.forEach((c) => {
    slugs.add(c.slug);
    c.aliases.forEach((a) => slugs.add(a));
  });
  return Array.from(slugs);
}
