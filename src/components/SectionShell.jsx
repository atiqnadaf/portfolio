import { motion } from 'framer-motion';

export function SectionShell({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-shell">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="hidden h-px flex-1 bg-line/80 sm:block" />
        </div>
        {children}
      </motion.div>
    </section>
  );
}
