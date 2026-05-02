import { insertWaitlistLead } from "@/lib/db";

const PHONE_PATTERN = /^[6-9]\d{9}$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, location } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return Response.json({ error: "Name is required." }, { status: 422 });
  }

  const normalizedPhone =
    typeof phone === "string" ? phone.replace(/\D/g, "") : "";
  if (!PHONE_PATTERN.test(normalizedPhone)) {
    return Response.json(
      { error: "Enter a valid 10-digit Indian phone number." },
      { status: 422 }
    );
  }

  if (typeof location !== "string" || !location.trim()) {
    return Response.json({ error: "Location is required." }, { status: 422 });
  }

  try {
    await insertWaitlistLead({
      name: name.trim(),
      phone: normalizedPhone,
      email: typeof email === "string" && email.trim() ? email.trim() : undefined,
      location: location.trim(),
    });
  } catch (err) {
    console.error("Waitlist insert error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
