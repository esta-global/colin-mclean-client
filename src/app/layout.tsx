import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], display: "swap", weight: ["400", "500", "600"] });
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: site.name, template: `%s | ${site.name}` }, description: site.description, applicationName: site.name, authors: [{ name: site.name, url: `${site.url}/about` }], alternates: { types: { "application/rss+xml": [{ url: "/rss.xml", title: "Colin McLean — Writing" }] } }, icons: { icon: "/icon.svg", apple: "/icon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-GB" className={`${sans.variable} ${serif.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></body></html>; }
