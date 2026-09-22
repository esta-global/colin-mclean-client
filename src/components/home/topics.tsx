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
  const section = data || {
    eyebrow: "Areas of expertise",
    title: "Topics",
    description:
      "A broad set of interests connected by a focus on markets, people, economic change and the decisions that shape society.",
  };

  // If dynamic categories from API are available, use them; otherwise fallback to static topics
  // const hasDynamic = categories && categories.length > 0;
  const items = fallbackTopics.filter((t) => t.home).map((t, idx) => ({
        slug: t.slug,
        title: t.title,
        description: t.description,
        image: t.image,
        imageAlt: t.imageAlt,
        number: `0${idx + 1}`,
        href: t.href
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
            <Link key={item.slug} href={item?.href} className="topic-card">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
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
