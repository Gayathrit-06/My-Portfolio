import { GraduationCap, Target, Sparkles, Download } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    lines: ["B.Tech Information Technology", "NxtWave CCBP 4.0 Program"],
  },
  {
    icon: Target,
    title: "Career Goals",
    lines: [
      "Become a skilled software developer",
      "Contribute to innovative technology solutions",
    ],
  },
  {
    icon: Sparkles,
    title: "Interests",
    lines: [
      "Frontend Development & Web Technologies",
      "Problem solving & exploring new tech",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Get to know me" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-10 mt-12">
          <div className="lg:col-span-3 space-y-5 text-foreground/75 leading-relaxed">
            <p>
              I am <span className="text-foreground font-semibold">Gayathri T</span>,
              a B.Tech Information Technology student currently pursuing my 2nd year at{" "}
              <span className="font-semibold text-[var(--accent-cyan)]">
                College of Engineering Guindy (CEG), Anna University, Chennai
              </span>.
            </p>
            <p>
              As a{" "}
              <span className="font-semibold text-[var(--accent-cyan)]">
                NxtWave CCBP 4.0
              </span>{" "}
              learner, I continuously develop my skills in Frontend Development, Web Technologies,
              Programming, and Software Development through hands-on projects and practical learning.
            </p>
            <p>
              I am passionate about building responsive web applications, exploring modern technologies, and solving real-world problems through technology.
            </p>
            <p>
              My goal is to become a skilled Software Developer and contribute to innovative technology solutions while continuously growing both technically and professionally.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/resume/Gayathri_Resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-background bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] hover:shadow-[0_0_40px_-5px_color-mix(in_oklab,var(--accent-cyan)_40%,transparent)] transition-all"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {cards.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="group relative rounded-2xl p-5 bg-foreground/[0.03] border border-foreground/10 backdrop-blur-xl hover:border-[oklch(0.75_0.18_220)]/50 hover:bg-foreground/[0.05] transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-[oklch(0.75_0.18_220)]/20 to-[oklch(0.7_0.2_310)]/20 border border-foreground/10">
                    <Icon className="h-5 w-5 text-[oklch(0.75_0.18_220)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <ul className="mt-1 space-y-0.5 text-sm text-foreground/65">
                      {lines.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-[oklch(0.75_0.18_220)] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[oklch(0.75_0.18_220)] to-transparent" />
    </div>
  );
}