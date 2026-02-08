"use client";

const testimonials = [
  {
    id: "CLIENT_REF_01",
    name: "Elio",
    industry: "Insurance",
    metric: "$1.5M/mo in new policies",
    quote:
      "Our old platform was clunky, expensive, and built for a different type of business. We needed something tailored to how we actually operate. Now we have a custom CRM that handles policy management, team hierarchy, and client tracking exactly how we need it. Faster, cheaper, and built for us.",
  },
  {
    id: "CLIENT_REF_02",
    name: "Joris",
    industry: "Ecommerce",
    metric: "7-figure brand portfolio",
    quote:
      "Product research used to eat up entire days. Now the platform handles 80% of it automatically. We test dozens of creatives in minutes instead of hours. Cut tens of thousands in staffing costs and move faster than competitors with bigger teams.",
  },
  {
    id: "CLIENT_REF_03",
    name: "Juan",
    industry: "Real Estate Development",
    metric: "Legado Coban",
    quote:
      "We were paying $3K per month per project to an agency for marketing across 4 developments. Now our AI system handles it all. Plus we have an agent team responding to inbound inquiries 24/7. Leads get answered at 2am on a Sunday. That was impossible before.",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="border-b border-zinc-800/50 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          [ 03 ] Ecosystem
        </p>
        <h2 className="mb-16 font-mono text-4xl font-bold tracking-tight text-white md:text-5xl">
          Trusted by businesses
          <br />
          doing the work.
        </h2>

        <div className="space-y-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-8 transition-colors hover:border-zinc-700"
            >
              <p className="mb-4 font-mono text-xs text-zinc-500">/// {t.id}</p>
              <div className="mb-4 flex flex-wrap items-baseline gap-4">
                <h3 className="font-mono text-xl font-semibold text-white">
                  {t.name}
                </h3>
                <span className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-sm text-zinc-400">
                  {t.industry}
                </span>
                <span className="font-mono text-sm text-zinc-500">
                  {t.metric}
                </span>
              </div>
              <blockquote className="border-l-2 border-zinc-700 pl-6 text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
