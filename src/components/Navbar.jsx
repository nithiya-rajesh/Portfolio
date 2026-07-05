import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-dark/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-slate-100"
        >
          <Terminal size={18} className="text-accent" />
          nithiya<span className="text-redteam">@</span>sec
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="font-mono text-sm text-muted transition-colors hover:text-slate-100"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-md border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-sm text-accent2 transition-colors hover:bg-accent/20"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-dark/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm text-muted hover:text-slate-100"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
