import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg hover:scale-[1.03] transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-full">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 dark:text-blue-400 hover:text-pink-500 transition-colors duration-300 font-medium"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
