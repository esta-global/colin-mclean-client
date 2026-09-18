import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { CategoryPage } from "@/components/category/category-page";
import { getAllCategorySlugs } from "@/content/category-data";
import {
  fetchCategoryBlogs,
  fetchCategoryDetails,
  fetchAllBlogs,
  fetchBlogPostBySlug,
} from "@/lib/category-service";
import { fetchDynamicCategories } from "@/lib/nav-service";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await fetchCategoryDetails(slug);

  if (!category) {
    return pageMetadata({
      title: "Category Not Found",
      description: "The requested category could not be found.",
      path: `/writing/${slug}`,
    });
  }

  return pageMetadata({
    title: `${category.name} | Colin McLean`,
    description: category.subheading,
    path: `/writing/${category.slug}`,
    image: category.image,
    imageAlt: category.imageAlt,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  // 1. Check if slug matches a category
  const [category, posts, dynamicCategories, allBlogs] = await Promise.all([
    fetchCategoryDetails(slug),
    fetchCategoryBlogs(slug),
    fetchDynamicCategories(),
    fetchAllBlogs({ limit: 6 }),
  ]);

  if (category) {
    const popularPosts = allBlogs
      .filter((b) => !posts.some((p) => p.slug === b.slug))
      .slice(0, 4);

    return (
      <CategoryPage
        category={category}
        posts={posts}
        categories={dynamicCategories}
        popularPosts={popularPosts}
      />
    );
  }

  // 2. If someone accessed an old single-segment blog post link
  const post = await fetchBlogPostBySlug(slug);
  if (post && post.href) {
    redirect(post.href);
  }

  notFound();
}
