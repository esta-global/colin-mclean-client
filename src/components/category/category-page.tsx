"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CategoryMeta } from "@/content/category-data";
import {
  type WritingPost,
  categories as staticCategories,
} from "@/content/writing";
import { stripHtmlToText } from "@/lib/category-service";
import { ArticleCard } from "@/components/writing/article-card";
import { Arrow } from "@/components/ui";
import type { DynamicCategoryItem } from "@/lib/nav-service";

type CategoryPageProps = {
  category: CategoryMeta;
  posts: WritingPost[];
  categories?: DynamicCategoryItem[];
  popularPosts?: WritingPost[];
};

const POSTS_PER_PAGE = 6;

export function CategoryPage({
  category,
  posts,
  categories: dynamicCategories,
  popularPosts: propPopularPosts,
}: CategoryPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Determine featured post and grid posts
  const blogList = posts || [];
  const hasPosts = blogList.length > 0;
  const featured = hasPosts ? blogList[0] : null;
  const allGridPosts = hasPosts && blogList.length > 1 ? blogList.slice(1) : [];

  const totalPages = Math.max(1, Math.ceil(allGridPosts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const displayPosts = allGridPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (typeof window !== "undefined") {
      const el = document.getElementById("latest-posts");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const categoryItems =
    dynamicCategories && dynamicCategories.length > 0
      ? dynamicCategories.map((c) => ({
          name: c.name,
          slug: c.slug,
          href: `/writing/${c.slug}`,
          count: posts ? posts.filter((p) => p.category?.toLowerCase() === c.name.toLowerCase()).length : undefined,
        }))
      : staticCategories.map((c) => ({
          ...c,
          slug: c.href.split("/").pop() || "",
        }));

  const activePopularPosts =
    propPopularPosts && propPopularPosts.length > 0
      ? propPopularPosts
      : [];

  return (
    <>
      {/* Hero Section */}
      <section className="writing-hero" aria-labelledby="writing-hero-title">
        <Image
          src={category.image || "/images/essay-behaviour.png"}
          alt={category.imageAlt || category.name}
          fill
          priority
          sizes="100vw"
        />
        <div className="writing-hero-shade" />
        <div className="writing-hero-content container">
          <p className="eyebrow eyebrow-light">
            <span />
            {category.eyebrow ? `${category.eyebrow.toUpperCase()}` : "— FROM MY JOURNAL"}
          </p>
          <h1 id="writing-hero-title">
            {category.heading || `Thoughts on ${category.name}`}
          </h1>
          <p>
            {category.subheading ||
              `Insights and perspectives from Colin McLean on ${category.name.toLowerCase()}, investing, economics and society.`}
          </p>
          <a href="#latest-posts" className="button">
            Start reading <Arrow />
          </a>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="writing-page">
        <div className="writing-content container">
          <div className="writing-layout">
            <div className="writing-main">
              {hasPosts && featured ? (
                <>
                  {/* Featured Post */}
                  <section aria-labelledby="featured-post-title">
                    <h2 id="featured-post-title" className="writing-section-heading">
                      Featured Post
                    </h2>
                    <article className="writing-featured-card">
                      <Link
                        href={featured.href}
                        className="writing-featured-image"
                        aria-label={`Read ${featured.title}`}
                      >
                        <Image
                          src={featured.image || "/images/blog1.png"}
                          alt={featured.imageAlt || featured.title}
                          fill
                          sizes="(max-width: 760px) 100vw, 45vw"
                        />
                      </Link>
                      <div className="writing-featured-copy">
                        <p className="writing-category">{featured.category || category.name}</p>
                        <h3>
                          <Link href={featured.href}>{stripHtmlToText(featured.title) || featured.title}</Link>
                        </h3>
                        <p>{stripHtmlToText(featured.excerpt)}</p>
                        <span>
                          {featured.date} · {featured.readingTime}
                        </span>
                      </div>
                    </article>
                  </section>

                  {/* Latest Posts */}
                  {allGridPosts.length > 0 && (
                    <section
                      className="latest-posts"
                      aria-labelledby="latest-posts-title"
                      id="latest-posts"
                    >
                      <div className="latest-posts-heading">
                        <h2 id="latest-posts-title" className="writing-section-heading">
                          Latest Posts
                        </h2>
                        <Link href="/writing" className="writing-view-all">
                          View all posts <Arrow />
                        </Link>
                      </div>

                      <div className="writing-article-grid">
                        {displayPosts.map((post) => (
                          <ArticleCard key={post.slug || post.href} post={post} />
                        ))}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <nav className="writing-pagination" aria-label="Writing pages">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                              key={pageNum}
                              type="button"
                              onClick={() => handlePageChange(pageNum)}
                              aria-current={currentPage === pageNum ? "page" : undefined}
                              className={currentPage === pageNum ? "active-page" : ""}
                            >
                              {pageNum}
                            </button>
                          ))}
                          {totalPages > 3 && currentPage < totalPages && (
                            <button
                              type="button"
                              onClick={() => handlePageChange(currentPage + 1)}
                              aria-label="Next page"
                            >
                              ›
                            </button>
                          )}
                        </nav>
                      )}
                    </section>
                  )}
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "5rem 1rem", color: "var(--color-muted, #71717a)" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>No blogs in {category.name} yet</h2>
                  <p>New articles will appear here once published from the admin panel.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="writing-sidebar mt-12" aria-label="Writing filters and popular posts">
              {/* Category Filter Widget */}
              <section className="writing-side-card" aria-labelledby="categories-title">
                <h2 id="categories-title">Categories</h2>
                <ul className="category-list">
                  {categoryItems.map((cat) => {
                    const isCurrent =
                      cat.slug?.toLowerCase() === category.slug.toLowerCase() ||
                      cat.name.toLowerCase() === category.name.toLowerCase();

                    return (
                      <li key={cat.name}>
                        <Link
                          href={cat.href}
                          style={isCurrent ? { color: "#c99b1a", fontWeight: 700 } : undefined}
                        >
                          {cat.name}
                        </Link>
                        {cat.count !== undefined && <span>{cat.count}</span>}
                      </li>
                    );
                  })}
                </ul>
                <Link href="/writing" className="writing-view-all">
                  View all categories <Arrow />
                </Link>
              </section>

              {/* Popular Posts Widget */}
              {activePopularPosts.length > 0 && (
                <section className="writing-side-card" aria-labelledby="popular-posts-title">
                  <h2 id="popular-posts-title">Popular Posts</h2>
                  <ol className="popular-post-list">
                    {activePopularPosts.map((post) => (
                      <li key={post.href || post.slug}>
                        <Link
                          href={post.href}
                          className="popular-post-image"
                          aria-label={`Read ${post.title}`}
                        >
                          <Image src={post.image} alt="" fill sizes="4rem" />
                        </Link>
                        <div>
                          <Link href={post.href}>{post.title}</Link>
                          <span>{post.date}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </aside>
          </div>

          {/* Newsletter Banner */}
          <section className="writing-newsletter" aria-labelledby="newsletter-title">
            <div>
              <h2 id="newsletter-title">Let&apos;s stay in touch</h2>
              <p>
                Join my newsletter for weekly finance tips, investing strategies and smart money
                ideas.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={isSubscribed ? "Thank you for subscribing!" : "Your email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribed}
                required
              />
              <button type="submit" disabled={isSubscribed}>
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
