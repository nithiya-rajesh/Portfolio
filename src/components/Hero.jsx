import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ShieldCheck } from "lucide-react";
import { profile, links, stats } from "../data.js";

// Lightweight typewriter for the role line
function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const atFullWord = !del && text === current;
    const delay = atFullWord ? pause : del ? speed / 2 : speed;

    const t = setTimeout(() => {
      if (atFullWord) {
        setDel(true);
      } else if (del && text === "") {
        setDel(false);
        setI((v) => v + 1);
      } else {
        setText((prev) =>
          del ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      {/* dual-accent ambient glow: indigo left, rose right */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-72 w-72 rounded-full bg-redteam/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 md:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          // security researcher · penetration tester
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        {/* Terminal card — the signature element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl rounded-xl border border-line bg-card/80 font-mono text-sm shadow-2xl backdrop-blur glow-accent"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-redteam/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-blueteam/80" />
            <span className="ml-2 text-xs text-muted">bash — profile</span>
          </div>
          <div className="space-y-1.5 px-4 py-4 leading-relaxed">
            <p className="text-muted">
              <span className="text-blueteam">$</span> whoami
            </p>
            <p className="text-slate-200">
              {role}
              <span className="caret text-accent">▋</span>
            </p>
            <p className="pt-1 text-muted">
              <span className="text-blueteam">$</span> cat mission.txt
            </p>
            <p className="text-slate-300">{profile.tagline}</p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-white transition-colors hover:bg-accent2"
          >
            View projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-mono text-sm text-slate-200 transition-colors hover:border-accent/50 hover:text-accent2"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-mono text-sm text-slate-200 transition-colors hover:border-accent/50 hover:text-accent2"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-blueteam"
        >
          <ShieldCheck size={14} /> {profile.availability}
        </motion.p>

        {/* Stat strip */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-5">
              <dt className="font-mono text-2xl font-bold text-slate-50">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
