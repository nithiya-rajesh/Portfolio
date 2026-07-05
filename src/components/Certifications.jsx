import { Reveal, SectionHeading } from "./Reveal.jsx";
import { certifications } from "../data.js";
import { BadgeCheck, Loader } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certs" className="border-t border-line/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading index="04" eyebrow="credentials" title="Certifications" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => {
            const done = c.status === "Certified";
            return (
              <Reveal key={c.name} delay={0.05 * i} className="h-full">
                <div
                  className={`flex h-full flex-col justify-between rounded-xl border bg-card p-6 ${
                    done ? "border-blueteam/25" : "border-amber-500/25"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] ${
                        done
                          ? "bg-blueteam/10 text-blueteam"
                          : "bg-amber-400/10 text-amber-400"
                      }`}
                    >
                      {done ? <BadgeCheck size={13} /> : <Loader size={13} />}
                      {c.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold leading-snug text-slate-100">
                      {c.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted">{c.issuer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
