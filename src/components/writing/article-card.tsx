import Image from "next/image";
import Link from "next/link";

import type { WritingPost } from "@/content/writing";
import { stripHtmlToText } from "@/lib/category-service";

type ArticleCardProps = {
  post: WritingPost;
};

export function ArticleCard({ post }: ArticleCardProps) {
  const cleanTitle = stripHtmlToText(post.title) || post.title;
  const cleanExcerpt = stripHtmlToText(post.excerpt);

  return (
    <article className="writing-article-card">
      <Link href={post.href} className="writing-article-image" aria-label={`Read ${cleanTitle}`}>
        <Image src={post.image} alt={cleanTitle} fill sizes="(max-width: 760px) 100vw, 25vw" />
      </Link>
      <div className="writing-article-body">
        <p className="writing-category">{post.category}</p>
        <h3><Link href={post.href}>{cleanTitle}</Link></h3>
        {cleanExcerpt && <p className="writing-article-excerpt">{cleanExcerpt}</p>}
        <p className="writing-article-meta">{post.date} · {post.readingTime}</p>
      </div>
    </article>
  );
}
