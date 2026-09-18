import { ContactPage } from "@/components/contact/contact-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Colin McLean about investment, economics, business and public policy.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
