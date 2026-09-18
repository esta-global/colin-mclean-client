import Image from "next/image";
import Link from "next/link";

import type { WritingPost } from "@/content/writing";

type ArticleCardProps = {
  post: WritingPost;
};

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="writing-article-card">
      <Link href={post.href} className="writing-article-image" aria-label={`Read ${post.title}`}>
        <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 25vw" />
      </Link>
      <div className="writing-article-body">
        <p className="writing-category">{post.category}</p>
        <h3><Link href={post.href}>{post.title}</Link></h3>
        <p className="writing-article-excerpt">{post.excerpt}</p>
        <p className="writing-article-meta">{post.date} · {post.readingTime}</p>
      </div>
    </article>
  );
}
