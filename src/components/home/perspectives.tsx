import Link from "next/link";
import { perspectives as fallbackPerspectives } from "@/content/home";
import { SectionTitle } from "./section-title";
import type { HomepageData } from "@/lib/homepage-service";

type PerspectivesSectionProps = {
  data?: HomepageData["perspectivesSection"];
};

export function PerspectivesSection({ data }: PerspectivesSectionProps) {
  const section = data || {
    eyebrow: "Point of view",
    title: "Perspectives",
    description:
      "Thought leadership is more than subjects and credentials. It is the perspective brought to the questions that matter.",
    items: fallbackPerspectives,
  };

  const items = section.items && section.items.length > 0 ? section.items : fallbackPerspectives;

  return (
    <section className="home-section perspectives" aria-labelledby="perspectives-title">
      <div className="container">
        <SectionTitle
          eyebrow={section.eyebrow || "Point of view"}
          title={section.title || "Perspectives"}
          description={
            section.description ||
            "Thought leadership is more than subjects and credentials. It is the perspective brought to the questions that matter."
          }
          id="perspectives-title"
        />
        <div className="perspective-grid">
          {items.map((perspective) => (
            <Link key={perspective.href} href={perspective.href} className="perspective-card">
              <h3>“{perspective.title}”</h3>
              <p>{perspective.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
