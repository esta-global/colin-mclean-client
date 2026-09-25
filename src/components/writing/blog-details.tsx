"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import {
  type WritingPost,
  categories as staticCategories,
  popularPosts as staticPopularPosts,
} from "@/content/writing";
import { cleanBlogHtml, stripHtmlToText } from "@/lib/category-service";

interface BlogDetailsProps {
  post: WritingPost;
  categories?: { name: string; href: string; count?: number; active?: boolean }[];
  popularPosts?: WritingPost[];
}

export function BlogDetails({
  post,
  categories: propCategories,
  popularPosts: propPopularPosts,
}: BlogDetailsProps) {
  const [copied, setCopied] = useState(false);

  const activeCategories =
    propCategories && propCategories.length > 0
      ? propCategories
      : staticCategories;

  const activePopularPosts =
    propPopularPosts && propPopularPosts.length > 0
      ? propPopularPosts
      : staticPopularPosts;

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // ignore
    }
  };

  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareText = encodeURIComponent(post.title);

  const safeHtml = cleanBlogHtml(post.htmlContent);
  const safeSubtitle = stripHtmlToText(post.excerpt);
  const safeTitle = stripHtmlToText(post.title) || post.title;

  return (
    <div className="blog-detail-wrapper">
      <div className="container blog-detail-container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="blog-breadcrumbs">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="separator">›</li>
            <li>
              <Link href="/writing">Blog</Link>
            </li>
            <li className="separator">›</li>
            <li>
              <Link href={post.categoryHref || "/topics/investment-markets"}>
                {post.category}
              </Link>
            </li>
            <li className="separator">›</li>
            <li className="current" aria-current="page">
              {safeTitle}
            </li>
          </ol>
        </nav>

        {/* Main Article Header */}
        <header className="blog-post-header">
          <p className="blog-category-tag">{post.category}</p>
          <h1 className="blog-post-title">{safeTitle}</h1>
          {safeSubtitle && <p className="blog-post-subtitle">{safeSubtitle}</p>}

          <div className="blog-author-meta">
            <div className="blog-author-avatar">
              <Image
                src={post.author?.avatar || "/images/portrait.png"}
                alt={post.author?.name || "Author"}
                width={36}
                height={36}
                className="avatar-img"
              />
            </div>
            <span className="blog-author-name">{post.author?.name || "Colin McLean"}</span>
            <span className="blog-meta-dot">•</span>
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-meta-dot">•</span>
            <span className="blog-reading-time">{post.readingTime}</span>
          </div>
        </header>

        {/* Two-Column Grid */}
        <div className="blog-main-grid">
          {/* Left Column: Article Content */}
          <article className="blog-article-content">
            {/* Featured Image Banner */}
            <div className="blog-featured-image-wrapper">
              <Image
                src={post.image}
                alt={post.imageAlt || safeTitle}
                width={960}
                height={540}
                priority
                className="blog-featured-image"
              />
            </div>

            {/* Post Content */}
            <div className="blog-body-text">
              {safeHtml ? (
                <div
                  className="blog-html-content"
                  dangerouslySetInnerHTML={{ __html: safeHtml }}
                />
              ) : post.content ? (
                <>
                  {post.content.lead && (
                    <p className="blog-lead-paragraph">{post.content.lead}</p>
                  )}

                  {post.content.sections?.map((section, idx) => (
                    <div key={idx} className="blog-section-block">
                      {section.heading && (
                        <h2 className="blog-section-heading">{section.heading}</h2>
                      )}

                      {section.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}

                      {section.bulletList && (
                        <ul className="blog-custom-bullet-list">
                          {section.bulletList.map((item, bIdx) => (
                            <li key={bIdx} className="blog-custom-bullet-item">
                              <span className="bullet-circle-icon" aria-hidden="true">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <polyline points="12 8 16 12 12 16" />
                                  <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>
                              </span>
                              <div className="bullet-text">
                                <strong>{item.title}</strong> {item.description}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.numberedList && (
                        <ol className="blog-numbered-step-list">
                          {section.numberedList.map((item, nIdx) => (
                            <li key={nIdx} className="blog-numbered-step-item">
                              <span className="step-number-badge" aria-hidden="true">
                                {nIdx + 1}
                              </span>
                              <span className="step-text">{item}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}

                  {post.content.closing && (
                    <p className="blog-closing-paragraph">{post.content.closing}</p>
                  )}
                </>
              ) : (
                <div className="blog-section-block">
                  <p className="blog-lead-paragraph">{post.excerpt}</p>
                  <p>
                    Full article content for &ldquo;{post.title}&rdquo; is coming soon. Please explore
                    our other blogs and lectures in the meantime.
                  </p>
                </div>
              )}
            </div>

            {/* Social Share Bar */}
            <div className="blog-share-row">
              <span className="share-label">Share this post:</span>
              <div className="share-buttons">

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="share-btn"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.55-.7 1.55-1.56a1.56 1.56 0 1 0-3.11 0c0 .86.69 1.56 1.56 1.56m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy link"
                  className="share-btn copy-btn"
                  title={copied ? "Link copied!" : "Copy link"}
                >
                  {copied ? (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </article>

          {/* Right Column: Sidebar */}
          <aside className="blog-sidebar" aria-label="Blog sidebar">
            {/* Categories Card */}
            <div className="blog-side-widget">
              <h2 className="blog-widget-title">Categories</h2>
              <ul className="blog-category-list">
                {activeCategories.map((cat) => (
                  <li
                    key={cat.name}
                    className={`blog-category-row ${cat.active ? "is-active" : ""}`}
                  >
                    <Link href={cat.href} className="blog-category-link">
                      {cat.name}
                    </Link>
                    {cat.count !== undefined && (
                      <span className="blog-category-count">{cat.count}</span>
                    )}
                  </li>
                ))}
              </ul>
              <Link href="/writing" className="blog-view-all-link">
                View all categories <Arrow />
              </Link>
            </div>

            {/* Popular Posts Card */}
            <div className="blog-side-widget">
              <h2 className="blog-widget-title">Popular Posts</h2>
              <ul className="blog-popular-list">
                {activePopularPosts.map((popPost) => (
                  <li key={popPost.title} className="blog-popular-item">
                    <Link
                      href={popPost.href}
                      className="blog-popular-thumb"
                      aria-label={`Read ${popPost.title}`}
                    >
                      <Image
                        src={popPost.image}
                        alt={popPost.imageAlt || popPost.title}
                        fill
                        sizes="68px"
                        className="thumb-img"
                      />
                    </Link>
                    <div className="blog-popular-info">
                      <Link href={popPost.href} className="blog-popular-title">
                        {popPost.title}
                      </Link>
                      <span className="blog-popular-date">{popPost.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
