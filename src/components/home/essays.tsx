import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import { SectionTitle } from "./section-title";
import { essays as defaultEssays } from "@/content/home";
import type { HomepageData } from "@/lib/homepage-service";
import type { WritingPost } from "@/content/writing";
import { stripHtmlToText } from "@/lib/category-service";

import { resolveImageUrl } from "@/lib/homepage-service";

type EssaysSectionProps = {
  data?: HomepageData["essaysPreviewSection"];
  essays?: WritingPost[];
};

export function EssaysSection({ data }: EssaysSectionProps) {
  const section = {
    eyebrow: data?.eyebrow || "Recent writing",
    title: data?.title || "Essays",
    description:
      data?.description ||
      "Recent articles, insights and commentary on markets, business,behaviour and public policy.",
  };

  const items =
    data?.items && data.items.length > 0
      ? data.items.map((item, idx) => ({
          key: `essay-${idx}-${item.href || item.title}`,
          title: item.title,
          paragraph: item.paragraph || "",
          category: item.category || "General",
          date: item.date || "",
          readingTime: item.readingTime || "",
          image: resolveImageUrl(item.image, "/images/essay-behaviour.png"),
          href: item.href || "#",
        }))
      : defaultEssays.map((item) => ({
          key: item.href,
          title: item.title,
          paragraph: item.paragraph || "",
          category: item.category,
          date: item.date,
          readingTime: item.readingTime,
          image: resolveImageUrl(item.image, "/images/essay-behaviour.png"),
          href: item.href,
        }));

  return (
    <section className="home-section essays-section" aria-labelledby="essays-title">
      <div className="container">
        <SectionTitle
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          id="essays-title"
        />
        <div className="essay-grid">
          {items.map((item) => {
            const paragraph = stripHtmlToText(item.paragraph || "");
            const title = stripHtmlToText(item.title) || item.title;
            return (
              <article key={item.key} className="essay-card">
                <Link
                  href={item.href}
                  className="essay-card-image"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    sizes="(max-width: 760px) 100vw, 25vw"
                  />
                </Link>
                <div className="essay-card-body">
                  <div>
                    {item.category && <p className="card-category">{item.category}</p>}
                    <h3 className="line-clamp-2">
                      <Link href={item.href}>{title}</Link>
                    </h3>
                    {paragraph && <p className="para line-clamp-4">{paragraph}</p>}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="essay-meta">
                      {[item.date, item.readingTime].filter(Boolean).join(" · ")}
                    </p>
                    <Link href={item.href} className="text-link">
                      Read <Arrow />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="section-action">
          <Link href="/writing" className="button">
            View all writing <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
