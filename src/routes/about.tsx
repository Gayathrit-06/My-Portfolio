import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gayathri T" },
      { name: "description", content: "About Gayathri T — B.Tech IT student at CEG, Chennai and NxtWave CCBP 4.0 learner." },
    ],
  }),
  component: About,
});