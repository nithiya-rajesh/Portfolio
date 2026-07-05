import { profile } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}. Built with React + Vite + Tailwind.
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="text-blueteam">$</span> exit 0 — security is a process,
          not a product.
        </p>
      </div>
    </footer>
  );
}
