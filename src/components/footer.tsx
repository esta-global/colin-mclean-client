import Link from "next/link";
import { site } from "@/lib/site";
import { getDynamicFooterCategories } from "@/lib/nav-service";

export async function Footer() {
  const categoryLinks = await getDynamicFooterCategories();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="wordmark">
              Colin McLean
            </Link>
            <p>
              Professional investor and writer exploring finance, business and
              public policy through an economic lens.
            </p>
            <Link href="/disclaimer" className="disclaimer-label">
              Disclaimer
            </Link>
            <p>This site does not offer investment advice or recommendations.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Navigation</h2>
            <ul>
              <li>
                <Link href="/writing">Writing</Link>
              </li>
              <li>
                <Link href="/about">About Colin</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Explore writing">
            <h2>Categories</h2>
            <ul>
              {categoryLinks.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href}>{cat.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Connect">
            <h2>Connect</h2>
            <ul>
              <li>
                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a href="/rss.xml">RSS feed</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Colin McLean. All rights reserved.</p>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
