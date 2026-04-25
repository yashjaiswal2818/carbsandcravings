"use client";

import { useMemo, useState } from "react";

type WaitlistFormProps = {
  className?: string;
  compact?: boolean;
};

const PHONE_PATTERN = /^[6-9]\d{9}$/;
const STORAGE_KEY = "carbs-and-cravings-waitlist";

export function WaitlistForm({
  className = "",
  compact = false,
}: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(() => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      return existing ? (JSON.parse(existing) as unknown[]).length > 0 : false;
    } catch {
      return false;
    }
  });

  const ctaLabel = useMemo(
    () => (submitted ? "You're on the list" : "Join Waitlist"),
    [submitted],
  );

  const handleSubmit = (event: { preventDefault(): void }) => {
    event.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    const normalizedPhone = phone.replace(/\D/g, "");
    if (!PHONE_PATTERN.test(normalizedPhone)) {
      setError("Enter a valid 10-digit Indian phone number.");
      return;
    }

    const entry = {
      name: name.trim(),
      phone: normalizedPhone,
      email: email.trim() || undefined,
      city: "Bengaluru",
      submittedAt: new Date().toISOString(),
    };

    try {
      const existingEntries = localStorage.getItem(STORAGE_KEY);
      const parsedEntries = existingEntries
        ? (JSON.parse(existingEntries) as Array<typeof entry>)
        : [];

      parsedEntries.push(entry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedEntries));
    } catch {
      // Storage can fail in private browsing; keep UX success-first.
    }

    setSubmitted(true);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form
      id="waitlist"
      onSubmit={handleSubmit}
      className={`${compact ? "w-full max-w-3xl" : "ambient-shadow w-full max-w-xl rounded-[2rem] bg-[#f7f1e8]/95 p-5 sm:p-7"} ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-sage)]">
        Bengaluru Early Access
      </p>
      {!compact && (
        <>
          <h3 className="mt-3 text-[1.9rem] font-semibold leading-tight text-[var(--color-charcoal)]">
            Be the first to know when we launch in your city.
          </h3>
          <p className="mt-2 text-sm text-[#5a5a58]">
            Join the first 500 signups and get priority access when your area
            opens.
          </p>
        </>
      )}

      {compact ? (
        <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            aria-label="Name"
            className="w-full sm:flex-1 rounded-full bg-white px-5 py-3 text-sm text-[var(--color-charcoal)] outline-none ring-2 ring-transparent transition focus:ring-[var(--color-champagne)]"
          />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone number"
            autoComplete="tel"
            inputMode="tel"
            aria-label="Phone number"
            className="w-full sm:flex-1 rounded-full bg-white px-5 py-3 text-sm text-[var(--color-charcoal)] outline-none ring-2 ring-transparent transition focus:ring-[var(--color-champagne)]"
          />
          <button
            type="submit"
            disabled={submitted}
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[var(--color-deep-forest)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.01] hover:bg-[#234a31] disabled:cursor-not-allowed disabled:opacity-90"
          >
            {ctaLabel}
          </button>
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              autoComplete="name"
              aria-label="Name"
              className="w-full rounded-full bg-white px-5 py-3 text-sm text-[var(--color-charcoal)] outline-none ring-2 ring-transparent transition focus:ring-[var(--color-champagne)]"
            />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone number"
              autoComplete="tel"
              inputMode="tel"
              aria-label="Phone number"
              className="w-full rounded-full bg-white px-5 py-3 text-sm text-[var(--color-charcoal)] outline-none ring-2 ring-transparent transition focus:ring-[var(--color-champagne)]"
            />
          </div>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email (optional)"
            autoComplete="email"
            type="email"
            aria-label="Email (optional)"
            className="mt-3 w-full rounded-full bg-white px-5 py-3 text-sm text-[var(--color-charcoal)] outline-none ring-2 ring-transparent transition focus:ring-[var(--color-champagne)]"
          />
          <button
            type="submit"
            disabled={submitted}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-deep-forest)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.01] hover:bg-[#234a31] disabled:cursor-not-allowed disabled:opacity-90"
          >
            {ctaLabel}
          </button>
        </>
      )}

      {error && <p className="mt-3 text-sm text-[#8a3f2b]">{error}</p>}
      {submitted && (
        <p className="mt-3 text-sm text-[var(--color-muted-sage)]">
          You&apos;re on the list! We&apos;ll reach out when we launch in your
          city. 🍛
        </p>
      )}
    </form>
  );
}
