import { z } from "zod";

export const interestOptions = [
  "Digital Marketing",
  "Recruitment",
  "Both",
  "General Enquiry",
] as const;

// Strict RFC 5322 compatible email regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Strict Phone regex allowing optional leading + and 7 to 15 digits
const phoneRegex = /^\+?[0-9\s\-()]{7,16}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full Name must be at least 2 characters" })
    .max(100, { message: "Full Name cannot exceed 100 characters" })
    .regex(/^[a-zA-Z\s'.\-]+$/, {
      message: "Full Name can only contain letters, spaces, hyphens and apostrophes",
    }),
  companyName: z
    .string()
    .trim()
    .min(2, { message: "Company Name must be at least 2 characters" })
    .max(100, { message: "Company Name cannot exceed 100 characters" }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email Address is required" })
    .max(100, { message: "Email Address cannot exceed 100 characters" })
    .regex(emailRegex, { message: "Please enter a valid email address (e.g. john@company.com)" }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        if (!val || val === "") return true;
        const digitCount = val.replace(/\D/g, "").length;
        return digitCount >= 7 && digitCount <= 15 && phoneRegex.test(val);
      },
      { message: "Phone number must contain between 7 and 15 numeric digits (e.g. +91 85190 22399)" }
    ),
  selectedInterest: z.enum(interestOptions, {
    errorMap: () => ({ message: "Please select a valid interest category" }),
  }),
  requirement: z
    .string()
    .trim()
    .min(10, { message: "Please provide at least 10 characters detailing your requirement" })
    .max(2000, { message: "Requirement details cannot exceed 2000 characters" }),
  source: z
    .string()
    .trim()
    .max(200, { message: "Source string cannot exceed 200 characters" })
    .optional(),
  // Anti-spam honeypot field
  website_url: z.string().max(0, { message: "Bot detected" }).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
