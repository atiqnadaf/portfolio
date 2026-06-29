import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import { Education } from './components/Education.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { Projects } from './components/Projects.jsx';
import { SectionShell } from './components/SectionShell.jsx';
import { portfolio } from './data/portfolio.js';

function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    const compactViewport = window.matchMedia('(max-width: 767px)');

    let frameId = 0;
    let lenis;
    let destroyed = false;

    const shouldUseLenis = () => !prefersReducedMotion.matches && !coarsePointer.matches && !compactViewport.matches;

    const raf = (time) => {
      lenis?.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    const stopLenis = () => {
      cancelAnimationFrame(frameId);
      frameId = 0;
      lenis?.destroy();
      lenis = undefined;
    };

    const startLenis = () => {
      if (lenis || !shouldUseLenis()) {
        return;
      }

      import('lenis').then(({ default: Lenis }) => {
        if (destroyed || lenis || !shouldUseLenis()) {
          return;
        }

        lenis = new Lenis({
          duration: 0.95,
          easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.9,
        });
        frameId = requestAnimationFrame(raf);
      });
    };

    const syncSmoothScroll = () => {
      if (shouldUseLenis()) {
        startLenis();
      } else {
        stopLenis();
      }
    };

    startLenis();
    prefersReducedMotion.addEventListener('change', syncSmoothScroll);
    coarsePointer.addEventListener('change', syncSmoothScroll);
    compactViewport.addEventListener('change', syncSmoothScroll);

    return () => {
      destroyed = true;
      prefersReducedMotion.removeEventListener('change', syncSmoothScroll);
      coarsePointer.removeEventListener('change', syncSmoothScroll);
      compactViewport.removeEventListener('change', syncSmoothScroll);
      stopLenis();
    };
  }, []);
}

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

export default function App() {
  useSmoothScroll();
  const [theme, setTheme] = useTheme();
  const handleToggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen bg-paper text-zinc-950 transition-colors duration-500 dark:bg-ink dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <a className="skip-link" href="#about">
          Skip to content
        </a>
        <main>
          <Hero
            profile={portfolio.profile}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />
          <SectionShell id="about" eyebrow="About" title="Focused, curious, and building with care.">
            <About profile={portfolio.profile} />
          </SectionShell>
          <SectionShell id="projects" title="Projects">
            <Projects projects={portfolio.projects} />
          </SectionShell>
          <SectionShell id="education" title="Education">
            <Education education={portfolio.education} />
          </SectionShell>
          <SectionShell id="contact" title="Contact">
            <Contact contacts={portfolio.contacts} />
          </SectionShell>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
