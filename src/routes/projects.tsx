import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Gayathri T" },
      { name: "description", content: "Selected projects by Gayathri T." },
    ],
  }),
  component: Projects,
});