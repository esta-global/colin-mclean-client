import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";
type PageSeo = { title: string; description: string; path: string; image?: string; imageAlt?: string; noindex?: boolean; absoluteTitle?: boolean; article?: { publishedAt: string; updatedAt: string; tags: string[] } };
export function pageMetadata({ title, description, path, image = "/images/hero.webp", imageAlt = "Colin McLean, investor, writer and lecturer", noindex = false, absoluteTitle = false, article }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title, description,
    alternates: { canonical: absoluteUrl(path), languages: { "en-GB": absoluteUrl(path) } },
    robots: { index: !noindex, follow: true, googleBot: { index: !noindex, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { title: fullTitle, description, url: absoluteUrl(path), siteName: site.name, locale: "en_GB", images: [{ url: absoluteUrl(image), alt: imageAlt }], ...(article ? { type: "article", publishedTime: article.publishedAt, modifiedTime: article.updatedAt, authors: [absoluteUrl("/about")], tags: article.tags } : { type: "website" }) },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [{ url: absoluteUrl(image), alt: imageAlt }] },
  };
}
