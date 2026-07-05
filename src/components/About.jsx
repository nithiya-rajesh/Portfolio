import { Reveal, SectionHeading } from "./Reveal.jsx";
import { about, profile } from "../data.js";
import { ShieldHalf, Bug, Cloud } from "lucide-react";

const focus = [
  { icon: Bug, label: "Offensive VAPT", tint: "text-redteam" },
  { icon: ShieldHalf, label: "AI Red Teaming", tint: "text-accent2" },
  { icon: Cloud, label: "Cloud AppSec", tint: "text-blueteam" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading index="01" eyebrow="about" title="Who I am" />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-3" delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.15}>
            <div className="rounded-xl border border-line bg-card p-6">
              <p className="eyebrow mb-4">current focus</p>
              <ul className="space-y-4">
                {focus.map(({ icon: Icon, label, tint }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-dark">
                      <Icon size={18} className={tint} />
                    </span>
                    <span className="text-slate-200">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-muted">
                📍 {profile.location} · handle: {profile.handle}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
