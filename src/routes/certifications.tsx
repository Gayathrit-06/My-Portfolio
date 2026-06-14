import { createFileRoute } from "@tanstack/react-router";
import { Certifications } from "@/components/Certifications";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Gayathri T" },
      { name: "description", content: "Certifications earned by Gayathri T." },
    ],
  }),
  component: Certifications,
});