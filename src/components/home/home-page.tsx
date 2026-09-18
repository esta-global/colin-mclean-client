import { AboutSection } from "./about";
import { EssaysSection } from "./essays";
import { HomeHero } from "./hero";
import { LecturesSection } from "./lectures";
import { PerspectivesSection } from "./perspectives";
import { TopicsSection } from "./topics";
import type { HomepageData } from "@/lib/homepage-service";
import type { DynamicCategoryItem } from "@/lib/nav-service";
import type { WritingPost } from "@/content/writing";

type HomePageProps = {
  data?: HomepageData;
  categories?: DynamicCategoryItem[];
  essays?: WritingPost[];
};

export function HomePage({ data, categories, essays }: HomePageProps) {
  return (
    <>
      <HomeHero data={data?.heroSection} />
      <PerspectivesSection data={data?.perspectivesSection} />
      <TopicsSection data={data?.topicsSection} categories={categories} />
      <AboutSection data={data?.aboutPreviewSection} />
      <EssaysSection data={data?.essaysPreviewSection} essays={essays} />
      <LecturesSection data={data?.lecturesSection} />
    </>
  );
}
