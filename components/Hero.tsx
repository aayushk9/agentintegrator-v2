"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-zinc-800/50 bg-zinc-950 pt-24">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16">
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
          /// Software Infrastructure
        </p>
        <h1 className="mb-6 max-w-4xl font-mono text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
          BUILD
          <br />
          <span className="text-zinc-400">SYSTEM</span>
          <br />
          INTELLIGENCE
        </h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-zinc-400">
          We deploy department-level software, AI, and workflows in weeks. Your
          full stack partners for the machine age.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-mono text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200"
          >
            Book Consultation
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center rounded-md border border-zinc-600 px-6 py-3 font-mono text-sm text-white transition-colors hover:border-zinc-400"
          >
            Partners
          </Link>
        </div>
      </div>

      {/* Terminal mockup */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 font-mono text-xs text-zinc-500">
              agent-integrator — session
            </span>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-zinc-500">
              <span>zsh</span>
              <span className="text-zinc-600">❯</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-green-400/80">demo</span>
              <span className="text-zinc-500">1/3</span>
              <span className="text-zinc-600">↑ 0 tokens</span>
              <span className="text-zinc-600">↓ 0 tokens</span>
            </div>
            <p className="mt-2 text-zinc-400">
              agent-integrator v1.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
