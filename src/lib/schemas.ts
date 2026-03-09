import { z } from "zod/v4";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom doit contenir moins de 100 caractères"),
  email: z.email("Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .max(20, "Le numéro de téléphone est trop long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message doit contenir moins de 2000 caractères"),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),
  website: z.string().max(0, "Ce champ doit être vide").optional().or(z.literal("")),
  type: z.literal("contact"),
});

export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom doit contenir moins de 100 caractères"),
  email: z.email("Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .min(5, "Veuillez entrer un numéro de téléphone valide")
    .max(20, "Le numéro de téléphone est trop long"),
  preferredDate: z.string().min(1, "Veuillez sélectionner une date"),
  preferredTime: z.string().min(1, "Veuillez sélectionner un horaire"),
  service: z.string().min(1, "Veuillez sélectionner un soin"),
  notes: z.string().max(1000, "Les notes doivent contenir moins de 1000 caractères").optional().or(z.literal("")),
  website: z.string().max(0, "Ce champ doit être vide").optional().or(z.literal("")),
  type: z.literal("booking"),
});

export const formSchema = z.discriminatedUnion("type", [
  contactFormSchema,
  bookingFormSchema,
]);
