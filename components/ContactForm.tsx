"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error" | "not_configured";

const inputClass =
  "w-full rounded-xl border border-ink/20 bg-transparent px-4 py-3.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-ink";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Submissions go to /api/contact, which forwards them to a Google Sheet
    // via a Google Apps Script web app (CONTACT_SHEET_WEBAPP_URL on the server).
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: String(data.name ?? ""),
          email: String(data.email ?? ""),
          business: String(data.business ?? ""),
          message: String(data.message ?? ""),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else if (res.status === 503) {
        setStatus("not_configured");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-ink/15 bg-signal/25 p-8 sm:p-10" role="status">
        <p className="font-display text-3xl font-bold tracking-tight uppercase">
          Message received.
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          Thanks for reaching out. We&apos;ll reply within one business day with
          honest next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block font-mono text-xs tracking-[0.18em] uppercase">
            Your name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block font-mono text-xs tracking-[0.18em] uppercase">
            Email
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-business" className="mb-2 block font-mono text-xs tracking-[0.18em] uppercase">
          Business
        </label>
        <input id="contact-business" name="business" type="text" required autoComplete="organization" placeholder="Your business name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block font-mono text-xs tracking-[0.18em] uppercase">
          What do you want to fix or grow?
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your tech setup, your marketing, or both."
          className={`${inputClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm">
          Something went wrong sending your message. Please try again in a moment.
        </p>
      )}
      {status === "not_configured" && (
        <p role="alert" className="rounded-xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm">
          Our form delivery isn&apos;t connected yet. We&apos;re wiring it up. Please
          check back soon.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-ink px-8 py-4 font-display text-base font-bold tracking-tight text-paper uppercase transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Book a free consultation"}
      </button>
      <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
        No spam, no newsletters, just a reply from a human.
      </p>
    </form>
  );
}
