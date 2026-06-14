export function Footer() {
  return (
    <footer className="relative mt-auto backdrop-blur-xl bg-background/60">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[oklch(0.78_0.15_210)] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-center text-center">
        <p className="text-sm text-foreground">
          © 2026{" "}
          <span style={{ color: "var(--accent-cyan)" }} className="font-semibold">
            Gayathri Thanigaimani
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}