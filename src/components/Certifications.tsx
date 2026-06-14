import { useState, useEffect } from "react";
import { Award, BookOpen, Briefcase, GraduationCap, X } from "lucide-react";
import { SectionTitle } from "./About";
import responsiveCert from "@/assets/certificates/responsive.png";
import staticCert from "@/assets/certificates/static.png";
import databasesCert from "@/assets/certificates/databases.png";
import nptelCert from "@/assets/certificates/nptel.png";
import mcpParticipation from "@/assets/certificates/mcp-participation.jpg";
import mcpProject from "@/assets/certificates/mcp-project.jpg";
import aiParticipation from "@/assets/certificates/ai-participation.jpg";
import aiProject from "@/assets/certificates/ai-project.jpg";
import startupEcosystem from "@/assets/certificates/startup-ecosystem.png";
import brainFitness from "@/assets/certificates/brain-fitness.jpg";
import autonomousVehicles from "@/assets/certificates/autonomous-vehicles.jpg";
import thinkLikeCeo from "@/assets/certificates/think-like-ceo.png";
import googleFutureEngineers from "@/assets/certificates/google-future-engineers.jpg";
import llmsAgenticAi from "@/assets/certificates/llms-agentic-ai.jpg";
import buildathonParticipation from "@/assets/certificates/buildathon-participation.jpg";
import buildathonProject from "@/assets/certificates/buildathon-project.png";

type Category = "certification" | "course" | "workshop" | "project";

type Item = {
  name: string;
  org: string;
  category: Category;
  description?: string;
  image?: string;
  images?: string[];
};

const items: Item[] = [
  // Courses (4)
  {
    name: "Build Your Own Responsive Website",
    org: "NxtWave CCBP 4.0 Academy",
    category: "course",
    description: "Built responsive websites using Bootstrap and Flexbox.",
    image: responsiveCert,
  },
  {
    name: "Build Your Own Static Website",
    org: "NxtWave CCBP 4.0 Academy",
    category: "course",
    description: "Created static websites using HTML, CSS, and Bootstrap.",
    image: staticCert,
  },
  {
    name: "Introduction to Databases",
    org: "NxtWave CCBP 4.0 Academy",
    category: "course",
    description: "Learned SQL fundamentals and relational database concepts.",
    image: databasesCert,
  },
  {
    name: "Python for Data Science",
    org: "NPTEL — IIT Madras",
    category: "course",
    description: "Elite certification (4-week course) by NPTEL, funded by MoE, Govt. of India.",
    image: nptelCert,
  },

  // Additional Certifications (masterclasses, podcasts, buildathon)
  {
    name: "Generative AI Mastery Workshop — GenAI Buildathon",
    org: "NxtWave × OpenAI Academy",
    category: "certification",
    description:
      "Participated in India's Biggest GenAI Buildathon and completed the Generative AI Mastery Workshop as part of the OpenAI Academy learning community by NxtWave.",
    images: [buildathonParticipation, buildathonProject],
  },
  {
    name: "Inside the Startup Ecosystem — Podcast",
    org: "NxtWave CCBP 4.0 Academy",
    category: "certification",
    description:
      "Podcast by Ms. Vinutha Naga Rallapalli (Principal Consultant at WE Hub, Founder & CEO at The Funding Office) on startup ideation, validation, funding, Angel & VC investors, and the key risks founders navigate.",
    image: startupEcosystem,
  },
  {
    name: "Brain Fitness for High Achievers — Masterclass",
    org: "NxtWave CCBP 4.0 Academy",
    category: "certification",
    description:
      "Masterclass by Dr. Patrick Porter, Ph.D., Founder at BrainTap, on brain fitness techniques for high achievers.",
    image: brainFitness,
  },
  {
    name: "Your Next Big Career Opportunity: Autonomous Vehicles",
    org: "NxtWave CCBP 4.0 Academy",
    category: "certification",
    description:
      "Masterclass by Mr. Shinpei Kato, Founder & CEO of Tier IV, on emerging career opportunities in autonomous vehicles.",
    image: autonomousVehicles,
  },
  {
    name: "Think Like a CEO: Even Before You Graduate",
    org: "NxtWave CCBP 4.0 Academy",
    category: "certification",
    description:
      "Masterclass by Mr. Kishore Indukuri, Founder & CEO of Sid's Farm, on developing a CEO mindset early in your career.",
    image: thinkLikeCeo,
  },
  {
    name: "What Google Looks for in Future Engineers — Podcast",
    org: "NxtWave CCBP 4.0 Academy",
    category: "certification",
    description:
      "Podcast by Mr. Mrinal Ahlawat, Staff Engineer at Google, on product thinking and real-world skills for top tech roles.",
    image: googleFutureEngineers,
  },
  {
    name: "LLMs & Agentic AI 101: AI Tech You Must Know",
    org: "NxtWave CCBP 4.0 Academy",
    category: "certification",
    description:
      "Masterclass by Ms. Drishti Wali, Software Engineer at Ion Health, on LLMs, NLP, Agentic AI and the future skills needed to thrive in an AI-first world.",
    image: llmsAgenticAi,
  },

  // Workshops (2)
  {
    name: "AI Workflows & Automation Workshop",
    org: "NxtWave CCBP 4.0 Academy",
    category: "workshop",
    description:
      "Attended the AI Workflows & Automation Workshop using Make.com and completed the hands-on project — building end-to-end automation workflows with AI agents, MCP servers and APIs.",
    images: [aiParticipation, aiProject],
  },
  {
    name: "Model Context Protocol Mega Workshop",
    org: "NxtWave CCBP 4.0 Academy",
    category: "workshop",
    description:
      "Attended the MCP Mega Workshop and completed the hands-on project — integrating AI with Cursor IDE, Pipedream, and MCP Servers to build prompt-driven AI workflows.",
    images: [mcpParticipation, mcpProject],
  },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "certification", label: "Certificates" },
  { id: "course", label: "Courses" },
  { id: "workshop", label: "Workshops" },
] as const;

const categoryMeta: Record<Category, { title: string; Icon: typeof Award }> = {
  certification: { title: "Certificates", Icon: Award },
  course: { title: "Courses", Icon: GraduationCap },
  workshop: { title: "Workshops", Icon: BookOpen },
  project: { title: "Project & Internship Certificates", Icon: Briefcase },
};

function Card({ item, onOpen }: { item: Item; onOpen: (item: Item) => void }) {
  const Icon = categoryMeta[item.category].Icon;
  const thumb = item.image ?? item.images?.[0];
  const extraCount = item.images ? item.images.length - 1 : 0;
  const clickable = !!thumb;
  return (
    <div className="group relative rounded-2xl p-6 bg-card/80 border border-border backdrop-blur-xl hover:border-[var(--accent-cyan)]/60 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_var(--accent-cyan)] transition-all overflow-hidden">
      <div
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity"
        style={{ background: "color-mix(in oklab, var(--accent-purple) 30%, transparent)" }}
      />
      <div className="relative">
        {thumb && (
          <button
            type="button"
            onClick={() => onOpen(item)}
            className="relative block w-full mb-4 overflow-hidden rounded-lg border border-border bg-white"
            aria-label={`View ${item.name} certificate`}
          >
            <img
              src={thumb}
              alt={`${item.name} certificate`}
              loading="lazy"
              className="w-full h-40 object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {extraCount > 0 && (
              <span className="absolute top-2 right-2 rounded-full bg-black/70 text-white text-xs font-medium px-2.5 py-1 backdrop-blur-sm">
                +{extraCount} more
              </span>
            )}
          </button>
        )}
        <div
          className="grid place-items-center h-12 w-12 rounded-xl border border-foreground/10"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--accent-cyan) 22%, transparent), color-mix(in oklab, var(--accent-purple) 22%, transparent))",
          }}
        >
          <Icon className="h-6 w-6" style={{ color: "var(--accent-cyan)" }} />
        </div>
        <h3 className="mt-4 font-semibold text-foreground leading-snug">{item.name}</h3>
        <p className="mt-1 text-sm text-foreground/60">{item.org}</p>
        {item.description && (
          <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{item.description}</p>
        )}
        {clickable && (
          <button
            type="button"
            onClick={() => onOpen(item)}
            className="mt-4 text-xs font-medium text-[var(--accent-cyan)] hover:underline"
          >
            {item.images && item.images.length > 1
              ? `Click to view all ${item.images.length} certificates →`
              : "Click to view full certificate →"}
          </button>
        )}
      </div>
    </div>
  );
}

export function Certifications() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("all");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const groups: Category[] =
    active === "all"
      ? ["certification", "course", "workshop"]
      : [active as Category];

  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Achievements" title="Certificates" />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium border backdrop-blur-md transition-all ${
                  isActive
                    ? "border-[var(--accent-cyan)]/70 text-foreground shadow-[0_0_20px_-4px_var(--accent-cyan)]"
                    : "border-border bg-foreground/[0.04] text-foreground/70 hover:text-foreground hover:border-foreground/30"
                }`}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, color-mix(in oklab, var(--accent-cyan) 18%, transparent), color-mix(in oklab, var(--accent-purple) 18%, transparent))",
                      }
                    : undefined
                }
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-14 space-y-14">
          {groups.map((cat) => {
            const list = items.filter((i) => i.category === cat);
            if (list.length === 0) return null;
            return (
              <div key={cat}>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {categoryMeta[cat].title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {list.map((item) => (
                    <Card key={item.name} item={item} onOpen={setLightbox} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 grid place-items-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative max-w-6xl w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(lightbox.images ?? (lightbox.image ? [lightbox.image] : [])).map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${lightbox.name} certificate ${i + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl bg-white mb-4 last:mb-0"
              />
            ))}
            <div className="mt-3 text-center text-white">
              <p className="font-semibold">{lightbox.name}</p>
              <p className="text-sm text-white/70">{lightbox.org}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}