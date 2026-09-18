import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { fetchHomepageData } from "@/lib/homepage-service";
import { fetchDynamicCategories } from "@/lib/nav-service";
import { fetchAllBlogs } from "@/lib/category-service";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchHomepageData();
  return pageMetadata({
    title: data.seo?.metaTitle || "Colin McLean | Investor, writer and lecturer",
    description:
      data.seo?.metaDescription ||
      "Independent perspectives on investment, economics, business, behaviour and public policy.",
    path: "/",
    absoluteTitle: true,
  });
}

export default async function Page() {
  const [data, categories, essays] = await Promise.all([
    fetchHomepageData(),
    fetchDynamicCategories(),
    fetchAllBlogs({ limit: 4 }),
  ]);

  return <HomePage data={data} categories={categories} essays={essays} />;
}
