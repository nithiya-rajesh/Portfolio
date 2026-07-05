import { motion } from "framer-motion";

// Fade-up on scroll into view (respects reduced-motion via framer defaults)
export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Consistent eyebrow + heading used by every section
export function SectionHeading({ index, eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-3">
        {index} — {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
