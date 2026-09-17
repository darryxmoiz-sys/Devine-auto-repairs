"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-ink)]/10 bg-[var(--color-paper)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="stamp-mark shrink-0" />
          <span
            className="truncate text-lg font-bold leading-none tracking-tight sm:text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Devine Auto Repairs
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[0.95rem] text-[var(--color-ink)]/80 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--color-signal)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:07871955395"
          className="hidden shrink-0 rounded-sm bg-[var(--color-ink)] px-4 py-2.5 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:bg-[var(--color-signal)] md:inline-block"
        >
          07871 955395
        </a>

        {/* Mobile-only: hamburger toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[var(--color-ink)]/15 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-[var(--color-ink)] transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-[var(--color-ink)] transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-5 bg-[var(--color-ink)] transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-[var(--color-ink)]/10 bg-[var(--color-paper)] transition-[max-height] duration-300 ease-[var(--ease-settle)] md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`docket-row py-3.5 text-lg font-medium ${
                pathname === item.href
                  ? "text-[var(--color-signal)]"
                  : "text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:07871955395"
            className="my-4 rounded-sm bg-[var(--color-signal)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-paper)]"
          >
            Call 07871 955395
          </a>
        </nav>
      </div>
    </header>
  );
}
