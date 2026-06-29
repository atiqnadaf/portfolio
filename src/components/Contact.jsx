import { motion } from 'framer-motion';
import { memo, useCallback } from 'react';

export const Contact = memo(function Contact({ contacts }) {
  const handleClick = useCallback((event, contact) => {
    if (contact.href.startsWith('mailto:')) {
      event.preventDefault();
      window.location.href = contact.href;
    }
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {contacts.map((contact, index) => (
        <motion.a
          key={contact.label}
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
          onClick={(event) => handleClick(event, contact)}
          className="contact-card focus-ring"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.018 }}
          whileTap={{ scale: 0.985 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="contact-icon">
            <img src={contact.icon} alt="" loading="lazy" decoding="async" className="themed-icon size-8 object-contain" />
          </span>
          <span className="text-lg font-semibold">{contact.label}</span>
          {contact.value && <span className="mt-2 break-words text-sm leading-5 text-muted">{contact.value}</span>}
          <span className="mt-auto text-sm font-medium text-accent">Open</span>
        </motion.a>
      ))}
    </div>
  );
});
