"use server";

import { z } from "zod";
import { writeClient } from "@/sanity/lib/client";

const contactMessageSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.email("Enter a valid email address"),
  subject: z.string().trim().min(1, "Subject is required").max(160),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactMessage(
  input: unknown
): Promise<ContactFormState> {
  const parsed = contactMessageSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Please check the form and try again",
    };
  }

  try {
    await writeClient.create({
      _type: "contactMessage",
      ...parsed.data,
      status: "new",
      createdAt: new Date().toISOString(),
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "We could not send your message. Please try again shortly.",
    };
  }
}
