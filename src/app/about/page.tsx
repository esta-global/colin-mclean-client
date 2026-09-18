import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";
import { fetchAboutPageData } from "@/lib/about-service";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchAboutPageData();

  return pageMetadata({
    title: data.seo?.metaTitle || `${data.title} | ${data.role}`,
    description:
      data.seo?.metaDescription ||
      "Independent perspectives on investment, economics, business, behaviour and public policy.",
    path: "/about",
    image: data.portraitImage,
    imageAlt: data.title,
  });
}

export default async function Page() {
  const data = await fetchAboutPageData();
  return <AboutPage data={data} />;
}
