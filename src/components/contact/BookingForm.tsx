"use client";

import { useState, type FormEvent } from "react";
import { bookingFormSchema } from "@/lib/schemas";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Status = "idle" | "submitting" | "success" | "error";

const TIME_SLOTS = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      type: "booking" as const,
    };

    const result = bookingFormSchema.safeParse(payload);

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
          Demande de Rendez-vous Envoyée !
        </h3>
        <p className="text-foreground/80">
          Votre demande a été envoyée ! Nous vous confirmerons votre rendez-vous dans les 24 heures.
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
        <label htmlFor="booking-website">Website</label>
        <input
          type="text"
          id="booking-website"
          name="website"
          tabIndex={-1}
          value={formData.website}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="booking-name" className="mb-1 block text-sm font-medium text-foreground">
          Nom <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="booking-name"
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
        <label htmlFor="booking-email" className="mb-1 block text-sm font-medium text-foreground">
          Email <span className="text-error">*</span>
        </label>
        <input
          type="email"
          id="booking-email"
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
        <label htmlFor="booking-phone" className="mb-1 block text-sm font-medium text-foreground">
          Téléphone <span className="text-error">*</span>
        </label>
        <input
          type="tel"
          id="booking-phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
          placeholder="+32 4XX XX XX XX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error">{errors.phone}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="booking-service" className="mb-1 block text-sm font-medium text-foreground">
          Soin <span className="text-error">*</span>
        </label>
        <select
          id="booking-service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
        >
          <option value="">Choisir un soin</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-error">{errors.service}</p>
        )}
      </div>

      {/* Preferred Date */}
      <div>
        <label htmlFor="booking-date" className="mb-1 block text-sm font-medium text-foreground">
          Date souhaitée <span className="text-error">*</span>
        </label>
        <input
          type="date"
          id="booking-date"
          name="preferredDate"
          required
          value={formData.preferredDate}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
        {errors.preferredDate && (
          <p className="mt-1 text-sm text-error">{errors.preferredDate}</p>
        )}
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="booking-time" className="mb-1 block text-sm font-medium text-foreground">
          Horaire souhaité <span className="text-error">*</span>
        </label>
        <select
          id="booking-time"
          name="preferredTime"
          required
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
        >
          <option value="">Choisir un horaire</option>
          {TIME_SLOTS.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.preferredTime && (
          <p className="mt-1 text-sm text-error">{errors.preferredTime}</p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="booking-notes" className="mb-1 block text-sm font-medium text-foreground">
          Notes <span className="text-muted">(optionnel)</span>
        </label>
        <textarea
          id="booking-notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-y"
          placeholder="Informations supplémentaires ou demandes particulières"
        />
        {errors.notes && (
          <p className="mt-1 text-sm text-error">{errors.notes}</p>
        )}
      </div>

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
        {status === "submitting" ? "Envoi en cours..." : "Demander un Rendez-vous"}
      </Button>
    </form>
  );
}
