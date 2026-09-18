const origin = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://colin-mclean.com");
if (!["https:", "http:"].includes(origin.protocol) || origin.pathname !== "/" || origin.search || origin.hash || origin.username || origin.password) throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path or credentials.");
if (process.env.NODE_ENV === "production" && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(origin.hostname)) throw new Error("Production metadata requires a public NEXT_PUBLIC_SITE_URL.");
export const site = {
  name: "Colin McLean", url: origin.origin,
  description: "Independent perspectives on investment, economics, business, behaviour and public policy.",
  linkedIn: "https://uk.linkedin.com/in/colin-w-mclean",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  authorBio: "Colin McLean is a professional investor, writer and guest lecturer exploring finance, business and public policy through an economic lens.",
};
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Market Economics", href: "/writing/economics" },
  { label: "Business", href: "/writing/business" },
  { label: "Public Policy", href: "/writing/public-policy" },
  { label: "Education", href: "/writing/education" },
  { label: "Other interests", href: "/writing/other-interests" },
  { label: "Contact us", href: "/contact" },
];
export const absoluteUrl = (path = "/") => new URL(path, `${site.url}/`).toString();
