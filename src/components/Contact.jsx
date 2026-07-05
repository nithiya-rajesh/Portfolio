import { Reveal } from "./Reveal.jsx";
import { links } from "../data.js";
import { Mail, Github, Linkedin, PenLine, ArrowRight } from "lucide-react";

const channels = [
  { icon: Github, label: "GitHub", value: "@nithiya-rajesh", href: links.github },
  { icon: Linkedin, label: "LinkedIn", value: "nithya-rajendran", href: links.linkedin },
  { icon: PenLine, label: "Medium", value: "Read my write-ups", href: links.medium },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="eyebrow mb-3">05 — contact</p>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Let&apos;s find the gaps{" "}
            <span className="text-accent2">before</span> someone else does.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-slate-400">
            Open to penetration testing engagements, security research, and
            collaboration. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${links.email}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-accent px-6 py-4 font-mono text-sm font-semibold text-white transition-colors hover:bg-accent2"
          >
            <Mail size={18} />
            {links.email}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line bg-card p-5 transition-colors hover:border-accent/40 hover:bg-cardhover"
              >
                <span className="grid h-10 w-10 place-items-center rounded-md border border-line bg-dark">
                  <Icon size={18} className="text-accent2" />
                </span>
                <span>
                  <span className="block font-mono text-xs text-muted">{label}</span>
                  <span className="block text-sm text-slate-200">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
