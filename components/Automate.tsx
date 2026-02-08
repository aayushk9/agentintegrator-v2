"use client";

import Link from "next/link";

const stats = [
  { label: "Manual processes", value: "47 hrs/week", after: null },
  { label: "Lead response time", value: "4.2 hours", after: null },
  { label: "Data entry errors", value: "23%", after: null },
  { label: "After automation", value: "4×", sub: "efficiency", after: true },
];

export default function Automate() {
  return (
    <section id="automate" className="border-b border-zinc-800/50 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          [ 02 ] Why Automate?
        </p>
        <h2 className="mb-6 max-w-3xl font-mono text-4xl font-bold tracking-tight text-white md:text-5xl">
          You have two options.
        </h2>
        <p className="mb-4 text-2xl font-medium text-zinc-300">
          Automate now.
          <br />
          Or watch competitors do it first.
        </p>
        <p className="mb-16 max-w-2xl text-zinc-400">
          AI is not the future. It is the present. Businesses running on
          spreadsheets and manual processes are losing ground to competitors who
          figured this out early.
        </p>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-lg border p-6 ${
                stat.after
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-zinc-800 bg-zinc-900/50"
              }`}
            >
              <p className="mb-1 font-mono text-sm text-zinc-500">
                {stat.label}
              </p>
              <p
                className={`font-mono text-2xl font-bold ${
                  stat.after ? "text-green-400" : "text-white"
                }`}
              >
                {stat.value}
                {stat.sub && (
                  <span className="ml-1 text-sm font-normal text-zinc-400">
                    {stat.sub}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-12 rounded-lg border border-amber-500/20 bg-amber-500/5 p-6">
          <p className="font-mono text-lg font-semibold text-amber-200/90">
            /// AI IS NOT COMPLICATED. IGNORING IT IS EXPENSIVE.
          </p>
        </div>

        <p className="mb-8 max-w-2xl text-zinc-400">
          Most companies have budget, but they don&apos;t have the AI and
          software expertise. That&apos;s where we come in. We find your
          bottlenecks, build systems that fix them, and make sure they work.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-mono text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200"
          >
            Get Started
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/ai-development"
            className="inline-flex items-center rounded-md border border-zinc-600 px-6 py-3 font-mono text-sm text-white transition-colors hover:border-zinc-400"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
