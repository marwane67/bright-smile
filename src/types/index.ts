export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: "email" | "phone" | "whatsapp";
  website: string; // honeypot — must be empty
  type: "contact";
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  notes: string;
  website: string; // honeypot — must be empty
  type: "booking";
}

export type FormSubmission = ContactFormData | BookingFormData;

export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface FormState {
  status: FormStatus;
  message: string;
  errors: Record<string, string>;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  inclusions: string[];
  whoIsItFor: string;
  recommendations: string[];
  contraindications: string[];
  image: string;
  icon: string;
  highlighted?: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BeforeAfterCase {
  id: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  shadesImproved: string;
  treatmentType: string;
  caption: string;
}
