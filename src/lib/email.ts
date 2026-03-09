import { Resend } from "resend";

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  preferredContact: string;
}

interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  notes?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_EMAIL || "hello@example.com";

  await resend.emails.send({
    from: "Website Contact <onboarding@resend.dev>",
    to,
    replyTo: data.email,
    subject: `New contact from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
        <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${escapeHtml(data.phone || "Not provided")}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Preferred Contact</td><td style="padding: 8px;">${escapeHtml(data.preferredContact)}</td></tr>
      </table>
      <h3>Message</h3>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function sendBookingEmail(data: BookingEmailData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_EMAIL || "hello@example.com";

  await resend.emails.send({
    from: "Website Booking <onboarding@resend.dev>",
    to,
    replyTo: data.email,
    subject: `New booking request from ${data.name} — ${data.service}`,
    html: `
      <h2>New Booking Request</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
        <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Service</td><td style="padding: 8px;">${escapeHtml(data.service)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Preferred Date</td><td style="padding: 8px;">${escapeHtml(data.preferredDate)}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Preferred Time</td><td style="padding: 8px;">${escapeHtml(data.preferredTime)}</td></tr>
      </table>
      ${data.notes ? `<h3>Notes</h3><p>${escapeHtml(data.notes).replace(/\n/g, "<br/>")}</p>` : ""}
    `,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
