import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import { SectionTitle } from "./section-title";
import type { HomepageData } from "@/lib/homepage-service";
import type { WritingPost } from "@/content/writing";

type EssaysSectionProps = {
  data?: HomepageData["essaysPreviewSection"];
  essays?: WritingPost[];
};

export function EssaysSection({ data, essays }: EssaysSectionProps) {
  const section = data || {
    eyebrow: "Recent blogs",
    title: "Essays",
    description:
      "Recent articles, insights and commentary on markets, business, behaviour and public policy.",
  };

  const items = essays && essays.length > 0 ? essays.slice(0, 4) : [];

  return (
    <section className="home-section essays-section" aria-labelledby="essays-title">
      <div className="container">
        <SectionTitle
          eyebrow={section.eyebrow || "Recent blogs"}
          title={section.title || "Blogs"}
          description={
            section.description ||
            "Recent articles, insights and commentary on markets, business, behaviour and public policy."
          }
          id="essays-title"
        />
        {items.length > 0 ? (
          <div className="essay-grid">
          {items.map((item) => {
            const paragraph = (item as any).paragraph || (item as any).excerpt || "";
            return (
              <article key={item.href} className="essay-card">
                <Link
                  href={item.href}
                  className="essay-card-image"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 25vw"
                  />
                </Link>
                <div className="essay-card-body">
                  <div>
                    <p className="card-category">{item.category}</p>
                    <h3 className="line-clamp-2">
                      <Link href={item.href}>{item.title}</Link>
                    </h3>
                    <p className="para line-clamp-4">{paragraph}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="essay-meta">
                      {item.date} · {item.readingTime}
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
        ) : (
          <div style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--color-muted, #71717a)" }}>
            <p>No blogs published yet.</p>
          </div>
        )}
        <div className="section-action">
          <Link href="/writing" className="button">
            View all blogs <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
