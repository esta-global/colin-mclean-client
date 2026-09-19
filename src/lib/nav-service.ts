import { categoriesData, CategoryMeta } from "@/content/category-data";
import { buildApiUrl } from "./api-config";

export interface NavItem {
  label: string;
  href: string;
}

export interface DynamicCategoryItem {
  _id: string;
  name: string;
  slug: string;
  heading?: string;
  subheading?: string;
  eyebrow?: string;
  image?: string;
  priority?: number;
  showInNavbar?: boolean;
  showInFooter?: boolean;
  status?: boolean;
}

export async function fetchDynamicCategories(): Promise<DynamicCategoryItem[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(buildApiUrl("/blogCategories?status=true&limit=100"), {
      next: { revalidate: 60 },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const rawList: DynamicCategoryItem[] = Array.isArray(data?.body) ? data.body : [];
      if (rawList.length > 0) {
        return rawList.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
      }
    }
  } catch {
    // Backend offline or timeout during compilation; use fallback
  }

  // Fallback to static category data
  return categoriesData.map((c, index) => ({
    _id: c.id,
    name: c.name,
    slug: c.slug,
    heading: c.heading,
    subheading: c.subheading,
    eyebrow: c.eyebrow,
    image: c.image,
    priority: index + 1,
    showInNavbar: true,
    showInFooter: true,
    status: true,
  }));
}

export async function getDynamicNavigation(): Promise<NavItem[]> {
  const categories = await fetchDynamicCategories();
  const navCategories = categories.filter((c) => c.showInNavbar !== false);

  return [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    ...navCategories.map((c) => ({
      label: c.name,
      href: `/writing/${c.slug}`,
    })),
    { label: "Contact us", href: "/contact" },
  ];
}

export async function getDynamicFooterCategories(): Promise<NavItem[]> {
  const categories = await fetchDynamicCategories();
  const footerCategories = categories.filter((c) => c.showInFooter !== false);

  return footerCategories.map((c) => ({
    label: c.name,
    href: `/writing/${c.slug}`,
  }));
}
