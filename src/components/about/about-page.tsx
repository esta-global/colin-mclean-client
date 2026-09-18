import Image from "next/image";
import type { AboutPageData } from "@/lib/about-service";
import { fallbackAboutData } from "@/lib/about-service";

type AboutPageProps = {
  data?: AboutPageData;
};

export function AboutPage({ data }: AboutPageProps) {
  const about = data || fallbackAboutData;

  return (
    <article className="about-page" aria-labelledby="about-page-title">
      <div className="container about-page-grid">
        <div className="about-page-copy">
          <h1 id="about-page-title">{about.title || "Colin McLean"}</h1>
          <p className="about-page-role">{about.role || "Investor. Writer. Guest Lecturer."}</p>
          <div className="about-page-biography">
            {about.biography?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="about-page-portrait">
          <Image
            src={about.portraitImage || "/images/portrait.png"}
            alt={about.title || "Colin McLean"}
            width={1127}
            height={1396}
            priority
            sizes="(max-width: 760px) calc(100vw - 2rem), 36vw"
          />
        </div>
      </div>
    </article>
  );
}
