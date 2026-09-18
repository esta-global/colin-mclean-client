"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { navigation } from "@/lib/site";

type MobileMenuProps = {
  items?: Array<{ label: string; href: string }>;
};

export function MobileMenu({ items = navigation }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function close(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) trigger.current?.focus();
  }

  const menuLinks = [...items, { label: "Recent Writing", href: "/writing" }];

  return (
    <div
      className="mobile-menu"
      onKeyDown={(event) => {
        if (event.key === "Escape") close(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <button
        ref={trigger}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          {open ? (
            <path d="m6 6 12 12M6 18 18 6" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      <nav
        id="mobile-navigation"
        className="mobile-panel"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <ul>
          {menuLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => close()}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
