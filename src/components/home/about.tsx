import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import type { HomepageData } from "@/lib/homepage-service";

type AboutSectionProps = {
  data?: HomepageData["aboutPreviewSection"];
};

export function AboutSection({ data }: AboutSectionProps) {
  const about = data || {
    heading: "About",
    role: "Investor. Writer. Guest Lecturer.",
    paragraphs: [
      "I’m a professional investor, writing on finance, business and public policy. My recent articles examine current socio-economic and population-health challenges through an economic lens, advocating fresh perspectives on the problems.",
      "Lecturing focuses on behavioural finance and current market topics, alongside other interests spanning public health, society and life in Scotland.",
    ],
    credential:
      "Recently retired from Board of Public Health Scotland. Writes for The Herald.",
    image: "/images/portrait.png",
    buttonText: "More about Colin",
    buttonLink: "/about",
  };

  return (
    <section className="home-section about-section" aria-labelledby="about-title">
      <div className="container about-layout">
        <div className="about-image-wrap">
          <div className="about-image-frame" />
          <Image
            src={about.image || "/images/portrait.png"}
            alt="Colin McLean"
            width={1127}
            height={1396}
            sizes="(max-width: 760px) 100vw, 32vw"
          />
        </div>
        <div className="about-copy">
          <h2 id="about-title">{about.heading || "About"}</h2>
          <p className="about-role">{about.role || "Investor. Writer. Guest Lecturer."}</p>
          {about.paragraphs?.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {about.credential && (
            <div className="about-credential">
              <p>{about.credential}</p>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src="/images/linkedin.svg"
                  alt="Colin McLean"
                  width={20}
                  height={20}
                />
                <span>Colin McLean</span>
              </div>
            </div>
          )}
          <Link href={about.buttonLink || "/about"} className="button">
            {about.buttonText || "More about Colin"} <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
