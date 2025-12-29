'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', logo: '⚛️' },
  { name: 'Next.js', logo: '▲' },
  { name: 'TypeScript', logo: '🔷' },
  { name: 'Node.js', logo: '🟢' },
  { name: 'Python', logo: '🐍' },
  { name: 'JavaScript', logo: '🟨' },
  { name: 'Tailwind CSS', logo: '🎨' },
  { name: 'MongoDB', logo: '🍃' },
  { name: 'PostgreSQL', logo: '🐘' },
  { name: 'Git', logo: '📚' },
  { name: 'Docker', logo: '🐳' },
  { name: 'AWS', logo: '☁️' },
];

export default function TechStack() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -100 * technologies.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-3xl mb-2">{tech.logo}</span>
                <span className="text-sm text-gray-300 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
