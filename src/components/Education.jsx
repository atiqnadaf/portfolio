import { motion } from 'framer-motion';
import { memo } from 'react';

export const Education = memo(function Education({ education }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {education.map((item, index) => (
        <motion.article
          key={item.level}
          className="glass-panel p-6 sm:p-7"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
        >
          <h3 className="text-3xl font-semibold tracking-normal">{item.level}</h3>
          {item.years && <p className="mt-2 text-muted">{item.years}</p>}
          {item.degree && <p className="mt-6 text-lg font-medium">{item.degree}</p>}
          {item.college && <p className="mt-2 text-muted">{item.college}</p>}
          {item.grade && <p className="mt-6 text-muted">Grade: {item.grade}</p>}
          {item.cgpa && <p className="mt-2 text-muted">CGPA: {item.cgpa}</p>}
          {item.percentage && <p className="mt-8 text-xl font-semibold">Percentage: {item.percentage}</p>}
        </motion.article>
      ))}
    </div>
  );
});
