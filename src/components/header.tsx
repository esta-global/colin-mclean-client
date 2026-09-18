import Link from "next/link";
import { getDynamicNavigation } from "@/lib/nav-service";
import { MobileMenu } from "./mobile-menu";

export async function Header() {
  const navItems = await getDynamicNavigation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Colin McLean home">
          Colin McLean
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/writing" className="header-writing">
          Recent Writing
        </Link>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
