import type { WritingPost } from "@/content/writing";
import { getCategoryBySlug, CategoryMeta } from "@/content/category-data";
import { resolveImageUrl } from "./homepage-service";

import { buildApiUrl } from "./api-config";

export interface ApiBlogItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  readingTime?: string;
  date?: string;
  createdAt?: string;
  category?: {
    _id: string;
    name: string;
    slug: string;
  };
  author?: {
    name?: string;
    profileImage?: string;
  };
  type?: string;
  featured?: boolean;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "Recent";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function mapApiBlogToPost(item: ApiBlogItem, fallbackCatSlug = "economics"): WritingPost {
  const catSlug = item.category?.slug || fallbackCatSlug;
  return {
    slug: item.slug,
    title: item.title,
    category: item.category?.name || "Writing",
    categoryHref: `/writing/${catSlug}`,
    excerpt: item.excerpt || "",
    date: item.date || formatDate(item.createdAt),
    readingTime: item.readingTime || "5 min read",
    image: resolveImageUrl(item.coverImage, "/images/blog1.png"),
    imageAlt: item.title,
    href: `/writing/${catSlug}/${item.slug}`,
    author: {
      name: item.author?.name || "Colin McLean",
      avatar: resolveImageUrl(item.author?.profileImage, "/images/portrait.png"),
    },
    htmlContent: item.content || undefined,
  };
}

export async function fetchAllBlogs(options?: {
  limit?: number;
  featured?: boolean;
}): Promise<WritingPost[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const limit = options?.limit ?? 50;
    let path = `/blogs?status=true&limit=${limit}`;
    if (options?.featured) {
      path += `&featured=true`;
    }

    const res = await fetch(buildApiUrl(path), {
      next: { revalidate: 60 },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const rawList: ApiBlogItem[] = Array.isArray(data?.body) ? data.body : [];
      return rawList.map((item) => mapApiBlogToPost(item));
    }
  } catch {
    // API offline
  }

  return [];
}

export async function fetchCategoryBlogs(
  categorySlug: string
): Promise<WritingPost[]> {
  const meta = getCategoryBySlug(categorySlug);
  const targetDbSlug = meta?.dbSlug || categorySlug;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(
      buildApiUrl(`/blogs?categorySlug=${encodeURIComponent(targetDbSlug)}&status=true&limit=50`),
      {
        next: { revalidate: 60 },
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const rawList: ApiBlogItem[] = Array.isArray(data?.body) ? data.body : [];
      return rawList.map((item) => mapApiBlogToPost(item, meta?.slug || categorySlug));
    }
  } catch {
    // API unavailable
  }

  return [];
}

export async function fetchCategoryDetails(
  slug: string
): Promise<CategoryMeta | undefined> {
  const baseMeta = getCategoryBySlug(slug);
  const targetDbSlug = baseMeta?.dbSlug || slug;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(
      buildApiUrl(`/blogCategories/findBySlug/${encodeURIComponent(targetDbSlug)}`),
      {
        next: { revalidate: 60 },
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const apiCat = data?.body;
      if (apiCat && apiCat.name) {
        return {
          id: baseMeta?.id || apiCat.slug || slug,
          name: apiCat.name || baseMeta?.name || slug,
          slug: baseMeta?.slug || apiCat.slug || slug,
          dbSlug: apiCat.slug || targetDbSlug,
          aliases: baseMeta?.aliases || [slug],
          heading: apiCat.heading || baseMeta?.heading || apiCat.name,
          subheading: apiCat.subheading || baseMeta?.subheading || "",
          eyebrow: apiCat.eyebrow || baseMeta?.eyebrow || "Category",
          image: resolveImageUrl(apiCat.image, baseMeta?.image || "/images/investment.png"),
          imageAlt: baseMeta?.imageAlt || apiCat.name,
        };
      }
    }
  } catch {
    // API unavailable; use static baseMeta
  }

  return baseMeta;
}

export async function fetchBlogPostBySlug(
  slug: string
): Promise<WritingPost | undefined> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(
      buildApiUrl(`/blogs/slug/${encodeURIComponent(slug)}`),
      {
        next: { revalidate: 60 },
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const item: ApiBlogItem = data?.body;
      if (item && item.title) {
        return mapApiBlogToPost(item);
      }
    }
  } catch {
    // API unavailable
  }

  return undefined;
}
