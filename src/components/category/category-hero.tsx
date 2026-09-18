import Image from "next/image";
import Link from "next/link";
import type { CategoryMeta } from "@/content/category-data";

type CategoryHeroProps = {
  category: CategoryMeta;
  postCount?: number;
};

export function CategoryHero({ category, postCount }: CategoryHeroProps) {
  return (
    <section className="category-hero" aria-labelledby="category-hero-title">
      <div className="category-hero-image-wrap">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          priority
          sizes="100vw"
          className="category-hero-bg-img"
        />
        <div className="category-hero-shade" />
      </div>

      <div className="category-hero-content container">
        <nav className="category-breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <span className="category-crumb-sep">/</span>
          <Link href="/writing">Writing</Link>
          <span className="category-crumb-sep">/</span>
          <span className="category-crumb-current">{category.name}</span>
        </nav>

        <p className="category-eyebrow">
          <span className="category-eyebrow-line" />
          {category.eyebrow}
        </p>

        <h1 id="category-hero-title" className="category-hero-title">
          {category.heading}
        </h1>

        <p className="category-hero-subheading">{category.subheading}</p>

        <div className="category-hero-meta">
          <span className="category-pill-badge">{category.name}</span>
          {typeof postCount === "number" && (
            <span className="category-post-count-badge">
              {postCount} {postCount === 1 ? "Article" : "Articles"} Published
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
