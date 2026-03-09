"use client";

import { useState, type FormEvent } from "react";
import { contactFormSchema } from "@/lib/schemas";
import Button from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: "email" | "phone" | "whatsapp";
  website: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormData];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    const payload = {
      ...formData,
      type: "contact" as const,
    };

    const result = contactFormSchema.safeParse(payload);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormData | undefined;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 429) {
        setStatus("error");
        setErrorMessage(
          "Trop de demandes. Veuillez patienter quelques minutes avant de réessayer."
        );
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        setStatus("error");
        setErrorMessage(data.error || "Une erreur est survenue. Veuillez réessayer.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Erreur réseau. Veuillez vérifier votre connexion et réessayer.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-success/30 bg-success/10 p-6 text-center">
        <h3 className="mb-2 text-lg font-semibold text-success">
          Message Envoyé !
        </h3>
        <p className="text-foreground/80">
          Votre message a été envoyé ! Nous vous répondrons dans les 24 heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          value={formData.website}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
          Nom <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="Votre nom complet"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
          Email <span className="text-error">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="vous@exemple.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
          Téléphone <span className="text-muted">(optionnel)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="+32 4XX XX XX XX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-y"
          placeholder="Comment pouvons-nous vous aider ?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-foreground">
          Moyen de contact préféré
        </legend>
        <div className="flex flex-wrap gap-4">
          {(
            [
              { value: "email", label: "Email" },
              { value: "phone", label: "Téléphone" },
              { value: "whatsapp", label: "WhatsApp" },
            ] as const
          ).map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
            >
              <input
                type="radio"
                name="preferredContact"
                value={option.value}
                checked={formData.preferredContact === option.value}
                onChange={handleChange}
                className="h-4 w-4 border-border text-primary focus:ring-primary/20"
              />
              {option.label}
            </label>
          ))}
        </div>
        {errors.preferredContact && (
          <p className="mt-1 text-sm text-error">{errors.preferredContact}</p>
        )}
      </fieldset>

      {/* Error Message */}
      {status === "error" && errorMessage && (
        <div className="rounded-lg border border-error/30 bg-error/10 p-4 text-sm text-error">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le Message"}
      </Button>
    </form>
  );
}
