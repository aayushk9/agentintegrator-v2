"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-4xl font-bold tracking-tight text-white md:text-5xl">
            Get ahead or get left behind.
          </h2>
          <p className="mb-8 text-zinc-400">
            Need systems built? Book a dev call.
            <br />
            Want a technical partner? Apply for partnership.
          </p>
          <a
            href="mailto:team@agentintegrator.io"
            className="font-mono text-lg text-zinc-300 underline transition-colors hover:text-white"
          >
            team@agentintegrator.io
          </a>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-8">
          <Link
            href="#contact"
            className="rounded-md border border-zinc-600 px-6 py-3 font-mono text-sm text-white transition-colors hover:border-zinc-400"
          >
            Development Services
          </Link>
          <Link
            href="/partners"
            className="rounded-md border border-zinc-600 px-6 py-3 font-mono text-sm text-white transition-colors hover:border-zinc-400"
          >
            Equity Partnerships
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-12 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-semibold text-white">
              Agent Integrator
            </span>
          </div>
          <p className="font-mono text-sm text-zinc-500">
            © {new Date().getFullYear()} Agent Integrator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
