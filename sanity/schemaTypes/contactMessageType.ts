import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contactMessageType = defineType({
  name: "contactMessage",
  title: "Contact Message",
  type: "document",
  icon: EnvelopeIcon,
  groups: [
    { name: "message", title: "Message", default: true, icon: EnvelopeIcon },
    { name: "status", title: "Status" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      group: "message",
      validation: (rule) => [
        rule.required().error("Name is required so we can reply to the sender"),
        rule.max(120).warning("Keep names under 120 characters"),
      ],
    }),
    defineField({
      name: "email",
      type: "string",
      group: "message",
      validation: (rule) => [
        rule.required().error("Email is required so we can reply"),
        rule.email().error("Enter a valid email address"),
      ],
    }),
    defineField({
      name: "subject",
      type: "string",
      group: "message",
      validation: (rule) => [
        rule.required().error("Subject is required to understand the enquiry"),
        rule.max(160).warning("Keep subjects under 160 characters"),
      ],
    }),
    defineField({
      name: "message",
      type: "text",
      group: "message",
      rows: 6,
      validation: (rule) => [
        rule.required().error("A message is required before publishing"),
        rule.min(10).error("Message must be at least 10 characters"),
        rule.max(2000).warning("Keep messages under 2000 characters"),
      ],
    }),
    defineField({
      name: "status",
      type: "string",
      group: "status",
      initialValue: "new",
      description: "Whether this enquiry still needs a reply",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Read", value: "read" },
          { title: "Replied", value: "replied" },
        ],
        layout: "radio",
      },
      validation: (rule) => [
        rule.required().error("Status is required to track follow-up"),
      ],
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      group: "status",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      name: "name",
      subject: "subject",
      status: "status",
      email: "email",
    },
    prepare({ name, subject, status, email }) {
      return {
        title: subject ?? "Contact message",
        subtitle: `${name ?? "Unknown"} • ${email ?? "No email"} • ${status ?? "new"}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
  ],
});
