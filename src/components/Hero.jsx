import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const FloatingOrb = lazy(() =>
  import('./visuals/FloatingOrb.jsx').then((module) => ({ default: module.FloatingOrb })),
);

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
        <path
          d="M20 14.6A7.6 7.6 0 0 1 9.4 4a7.7 7.7 0 1 0 10.6 10.6Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
      <path
        d="M12 5.2v-2M12 20.8v-2M5.2 12h-2M20.8 12h-2M7.2 7.2 5.8 5.8M18.2 18.2l-1.4-1.4M16.8 7.2l1.4-1.4M5.8 18.2l1.4-1.4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function Hero({ profile, theme, onToggleTheme }) {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl justify-end">
        <button
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={onToggleTheme}
          className="theme-toggle"
        >
          <ThemeIcon theme={theme} />
        </button>
      </div>
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-6xl items-center gap-12 pb-16 lg:grid-cols-[1fr_0.82fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <h1 className="max-w-4xl text-balance font-display text-6xl leading-[0.92] tracking-normal text-zinc-950 dark:text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn-secondary" href={profile.resume} download="ATIQ_RESUME.pdf">
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[30rem]"
        >
          <div className="hero-orb-frame">
            <Suspense fallback={<div className="orb-fallback" />}>
              <FloatingOrb theme={theme} />
            </Suspense>
          </div>
          <div className="hero-info-card">
            <div className="flex items-center gap-3">
              <img
                src={profile.image}
                alt="Atiq Nadaf"
                className="size-14 shrink-0 rounded-2xl object-cover shadow-lg ring-1 ring-line/50"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Currently focused on</p>
                <p className="mt-0.5 text-sm font-semibold leading-6 text-zinc-950 dark:text-white sm:text-base">
                  Programming skills
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none mx-auto -mt-8 h-px max-w-6xl bg-line/80" />
    </section>
  );
}
