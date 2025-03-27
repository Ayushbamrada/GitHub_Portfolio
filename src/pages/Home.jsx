import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Tailwind CSS.',
    link: 'https://github.com/ayushbamrada/portfolio',
  },
  {
    title: 'Node.js API',
    description: 'A RESTful API built using Express.js for user management.',
    link: 'https://github.com/ayushbamrada/api-project',
  },
];

const Home = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: 60, transition: { duration: 0.4 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <main id="home">
      <HeroSection />

      <section id="projects" className="px-6 py-16 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
