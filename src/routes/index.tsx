import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gayathri T — Portfolio" },
      { name: "description", content: "Information Technology student & NxtWave CCBP 4.0 learner. Frontend enthusiast, problem solver, tech explorer." },
      { property: "og:title", content: "Gayathri T — Portfolio" },
      { property: "og:description", content: "Information Technology student & NxtWave CCBP 4.0 learner. Frontend enthusiast, problem solver, tech explorer." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Hero />;
}
