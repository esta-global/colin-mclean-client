import Image from "next/image";

import { LinkedInIcon } from "@/components/ui";
import { site } from "@/lib/site";

import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <article className="contact-page" aria-labelledby="contact-page-title">
      <header className="contact-page-intro container">
        <h1 id="contact-page-title">Get in Touch</h1>
        <p>Feel free to contact us! Submit your queries here and we will get back to you as soon as possible.</p>
      </header>
      <div className="contact-layout container">
        <section className="contact-form-card" aria-label="Contact form">
          <ContactForm />
        </section>
        <aside className="contact-linkedin-card" aria-labelledby="linkedin-title">
          <Image
            src="/images/portrait.png"
            alt="Colin McLean"
            width={1127}
            height={1396}
            sizes="5.5rem"
          />
          <h2 id="linkedin-title">Connect on LinkedIn</h2>
          <span className="contact-card-rule" />
          <p>Prefer to connect directly? You can also reach out via LinkedIn and send a message.</p>
          <a href="https://linkedin.com/in/colin-w-mclean" target="_blank" rel="noopener noreferrer" className="linkedin-button">
            <LinkedInIcon />
            Connect on LinkedIn
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </article>
  );
}
