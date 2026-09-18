import { notFound, redirect } from "next/navigation";
import { fetchBlogPostBySlug, fetchAllBlogs } from "@/lib/category-service";

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await fetchAllBlogs({ limit: 100 });
  return blogs
    .filter((post) => post.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  redirect(post.href);
}
