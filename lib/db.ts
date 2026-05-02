const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

type WaitlistEntry = {
  name: string;
  phone: string;
  email?: string;
  location: string;
  source?: string;
};

export async function insertWaitlistLead(entry: WaitlistEntry) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: entry.name,
      phone: entry.phone,
      email: entry.email ?? null,
      location: entry.location,
      source: entry.source ?? "web",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase insert failed: ${res.status} ${text}`);
  }
}
