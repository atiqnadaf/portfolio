import { motion } from 'framer-motion';

export function About({ profile }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr]">
      <motion.figure
        className="glass-panel overflow-hidden p-3"
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      >
        <img src={profile.image} alt="Atiq Nadaf" className="aspect-[4/5] w-full rounded-[1.35rem] object-cover" />
      </motion.figure>

      <div className="glass-panel flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div className="space-y-5 text-lg leading-8 text-muted sm:text-xl">
          {profile.about.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a className="btn-primary" href={profile.resume} download="ATIQ_RESUME.pdf">
            Download CV
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              className="icon-link"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <img src={social.icon} alt="" className="themed-icon size-5 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
