import { createFileRoute } from "@tanstack/react-router";
import { SkillsSection } from "@/components/SkillsSection";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Gayathri T" },
      { name: "description", content: "Languages, frameworks, and tools Gayathri T works with." },
    ],
  }),
  component: SkillsSection,
});