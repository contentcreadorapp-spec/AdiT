"use client";

import { useState } from "react";
import { faqs } from "@/content/site";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-ink/10">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.q} className="border-b border-ink/10">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 font-display text-xl transition-transform duration-300 ${
                    open ? "rotate-45 bg-ink text-paper" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!open}
            >
              <p className="max-w-3xl pb-7 leading-relaxed text-muted">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
