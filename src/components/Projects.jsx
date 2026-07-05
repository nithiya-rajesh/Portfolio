import { Reveal, SectionHeading } from "./Reveal.jsx";
import { projects } from "../data.js";
import { Github, ArrowUpRight } from "lucide-react";

const accentFor = (team) =>
  team === "red"
    ? "before:bg-redteam"
    : team === "blue"
    ? "before:bg-blueteam"
    : "before:bg-accent";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading index="03" eyebrow="projects" title="Selected work & labs" />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={0.04 * i} className="h-full">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card p-6 pl-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-cardhover before:absolute before:inset-y-0 before:left-0 before:w-1 ${accentFor(
                  p.team
                )}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {p.domain}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-colors group-hover:text-accent2"
                  />
                </div>

                <h3 className="mb-2 flex items-center gap-2 font-mono text-lg font-bold text-slate-100">
                  <Github size={16} className="text-muted" />
                  {p.name}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-line bg-dark px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
