import { resolveImageUrl } from "./homepage-service";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5201/api/v1";

export interface AboutPageData {
  title: string;
  role: string;
  portraitImage: string;
  biography: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export const fallbackAboutData: AboutPageData = {
  title: "Colin McLean",
  role: "Investor. Writer. Guest Lecturer.",
  portraitImage: "/images/portrait.png",
  biography: [
    "I’m a professional investor, writing on finance, business and public policy. My recent articles examine current socio-economic and population-health challenges through an economic lens, advocating fresh perspectives on the problems.",
    "Lecturing is on behavioural finance and current market topics. This site also includes some of my other thoughts and interests. Recent work includes a non-executive role on the board of Public Health Scotland and executive positions in the asset management business I founded and sold.",
    "Previously I was vice chair of CFA Institute, the global body for investment professionals, and a former chair of CFA UK. I have served as an Honorary Professor at two Scottish universities and continue to guest lecture. I am co-author on two health economics papers submitted for publication.",
  ],
  seo: {
    metaTitle: "About Colin McLean | Investor, Writer and Lecturer",
    metaDescription:
      "Independent perspectives on investment, economics, business, behaviour and public policy.",
    keywords: ["Colin McLean", "Investor", "Writer", "Lecturer", "Finance"],
  },
};

export async function fetchAboutPageData(): Promise<AboutPageData> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`${API_BASE_URL}/aboutPage`, {
      next: { revalidate: 60 },
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      const body = json?.body;
      if (body) {
        return {
          title: body.title || fallbackAboutData.title,
          role: body.role || fallbackAboutData.role,
          portraitImage: resolveImageUrl(body.portraitImage, "/images/portrait.png"),
          biography:
            Array.isArray(body.biography) && body.biography.length > 0
              ? body.biography
              : fallbackAboutData.biography,
          seo: body.seo,
        };
      }
    }
  } catch {
    // API offline
  }

  return fallbackAboutData;
}
