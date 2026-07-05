import { Reveal, SectionHeading } from "./Reveal.jsx";
import { skills } from "../data.js";
import { Swords, ShieldCheck, Wrench } from "lucide-react";

const TEAM = {
  red: { label: "Offense", icon: Swords, ring: "border-redteam/30", dot: "bg-redteam", text: "text-redteam" },
  blue: { label: "Defense", icon: ShieldCheck, ring: "border-blueteam/30", dot: "bg-blueteam", text: "text-blueteam" },
  neutral: { label: "Enabling", icon: Wrench, ring: "border-line", dot: "bg-accent", text: "text-accent2" },
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading index="02" eyebrow="skills" title="The arsenal" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-redteam" /> offense
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blueteam" /> defense
            </span>
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((cat, i) => {
            const t = TEAM[cat.team] ?? TEAM.neutral;
            const Icon = t.icon;
            return (
              <Reveal key={cat.group} delay={0.05 * i}>
                <div
                  className={`h-full rounded-xl border ${t.ring} bg-card p-6 transition-colors hover:bg-cardhover`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-100">{cat.group}</h3>
                    <span
                      className={`inline-flex items-center gap-1.5 font-mono text-xs ${t.text}`}
                    >
                      <Icon size={14} /> {t.label}
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-dark px-3 py-1.5 font-mono text-xs text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
