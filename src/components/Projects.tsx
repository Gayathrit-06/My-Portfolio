import { Github } from "lucide-react";
import { SectionTitle } from "./About";
import hostelImg from "@/assets/projects/hostel-dashboard.png";
import stayfinderImg from "@/assets/projects/stayfinder.png";
import portfolioImg from "@/assets/projects/My-Portfolio.png";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Hostel Leave Management System",
    description:
      "A web-based hostel leave management system that lets students request leaves and wardens review and approve them, backed by a PostgreSQL database.",
    tech: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    image: hostelImg,
    github: "https://github.com/Gayathrit-06/Hostel-Leave-Management-System",
  },
  {
    title: "StayFinder — PG & Hostel Search Management System",
    description:
      "A full-stack PG & hostel discovery and management platform with customer, owner and super admin roles, powered by custom DSA (BST, AVL, Trie, HashMap) for fast search and indexing.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "DSA (BST, AVL, Trie, HashMap)"],
    image: stayfinderImg,
    github:
      "https://github.com/Gayathrit-06/StayFinder-PG-Hostel-Search-Management-System",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing my projects, skills and certifications with a dark cyber-tech aesthetic.",
    tech: ["React.js", "HTML", "CSS", "JavaScript"],
    image: portfolioImg,
    github: "https://github.com/Gayathrit-06/My-Portfolio",
  },
  {
    title: "Data Structures Visualizer",
    description:
      "An interactive web tool to visualize core data structure operations and algorithms in real time.",
    tech: ["JavaScript", "HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70",
    github: "https://github.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Featured work" title="Projects" />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl overflow-hidden bg-foreground/[0.03] border border-foreground/10 backdrop-blur-xl transition-all duration-500 hover:border-[oklch(0.75_0.18_220)]/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_oklch(0.5_0.2_260)/0.5]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-[oklch(0.8_0.15_220)] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-foreground/[0.05] border border-foreground/10 text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-foreground/15 bg-foreground/[0.05] hover:bg-foreground/10 hover:border-[oklch(0.75_0.18_220)]/60 transition-all"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}