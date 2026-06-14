import profile from "@/assets/profiles.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[oklch(0.5_0.2_260)]/30 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[oklch(0.55_0.18_200)]/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full grid md:grid-cols-[1.25fr_1fr] gap-16 md:gap-24 lg:gap-32 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <p className="text-base md:text-lg font-mono uppercase tracking-[0.35em] text-[var(--accent-cyan)] mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
              Gayathri T
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl lg:text-3xl text-foreground/80 font-medium">
            Problem Solver <span className="text-[var(--accent-cyan)]">•</span>{" "}
            FE Enthusiast <span className="text-[var(--accent-cyan)]">•</span>{" "}
            Tech Explorer
          </p>
          <div className="mt-5 space-y-1 text-base md:text-lg text-foreground/70 leading-relaxed">
            <p>B.Tech Information Technology Student</p>
            <p>Currently Pursuing 2nd Year at</p>
            <p>
              <span className="font-semibold text-[var(--accent-cyan)]">
                College of Engineering Guindy (CEG)
              </span>
              ,{" "}
              <span className="font-semibold text-[var(--accent-cyan)]">
                Chennai (Anna University)
              </span>
            </p>
            <p>
              <span className="font-semibold text-[var(--accent-cyan)]">
                NxtWave CCBP 4.0
              </span>{" "}
              Learner
            </p>
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="group relative inline-flex items-center gap-2 px-9 py-4 text-base md:text-lg rounded-full font-medium text-background bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] hover:shadow-[0_0_40px_-5px_color-mix(in_oklab,var(--accent-cyan)_40%,transparent)] transition-all"
            >
              About Me
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[oklch(0.7_0.2_260)] via-[oklch(0.7_0.18_310)] to-[oklch(0.75_0.18_200)] blur-2xl opacity-50 animate-pulse" />
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem] rounded-full p-1 bg-gradient-to-tr from-[oklch(0.75_0.18_220)] via-[oklch(0.7_0.2_310)] to-[oklch(0.75_0.18_200)]">
              <div className="h-full w-full rounded-full overflow-hidden bg-background">
                <img
                  src={profile}
                  alt="Gayathri T"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}