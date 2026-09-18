import Image from "next/image";
import Link from "next/link";
import { lectures as fallbackLectures } from "@/content/home";
import { Arrow } from "@/components/ui";
import { SectionTitle } from "./section-title";
import type { HomepageData } from "@/lib/homepage-service";

type LecturesSectionProps = {
  data?: HomepageData["lecturesSection"];
};

export function LecturesSection({ data }: LecturesSectionProps) {
  const section = data || {
    eyebrow: "Lectures & speaking",
    title: "Lectures",
    description:
      "Ideas brought into practice through talks and presentations on behavioural finance, investment and current economic topics.",
    items: fallbackLectures,
  };

  const items = section.items && section.items.length > 0 ? section.items : fallbackLectures;

  return (
    <section className="home-section lectures-section" aria-labelledby="lectures-title">
      <div className="container">
        <SectionTitle
          eyebrow={section.eyebrow || "Lectures & speaking"}
          title={section.title || "Lectures"}
          description={
            section.description ||
            "Ideas brought into practice through talks and presentations on behavioural finance, investment and current economic topics."
          }
          id="lectures-title"
        />
        <div className="lecture-grid">
          {items.map((lecture) => (
            <article key={lecture.href} className="lecture-card">
              <div className="lecture-image">
                <Image
                  src={lecture.image}
                  alt={lecture.title}
                  fill
                  sizes="(max-width: 760px) 100vw, 20vw"
                />
              </div>
              <div className="lecture-card-body">
                <p className="lecture-number">
                  <span />
                  {lecture.number}
                </p>
                <h3>{lecture.title}</h3>
                <p>{lecture.description}</p>
                <Link href={lecture.href} className="text-link">
                  Explore lecture <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
