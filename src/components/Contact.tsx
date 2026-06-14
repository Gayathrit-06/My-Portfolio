import { Code, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SectionTitle } from "./About";

const items = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gayathrithanigaimani",
    href: "https://linkedin.com/in/gayathrithanigaimani",
    external: true,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/Gayathrit-06",
    href: "https://github.com/Gayathrit-06",
    external: true,
  },
  {
    Icon: Code,
    label: "LeetCode",
    value: "leetcode.com/u/Gayathrit08",
    href: "https://leetcode.com/u/Gayathrit08",
    external: true,
  },
  {
    Icon: Mail,
    label: "Email",
    value: "gayathrit2006@gmail.com",
    href: "mailto:gayathrit2006@gmail.com",
    external: false,
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: "#",
    external: false,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Let's connect" title="Get in Touch" />

        <p className="mt-8 max-w-2xl mx-auto text-center text-foreground/70 leading-relaxed">
          Feel free to reach out via email or connect on platforms below!
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {items.map(({ Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center gap-3 rounded-2xl p-7 bg-card/80 border border-border backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[var(--accent-cyan)]/60 hover:shadow-[0_20px_50px_-20px_var(--accent-cyan)]"
            >
              <div
                className="grid place-items-center h-14 w-14 rounded-xl border border-foreground/10 transition-transform group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--accent-cyan) 22%, transparent), color-mix(in oklab, var(--accent-purple) 22%, transparent))",
                }}
              >
                <Icon className="h-6 w-6" style={{ color: "var(--accent-cyan)" }} />
              </div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/55">
                {label}
              </p>
              <p className="text-foreground font-medium break-all">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}