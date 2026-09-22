import Image from "next/image";
import Link from "next/link";
import { topics as fallbackTopics } from "@/content/topics";
import { SectionTitle } from "./section-title";
import type { HomepageData } from "@/lib/homepage-service";
import type { DynamicCategoryItem } from "@/lib/nav-service";
import { resolveImageUrl } from "@/lib/homepage-service";

type TopicsSectionProps = {
  data?: HomepageData["topicsSection"];
  categories?: DynamicCategoryItem[];
};

export function TopicsSection({ data, categories }: TopicsSectionProps) {
  const section = {
    eyebrow: data?.eyebrow || "Areas of expertise",
    title: data?.title || "Topics",
    description:
      data?.description ||
      "A broad set of interests connected by a focus on markets, people, economic change and the decisions that shape society.",
  };

  // If dynamic categories from API are available, use them; otherwise fallback to static topics
  const hasDynamic = Boolean(categories && categories.length > 0);

  const items = hasDynamic
    ? categories!.slice(0, 4).map((cat, idx) => {
        const fallback = fallbackTopics[idx];
        return {
          slug: cat.slug,
          title: cat.name || cat.heading || fallback?.title || "Topic",
          description:
            cat.subheading ||
            cat.shortDescription ||
            fallback?.description ||
            "",
          image: resolveImageUrl(cat.image, fallback?.image || "/images/investment.png"),
          imageAlt: cat.heading || cat.name || fallback?.imageAlt || "Topic image",
          number: `0${idx + 1}`,
          href: `/writing/${cat.slug}`,
        };
      })
    : fallbackTopics.filter((t) => t.home).map((t, idx) => ({
        slug: t.slug,
        title: t.title,
        description: t.description,
        image: t.image,
        imageAlt: t.imageAlt,
        number: `0${idx + 1}`,
        href: t.href,
      }));

  return (
    <section className="home-section topics-section" aria-labelledby="topics-title">
      <div className="container">
        <SectionTitle
          eyebrow={section.eyebrow || "Areas of expertise"}
          title={section.title || "Topics"}
          description={
            section.description ||
            "A broad set of interests connected by a focus on markets, people, economic change and the decisions that shape society."
          }
          id="topics-title"
        />
        <div className="topic-grid">
          {items.map((item) => (
            <Link key={item.slug} href={item.href} className="topic-card">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
                unoptimized={item.image.startsWith("http")}
              />
              <div className="topic-card-shade" />
              <div className="topic-card-content">
                <p>{item.number}</p>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
