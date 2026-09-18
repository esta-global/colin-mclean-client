import { WritingPage } from "@/components/writing/writing-page";
import { fetchAllBlogs } from "@/lib/category-service";
import { fetchDynamicCategories } from "@/lib/nav-service";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;

export const metadata = pageMetadata({
  title: "Writing",
  description:
    "Essays and perspectives on investment, economics, business, behaviour and public policy.",
  path: "/writing",
  image: "/images/essay-behaviour.png",
  imageAlt: "Financial analysis and investment decisions",
});

export default async function Page() {
  const [posts, categories] = await Promise.all([
    fetchAllBlogs(),
    fetchDynamicCategories(),
  ]);

  return <WritingPage posts={posts} categories={categories} />;
}
