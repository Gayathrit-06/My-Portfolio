import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-bold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-[oklch(0.75_0.18_220)] to-[oklch(0.7_0.2_310)] bg-clip-text text-transparent">
            Gayathri T
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-foreground/10" }}
                inactiveProps={{ className: "text-foreground/60 hover:text-foreground hover:bg-foreground/5" }}
                className="px-4 py-2 text-sm rounded-full transition-all inline-block"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid place-items-center h-10 w-10 rounded-full border border-border bg-foreground/5 text-foreground/80 hover:text-foreground hover:border-[oklch(0.78_0.15_210)]/60 transition-all"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-foreground/10 text-foreground" }}
                  inactiveProps={{ className: "text-foreground/70" }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}