import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  locale?: string;
  property?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, phone, message, locale, property } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const lead = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message?.trim() ?? "",
      locale: locale ?? "es",
      property: property ?? "unknown",
      receivedAt: new Date().toISOString(),
    };

    // Web3Forms integration (free tier) — set WEB3FORMS_ACCESS_KEY in Vercel
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      const formRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Nuevo lead exclusivo: ${lead.property}`,
          from_name: lead.name,
          email: lead.email,
          phone: lead.phone,
          message: `Teléfono: ${lead.phone}\nIdioma: ${lead.locale}\nPropiedad: ${lead.property}\n\nMensaje:\n${lead.message}`,
        }),
      });

      if (!formRes.ok) {
        throw new Error("Web3Forms failed");
      }
    } else {
      // Development / fallback: log lead server-side
      console.log("[LEAD]", JSON.stringify(lead));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT ERROR]", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
