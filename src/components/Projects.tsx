'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Website Pemesanan Mie Ayam',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    image: '/placeholder-project1.jpg',
    demoUrl: 'https://tangerangpeople.github.io/mieayam/',
    githubUrl: 'https://github.com/TangerangPeople'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application built with Next.js and PostgreSQL. Includes real-time updates and team collaboration features.',
    image: '/lubisphoto.jpg',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard using React and external APIs. Displays current weather and forecasts with beautiful visualizations.',
    image: '/placeholder-project3.jpg',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Framer Motion. Showcases projects with smooth animations and responsive design.',
    image: '/porto.png',
    demoUrl: 'https://tangerangpeople.github.io/portofolio/',
    githubUrl: 'https://github.com/TangerangPeople'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
