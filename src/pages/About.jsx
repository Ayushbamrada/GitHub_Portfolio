import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <section
      id="about"
      className="min-h-screen w-full pt-32 px-6 pb-20 bg-white text-gray-800 flex flex-col justify-center items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={
          scrollDirection === 'down'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 60 }
        }
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-lg md:text-xl leading-relaxed max-w-3xl text-center text-gray-700 px-4"
      >
        I’m <span className="font-semibold text-blue-600">Ayush Bamrada</span>, a passionate developer who loves
        building responsive, user-friendly applications. I specialize in{' '}
        <span className="font-medium text-teal-600">JavaScript, React, Node.js, and Express</span>. I’m always
        eager to learn, contribute, and collaborate on impactful projects that make a difference.
      </motion.p>
    </section>
  );
};

export default About;
