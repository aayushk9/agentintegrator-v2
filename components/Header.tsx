"use client";

import Link from "next/link";

const navLinks = [
  { href: "#approach", label: "01/APPROACH" },
  { href: "#automate", label: "02/AUTOMATE" },
  { href: "#ecosystem", label: "03/ECOSYSTEM" },
  { href: "#faq", label: "04/FAQ" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-lg font-semibold tracking-tight text-white">
            Agent Integrator
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/partners"
            className="hidden text-sm text-zinc-400 transition-colors hover:text-white sm:block"
          >
            Partners
          </Link>
          <Link
            href="#contact"
            className="rounded-md border border-zinc-600 bg-transparent px-4 py-2 font-mono text-sm text-white transition-all hover:border-zinc-400 hover:bg-zinc-800/50"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
