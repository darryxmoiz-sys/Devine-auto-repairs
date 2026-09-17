"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-sm border border-[var(--color-ink)]/15 bg-[var(--color-paper-dim)] p-6">
        <p className="font-semibold">Got it — thanks.</p>
        <p className="mt-1 text-sm text-[var(--color-ink)]/70">
          We&rsquo;ll get back to you, usually the same day. For anything
          urgent, ring 07871 955395 instead.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1.5 w-full rounded-sm border border-[var(--color-ink)]/20 bg-[var(--color-paper)] px-3.5 py-2.5 outline-none focus-visible:border-[var(--color-signal)]"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-1.5 w-full rounded-sm border border-[var(--color-ink)]/20 bg-[var(--color-paper)] px-3.5 py-2.5 outline-none focus-visible:border-[var(--color-signal)]"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          What&rsquo;s the job?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 w-full rounded-sm border border-[var(--color-ink)]/20 bg-[var(--color-paper)] px-3.5 py-2.5 outline-none focus-visible:border-[var(--color-signal)]"
        />
      </div>
      <button
        type="submit"
        className="rounded-sm bg-[var(--color-signal)] px-6 py-3 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:bg-[var(--color-signal-hover)]"
      >
        Send
      </button>
    </form>
  );
}
