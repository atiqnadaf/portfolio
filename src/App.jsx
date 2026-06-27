import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import { Education } from './components/Education.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { Projects } from './components/Projects.jsx';
import { SectionShell } from './components/SectionShell.jsx';
import { portfolio } from './data/portfolio.js';

gsap.registerPlugin(ScrollTrigger);

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
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
            onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
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
