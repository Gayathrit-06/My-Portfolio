import {
  SiC, SiCplusplus, SiPython, SiHtml5, SiCss, SiJavascript,
  SiReact, SiFlask, SiBootstrap, SiPostgresql, SiGit, SiGithub,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Boxes, Network } from "lucide-react";
import type { IconType } from "react-icons";
import type { ComponentType, SVGProps } from "react";

type Icon = IconType | ComponentType<SVGProps<SVGSVGElement>>;

interface Skill {
  name: string;
  icon: Icon;
  color: string; // oklch
}

interface Category {
  title: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC, color: "oklch(0.65 0.18 250)" },
      { name: "C++", icon: SiCplusplus, color: "oklch(0.6 0.2 260)" },
      { name: "Python", icon: SiPython, color: "oklch(0.78 0.16 90)" },
    ],
  },
  {
    title: "Programming Concepts",
    skills: [
      { name: "Object-Oriented Programming", icon: Boxes, color: "oklch(0.72 0.18 310)" },
      { name: "Data Structures", icon: Network, color: "oklch(0.72 0.18 160)" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "oklch(0.68 0.2 40)" },
      { name: "CSS", icon: SiCss, color: "oklch(0.65 0.18 240)" },
      { name: "JavaScript", icon: SiJavascript, color: "oklch(0.85 0.18 95)" },
      { name: "React.js", icon: SiReact, color: "oklch(0.78 0.13 210)" },
      { name: "Flask", icon: SiFlask, color: "oklch(0.92 0.02 250)" },
      { name: "Bootstrap 5", icon: SiBootstrap, color: "oklch(0.6 0.2 290)" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "oklch(0.65 0.13 240)" },
      { name: "Git", icon: SiGit, color: "oklch(0.65 0.2 30)" },
      { name: "GitHub", icon: SiGithub, color: "oklch(0.9 0.01 250)" },
      { name: "VS Code", icon: VscCode, color: "oklch(0.68 0.16 230)" },
    ],
  },
];

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <span
      className="skill-chip group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all"
      style={{
        borderColor: `color-mix(in oklab, ${skill.color} 35%, transparent)`,
        background: `linear-gradient(135deg, color-mix(in oklab, ${skill.color} 14%, transparent), color-mix(in oklab, ${skill.color} 4%, transparent))`,
        color: "var(--foreground)",
      }}
    >
      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" style={{ color: skill.color }} />
      {skill.name}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full skill-grid-bg py-24 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[oklch(0.75_0.18_220)] mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[oklch(0.75_0.18_220)] to-transparent" />
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.title} className="category-card animate-fade-in">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {cat.title}
              </h3>
              <div className="mt-2 h-[2px] w-16 rounded-full bg-gradient-to-r from-[oklch(0.78_0.15_210)] to-transparent" />
              <div className="mt-5 flex flex-wrap gap-3">
                {cat.skills.map((s) => (
                  <SkillChip key={s.name} skill={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}