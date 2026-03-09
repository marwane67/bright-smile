import { NextRequest, NextResponse } from "next/server";
import { formSchema } from "@/lib/schemas";
import { rateLimit } from "@/lib/rate-limit";
import { sendContactEmail, sendBookingEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const { success } = await rateLimit(ip, 5, 15 * 60 * 1000);

  if (!success) {
    return NextResponse.json(
      {
        error:
          "Trop de demandes. Veuillez patienter quelques minutes avant de réessayer.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "JSON invalide dans le corps de la requête." },
      { status: 400 }
    );
  }

  const result = formSchema.safeParse(body);

  if (!result.success) {
    const errorMessages: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path.join(".");
      if (!errorMessages[field]) {
        errorMessages[field] = issue.message;
      }
    }
    return NextResponse.json(
      { error: "Erreur de validation.", details: errorMessages },
      { status: 400 }
    );
  }

  const data = result.data;

  // Silent rejection for honeypot
  if (data.website) {
    return NextResponse.json({ success: true });
  }

  const hasResendKey = !!process.env.RESEND_API_KEY;

  try {
    if (hasResendKey) {
      if (data.type === "contact") {
        await sendContactEmail(data);
      } else {
        await sendBookingEmail(data);
      }
    } else {
      console.log("[MODE DÉMO] Soumission de formulaire :", data);
    }
  } catch (error) {
    console.error("Échec de l'envoi de l'email :", error);
    return NextResponse.json(
      { error: "Échec de l'envoi de votre message. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
