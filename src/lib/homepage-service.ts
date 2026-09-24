import {
  perspectives as fallbackPerspectives,
  lectures as fallbackLectures,
  type Perspective,
  type LecturePreview,
} from "@/content/home";

import { API_BASE_URL, FILE_BASE_URL, buildApiUrl } from "./api-config";

export function resolveImageUrl(image?: string, fallback = "/images/hero.webp"): string {
  if (!image || typeof image !== "string" || !image.trim()) return fallback;
  const trimmed = image.trim();

  // Full URLs, base64 data URIs, or blob URIs
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("blob:")
  ) {
    return trimmed;
  }

  // Local static asset in public folder (e.g. /images/... or /favicon.ico)
  // Note: /uploads/ is NOT a local asset; it belongs to the backend uploads server.
  if (
    (trimmed.startsWith("/") && !trimmed.startsWith("/uploads/")) ||
    trimmed.startsWith("images/")
  ) {
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  }

  const cleanFilename = trimmed.replace(/^\/?uploads\//, "");
  if (!cleanFilename) return fallback;

  return `${FILE_BASE_URL}/${cleanFilename}`;
}


export interface TopicCardItem {
  number?: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface EssayCardItem {
  title: string;
  paragraph?: string;
  category?: string;
  date?: string;
  readingTime?: string;
  image: string;
  href: string;
}

export interface HomepageData {
  heroSection: {
    eyebrow: string;
    title: string;
    summary: string;
    image: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
  perspectivesSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: Perspective[];
  };
  topicsSection: {
    eyebrow: string;
    title: string;
    description: string;
    items?: TopicCardItem[];
  };
  aboutPreviewSection: {
    heading: string;
    role: string;
    paragraphs: string[];
    credential: string;
    image: string;
    buttonText: string;
    buttonLink: string;
  };
  essaysPreviewSection: {
    eyebrow: string;
    title: string;
    description: string;
    items?: EssayCardItem[];
  };
  lecturesSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: LecturePreview[];
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export const fallbackHomepageData: HomepageData = {
  heroSection: {
    eyebrow: "Investor · Writer · Lecturer",
    title: "Thoughts on finance, business and public policy.",
    summary:
      "Colin McLean's insights and perspectives on economics, business, behaviour and public policy.",
    image: "/images/hero.webp",
    primaryButtonText: "Read latest thinking",
    primaryButtonLink: "/writing",
    secondaryButtonText: "About Colin",
    secondaryButtonLink: "/about",
  },
  perspectivesSection: {
    eyebrow: "Point of view",
    title: "Perspectives",
    description:
      "Thought leadership is more than subjects and credentials. It is the perspective brought to the questions that matter.",
    items: fallbackPerspectives,
  },
  topicsSection: {
    eyebrow: "Focus areas",
    title: "Key Topics",
    description:
      "Explore core subjects across markets, business, public policy and society.",
  },
  aboutPreviewSection: {
    heading: "About",
    role: "Investor. Writer. Guest Lecturer.",
    paragraphs: [
      "I’m a professional investor, writing on finance, business and public policy. My recent articles examine current socio-economic and population-health challenges through an economic lens, advocating fresh perspectives on the problems.",
      "Lecturing focuses on behavioural finance and current market topics, alongside other interests spanning public health, society and life in Scotland.",
    ],
    credential:
      "Recently retired from Board of Public Health Scotland. Writes for The Herald.",
    image: "/images/portrait.png",
    buttonText: "More about Colin",
    buttonLink: "/about",
  },
  essaysPreviewSection: {
    eyebrow: "Recent writing",
    title: "Essays",
    description:
      "Recent articles, insights and commentary on markets, business,behaviour and public policy.",
  },
  lecturesSection: {
    eyebrow: "Lectures & speaking",
    title: "Lectures",
    description:
      "Ideas brought into practice through talks and presentations on behavioural finance, investment and current economic topics.",
    items: fallbackLectures,
  },
  seo: {
    metaTitle: "Colin McLean | Investor, writer and lecturer",
    metaDescription:
      "Independent perspectives on investment, economics, business, behaviour and public policy.",
    keywords: ["Colin McLean", "Investing", "Economics", "Public Policy", "Lectures"],
  },
};

export async function fetchHomepageData(): Promise<HomepageData> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(buildApiUrl("/homepage"), {
      next: { revalidate: 60 },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      const body = json?.body;
      if (body) {
        return {
          heroSection: {
            eyebrow: body.heroSection?.eyebrow || fallbackHomepageData.heroSection.eyebrow,
            title: body.heroSection?.title || fallbackHomepageData.heroSection.title,
            summary: body.heroSection?.summary || fallbackHomepageData.heroSection.summary,
            image: resolveImageUrl(body.heroSection?.image, "/images/hero.webp"),
            primaryButtonText:
              body.heroSection?.primaryButtonText ||
              fallbackHomepageData.heroSection.primaryButtonText,
            primaryButtonLink:
              body.heroSection?.primaryButtonLink ||
              fallbackHomepageData.heroSection.primaryButtonLink,
            secondaryButtonText:
              body.heroSection?.secondaryButtonText ||
              fallbackHomepageData.heroSection.secondaryButtonText,
            secondaryButtonLink:
              body.heroSection?.secondaryButtonLink ||
              fallbackHomepageData.heroSection.secondaryButtonLink,
          },
          perspectivesSection: {
            eyebrow:
              body.perspectivesSection?.eyebrow ||
              fallbackHomepageData.perspectivesSection.eyebrow,
            title:
              body.perspectivesSection?.title ||
              fallbackHomepageData.perspectivesSection.title,
            description:
              body.perspectivesSection?.description ||
              fallbackHomepageData.perspectivesSection.description,
            items:
              Array.isArray(body.perspectivesSection?.items) &&
              body.perspectivesSection.items.length > 0
                ? body.perspectivesSection.items
                : fallbackHomepageData.perspectivesSection.items,
          },
          topicsSection: {
            eyebrow:
              body.topicsSection?.eyebrow || fallbackHomepageData.topicsSection.eyebrow,
            title:
              body.topicsSection?.title || fallbackHomepageData.topicsSection.title,
            description:
              body.topicsSection?.description ||
              fallbackHomepageData.topicsSection.description,
            items:
              Array.isArray(body.topicsSection?.items) &&
              body.topicsSection.items.length > 0
                ? body.topicsSection.items.map((it: any) => ({
                    ...it,
                    image: resolveImageUrl(it.image, "/images/investment.png"),
                  }))
                : undefined,
          },
          aboutPreviewSection: {
            heading:
              body.aboutPreviewSection?.heading ||
              fallbackHomepageData.aboutPreviewSection.heading,
            role:
              body.aboutPreviewSection?.role ||
              fallbackHomepageData.aboutPreviewSection.role,
            paragraphs:
              Array.isArray(body.aboutPreviewSection?.paragraphs) &&
              body.aboutPreviewSection.paragraphs.length > 0
                ? body.aboutPreviewSection.paragraphs
                : fallbackHomepageData.aboutPreviewSection.paragraphs,
            credential:
              body.aboutPreviewSection?.credential ||
              fallbackHomepageData.aboutPreviewSection.credential,
            image: resolveImageUrl(
              body.aboutPreviewSection?.image,
              "/images/portrait.png"
            ),
            buttonText:
              body.aboutPreviewSection?.buttonText ||
              fallbackHomepageData.aboutPreviewSection.buttonText,
            buttonLink:
              body.aboutPreviewSection?.buttonLink ||
              fallbackHomepageData.aboutPreviewSection.buttonLink,
          },
          essaysPreviewSection: {
            eyebrow:
              body.essaysPreviewSection?.eyebrow ||
              fallbackHomepageData.essaysPreviewSection.eyebrow,
            title:
              body.essaysPreviewSection?.title ||
              fallbackHomepageData.essaysPreviewSection.title,
            description:
              body.essaysPreviewSection?.description ||
              fallbackHomepageData.essaysPreviewSection.description,
            items:
              Array.isArray(body.essaysPreviewSection?.items) &&
              body.essaysPreviewSection.items.length > 0
                ? body.essaysPreviewSection.items.map((it: any) => ({
                    ...it,
                    image: resolveImageUrl(it.image, "/images/essay-behaviour.png"),
                  }))
                : undefined,
          },
          lecturesSection: {
            eyebrow:
              body.lecturesSection?.eyebrow ||
              fallbackHomepageData.lecturesSection.eyebrow,
            title:
              body.lecturesSection?.title ||
              fallbackHomepageData.lecturesSection.title,
            description:
              body.lecturesSection?.description ||
              fallbackHomepageData.lecturesSection.description,
            items:
              Array.isArray(body.lecturesSection?.items) &&
              body.lecturesSection.items.length > 0
                ? body.lecturesSection.items.map((it: any) => ({
                    ...it,
                    image: resolveImageUrl(it.image, "/images/lecture-finance.png"),
                  }))
                : fallbackHomepageData.lecturesSection.items,
          },
          seo: body.seo,
        };
      }
    }
  } catch {
    // API offline
  }

  return fallbackHomepageData;
}
