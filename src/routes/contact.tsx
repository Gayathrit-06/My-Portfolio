import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gayathri T" },
      { name: "description", content: "Get in touch with Gayathri T." },
    ],
  }),
  component: Contact,
});