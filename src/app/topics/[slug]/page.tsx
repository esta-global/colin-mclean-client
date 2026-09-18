import { redirect } from "next/navigation";
import { getAllCategorySlugs } from "@/content/category-data";

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  redirect(`/writing/${slug}`);
}
