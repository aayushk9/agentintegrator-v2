"use client";

import { useState } from "react";

const faqs = [
  {
    id: "ID_01",
    category: "GENERAL",
    question: "How is Agent Integrator different from a typical dev shop?",
    bullets: [
      "We sell outcomes, not hours",
      "Focus on AI systems, agents, and automations",
      "Work with mid-market businesses that have budget but lack AI expertise",
      "No offshore talent, no mediocre work",
    ],
    summary: "One partner from diagnosis to deployment.",
  },
  {
    id: "ID_02",
    category: "AI_AUTOMATIONS",
    question: "What does AI automation mean for my business?",
    bullets: [
      "We identify your biggest bottlenecks",
      "Target: manual follow-ups, lead routing, content creation, data entry",
      "Build AI systems that handle it automatically",
      "Get hours back every week",
    ],
    summary: "Anything eating your time is a candidate for automation.",
  },
  {
    id: "ID_03",
    category: "PRICING",
    question: "How does pricing work?",
    bullets: [
      "Basic AI systems: $3K – $8K",
      "Custom development: $5K – $15K",
      "Full workflow automation packages: $8K – $20K+",
      "Priced based on scope, not hourly rates",
    ],
    summary: "Final quote depends on complexity and integrations.",
  },
  {
    id: "ID_04",
    category: "SAAS",
    question: "What makes you different from other firms?",
    bullets: [
      "Strategy + execution under one roof",
      "We don't hand off a roadmap and walk away",
      "Find the bottleneck → build the solution → ensure it works",
      "Single point of contact throughout",
    ],
    summary: null,
  },
  {
    id: "ID_05",
    category: "PARTNER",
    question: "What is the partner program?",
    bullets: [
      "White-label fulfillment for AI agencies",
      "You sell the deal, we handle the build",
      "Keep your margin and client relationship",
      "No hiring developers or learning to code",
    ],
    summary: "Designed for operators who close but don't build.",
  },
  {
    id: "ID_06",
    category: "GENERAL",
    question: "What kind of businesses do you work with?",
    bullets: [
      "Mid-market companies with 10–500 employees",
      "Budget allocated, but lacking AI expertise",
      "Industries: Insurance, Ecommerce, Real Estate, SaaS",
      "Businesses ready to operationalize AI, not just explore",
    ],
    summary: "If you have budget and bottlenecks, we can help.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-white"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-zinc-500">{faq.id}</span>
          <span className="font-mono text-xs text-zinc-600">{faq.category}</span>
        </div>
        <h3 className="flex-1 font-mono text-lg font-medium text-zinc-300">
          {faq.question}
        </h3>
        <span className="text-2xl text-zinc-500 transition-transform">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="space-y-4 pb-6">
          <ul className="list-inside list-disc space-y-1 font-mono text-sm text-zinc-400">
            {faq.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {faq.summary && (
            <p className="border-l-2 border-zinc-700 pl-4 font-mono text-sm text-zinc-500">
              // {faq.summary}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="border-b border-zinc-800/50 bg-zinc-950 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          [ 04 ] FAQ
        </p>
        <h2 className="mb-16 font-mono text-4xl font-bold tracking-tight text-white md:text-5xl">
          Questions?
          <br />
          We have answers.
        </h2>

        <div className="divide-y-0">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
