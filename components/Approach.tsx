"use client";

const steps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "Our team of industry professionals audits your operations, finds the biggest bottlenecks, and maps them to software solutions. Then we build it. Strategy and execution in one engagement.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Custom AI systems, software, automations, and agents built for your workflows. No templates, no cookie-cutters. Just full-stack systems designed for how your business operates.",
  },
  {
    number: "03",
    title: "Partnership",
    description:
      "You sell. We build. Create white-label fulfillment for AI agencies and operators who are looking to close deals without hiring software developers.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-b border-zinc-800/50 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          [ 01 ] Our Approach
        </p>
        <h2 className="mb-16 max-w-2xl font-mono text-4xl font-bold tracking-tight text-white md:text-5xl">
          Identify bottlenecks.
          <br />
          Engineer solutions.
        </h2>

        <div className="space-y-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-8 border-l-2 border-zinc-800 pl-8 md:grid-cols-[120px_1fr] md:gap-12 md:pl-12"
            >
              <span className="font-mono text-3xl font-bold text-zinc-600">
                {step.number}.
              </span>
              <div>
                <h3 className="mb-4 font-mono text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="max-w-2xl leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
