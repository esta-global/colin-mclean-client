import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogDetails } from "@/components/writing/blog-details";
import {
  fetchBlogPostBySlug,
  fetchAllBlogs,
} from "@/lib/category-service";
import { fetchDynamicCategories } from "@/lib/nav-service";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string; postSlug: string }>;
};

export async function generateStaticParams() {
  const blogs = await fetchAllBlogs({ limit: 100 });
  return blogs
    .filter((post) => post.slug)
    .map((post) => {
      const parts = post.href.split("/").filter(Boolean);
      const slug = parts.length >= 2 ? parts[1] : "writing";
      return {
        slug,
        postSlug: post.slug,
      };
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, postSlug } = await params;
  const post = await fetchBlogPostBySlug(postSlug);

  if (!post) {
    return pageMetadata({
      title: "Post Not Found",
      description: "The requested article could not be found.",
      path: `/writing/${slug}/${postSlug}`,
    });
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/writing/${slug}/${postSlug}`,
    image: post.image,
    imageAlt: post.imageAlt,
  });
}

export default async function Page({ params }: Props) {
  const { slug, postSlug } = await params;
  const [post, dynamicCategories, allBlogs] = await Promise.all([
    fetchBlogPostBySlug(postSlug),
    fetchDynamicCategories(),
    fetchAllBlogs({ limit: 6 }),
  ]);

  if (!post) {
    notFound();
  }

  const categoryItems = dynamicCategories.map((c) => ({
    name: c.name,
    href: `/writing/${c.slug}`,
    active: c.slug === slug,
  }));

  const popularPosts = allBlogs
    .filter((b) => b.slug !== postSlug)
    .slice(0, 4);

  return (
    <BlogDetails
      post={post}
      categories={categoryItems}
      popularPosts={popularPosts}
    />
  );
}
