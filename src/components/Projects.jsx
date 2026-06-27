import { motion } from 'framer-motion';

function ProjectVisual({ type, title }) {
  if (type === 'jewellery') {
    return (
      <svg viewBox="0 0 320 210" role="img" aria-label={`${title} mockup`} className="h-full w-full">
        <defs>
          <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f8e8b0" />
            <stop offset="0.48" stopColor="#d7a84d" />
            <stop offset="1" stopColor="#8b6429" />
          </linearGradient>
          <linearGradient id="jewelBg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#191512" />
            <stop offset="1" stopColor="#3b3027" />
          </linearGradient>
        </defs>
        <rect width="320" height="210" rx="28" fill="url(#jewelBg)" />
        <rect x="28" y="30" width="264" height="150" rx="20" fill="#fff8" opacity="0.08" />
        <path d="M83 102c24 45 130 45 154 0" fill="none" stroke="url(#gold)" strokeWidth="9" strokeLinecap="round" />
        <circle cx="160" cy="106" r="28" fill="none" stroke="url(#gold)" strokeWidth="8" />
        <path d="m144 95 16-17 16 17-16 32Z" fill="#dff9ff" opacity="0.92" />
        <circle cx="99" cy="110" r="7" fill="#f6d279" />
        <circle cx="221" cy="110" r="7" fill="#f6d279" />
        <rect x="54" y="45" width="58" height="8" rx="4" fill="#fff" opacity="0.16" />
        <rect x="54" y="62" width="88" height="7" rx="3.5" fill="#fff" opacity="0.1" />
      </svg>
    );
  }

  if (type === 'netflix') {
    return (
      <svg viewBox="0 0 320 210" role="img" aria-label={`${title} mockup`} className="h-full w-full">
        <defs>
          <linearGradient id="screenRed" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#2a0d12" />
            <stop offset="1" stopColor="#070708" />
          </linearGradient>
        </defs>
        <rect width="320" height="210" rx="28" fill="url(#screenRed)" />
        <rect x="30" y="32" width="260" height="146" rx="18" fill="#0b0b0d" stroke="#ffffff" strokeOpacity="0.1" />
        <path d="M78 67h14l30 76h-14L78 67Zm45 0h14v76h-14V67Z" fill="#e50914" />
        <rect x="167" y="70" width="74" height="12" rx="6" fill="#fff" opacity="0.82" />
        <rect x="167" y="94" width="92" height="7" rx="3.5" fill="#fff" opacity="0.22" />
        <rect x="167" y="111" width="70" height="7" rx="3.5" fill="#fff" opacity="0.16" />
        <rect x="167" y="137" width="42" height="17" rx="8.5" fill="#fff" opacity="0.9" />
        <rect x="44" y="158" width="46" height="8" rx="4" fill="#e50914" opacity="0.8" />
        <rect x="96" y="158" width="46" height="8" rx="4" fill="#fff" opacity="0.12" />
        <rect x="148" y="158" width="46" height="8" rx="4" fill="#fff" opacity="0.12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 210" role="img" aria-label={`${title} mockup`} className="h-full w-full">
      <defs>
        <linearGradient id="portfolioBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#eff6ff" />
          <stop offset="1" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      <rect width="320" height="210" rx="28" fill="url(#portfolioBg)" />
      <rect x="34" y="32" width="252" height="146" rx="22" fill="#0b111b" />
      <circle cx="68" cy="64" r="12" fill="#ffffff" opacity="0.92" />
      <rect x="94" y="56" width="92" height="8" rx="4" fill="#ffffff" opacity="0.68" />
      <rect x="94" y="72" width="58" height="6" rx="3" fill="#ffffff" opacity="0.24" />
      <rect x="58" y="108" width="112" height="12" rx="6" fill="#ffffff" opacity="0.9" />
      <rect x="58" y="131" width="78" height="7" rx="3.5" fill="#ffffff" opacity="0.28" />
      <circle cx="229" cy="112" r="42" fill="#14b8a6" opacity="0.22" />
      <circle cx="229" cy="112" r="28" fill="#ffffff" opacity="0.92" />
      <path d="M216 113h26M229 100v26" stroke="#0b111b" strokeWidth="5" strokeLinecap="round" opacity="0.76" />
    </svg>
  );
}

export function Projects({ projects }) {
  return (
    <div className="grid gap-5">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
        >
          <div className="project-shot" aria-hidden="true">
            <ProjectVisual type={project.visual} title={project.title} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-6">
            <div>
              <p className="mb-3 text-sm text-muted">0{index + 1}</p>
              <h3 className="text-2xl font-semibold tracking-normal text-zinc-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 max-w-2xl text-pretty leading-7 text-muted">{project.description}</p>
              {project.credentials && <p className="mt-3 text-sm font-medium text-accent">{project.credentials}</p>}
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
                {project.stack.map((item) => (
                  <li key={item} className="stack-pill">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className="btn-secondary shrink-0"
                href={project.href}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                View Project
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
