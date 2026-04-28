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
  const [location, setLocation] = useState("");
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

    if (!location.trim()) {
      setError("Please enter your location.");
      return;
    }

    const entry = {
      name: name.trim(),
      phone: normalizedPhone,
      email: email.trim() || undefined,
      location: location.trim(),
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
    setLocation("");
  };

  return (
    <form
      id="waitlist"
      onSubmit={handleSubmit}
      className={`${
        compact
          ? "w-full max-w-2xl rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 shadow-2xl -ml-2 sm:-ml-5 lg:-ml-6"
          : "ambient-shadow w-full max-w-xl rounded-[2rem] bg-[#f7f1e8]/95 p-6 sm:p-8"
      } ${className}`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${compact ? "text-white/80" : "text-[var(--color-muted-sage)]"}`}>
        Early Access
      </p>
      {!compact && (
        <>
          <h3 className="mt-3 text-[1.9rem] font-semibold leading-tight text-[var(--color-charcoal)]">
            Be the first to know when we launch in your area.
          </h3>
          <p className="mt-2 text-sm text-[#5a5a58]">
            Join the first 500 signups and get priority access when your area
            opens.
          </p>
        </>
      )}

      {compact ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            aria-label="Name"
            className="w-full rounded-2xl bg-white/95 px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white focus:ring-[var(--color-champagne)] shadow-sm"
          />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone number"
            autoComplete="tel"
            inputMode="tel"
            aria-label="Phone number"
            className="w-full rounded-2xl bg-white/95 px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white focus:ring-[var(--color-champagne)] shadow-sm"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Gmail address"
            autoComplete="email"
            type="email"
            aria-label="Gmail address"
            className="w-full rounded-2xl bg-white/95 px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white focus:ring-[var(--color-champagne)] shadow-sm"
          />
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Your location"
            aria-label="Location"
            className="w-full rounded-2xl bg-white/95 px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white focus:ring-[var(--color-champagne)] shadow-sm"
          />
          <button
            type="submit"
            disabled={submitted}
            className="col-span-full mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--color-champagne)] px-6 py-4 text-base font-semibold text-[var(--color-deep-forest)] transition duration-300 hover:scale-[1.01] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-90 shadow-md"
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
              className="w-full rounded-2xl bg-white px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white/90 focus:ring-[var(--color-champagne)] shadow-sm"
            />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone number"
              autoComplete="tel"
              inputMode="tel"
              aria-label="Phone number"
              className="w-full rounded-2xl bg-white px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white/90 focus:ring-[var(--color-champagne)] shadow-sm"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Gmail address"
              autoComplete="email"
              type="email"
              aria-label="Gmail address"
              className="w-full rounded-2xl bg-white px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white/90 focus:ring-[var(--color-champagne)] shadow-sm"
            />
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Your location"
              aria-label="Location"
              className="w-full rounded-2xl bg-white px-5 py-3.5 text-sm text-[var(--color-charcoal)] placeholder:text-[#5a5a58] outline-none ring-2 ring-transparent transition hover:bg-white/90 focus:ring-[var(--color-champagne)] shadow-sm"
            />
          </div>
          <button
            type="submit"
            disabled={submitted}
            className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--color-deep-forest)] px-6 py-4 text-base font-semibold text-white transition duration-300 hover:scale-[1.01] hover:bg-[#234a31] disabled:cursor-not-allowed disabled:opacity-90 shadow-md"
          >
            {ctaLabel}
          </button>
        </>
      )}

      {error && <p className={`mt-4 text-sm font-medium ${compact ? "text-[#ffa899]" : "text-[#8a3f2b]"}`}>{error}</p>}
      {submitted && (
        <p className={`mt-4 text-sm font-medium ${compact ? "text-[#b2d8be]" : "text-[var(--color-muted-sage)]"}`}>
          You&apos;re on the list! We&apos;ll reach out when we launch in your
          area. 🍛
        </p>
      )}
    </form>
  );
}
