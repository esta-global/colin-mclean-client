import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import type { HomepageData } from "@/lib/homepage-service";

type HomeHeroProps = {
  data?: HomepageData["heroSection"];
};

export function HomeHero({ data }: HomeHeroProps) {
  const hero = data || {
    eyebrow: "Investor · Writer · Lecturer",
    title: "Thoughts on finance, business and public policy.",
    summary:
      "Colin McLean's insights and perspectives on economics, business, behaviour and public policy.",
    image: "/images/hero.webp",
    primaryButtonText: "Read latest thinking",
    primaryButtonLink: "/writing",
    secondaryButtonText: "About Colin",
    secondaryButtonLink: "/about",
  };

  const heroImage =
    hero.image && hero.image !== "undefined" && hero.image !== "null"
      ? hero.image
      : "/images/hero.webp";

  const isLocalImage =
    heroImage.startsWith("http://localhost") ||
    heroImage.startsWith("http://127.0.0.1");

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Image
        className="home-hero-image"
        src={heroImage}
        alt="Colin McLean"
        fill
        priority
        sizes="90vw"
        unoptimized={isLocalImage}
      />
      <div className="home-hero-shade" />
      <div className="home-hero-content container">
        <p className="eyebrow eyebrow-light">
          <span />
          {hero.eyebrow}
        </p>
        <h1 id="home-hero-title">{hero.title}</h1>
        <p className="home-hero-summary">{hero.summary}</p>
        <div className="hero-actions">
          <Link href={hero.primaryButtonLink || "/writing"} className="button">
            {hero.primaryButtonText || "Read latest thinking"} <Arrow />
          </Link>
          <Link href={hero.secondaryButtonLink || "/about"} className="button button-ghost">
            {hero.secondaryButtonText || "About Colin"}
          </Link>
        </div>
      </div>
    </section>
  );
}
