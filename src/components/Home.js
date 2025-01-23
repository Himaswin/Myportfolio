// components/Home.jsx
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary-400 mb-4"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-7xl font-bold text-gray-100 mb-4"
        >
          Himaswin Polaboyena.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-6xl font-bold text-gray-400 mb-6"
        >
          Software Engineering Student
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 max-w-xl mb-8"
        >
          A passionate Computer Science student specializing in Software Engineering, 
          focused on creating efficient and innovative solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 border-2 border-primary-400 text-primary-400 
                     rounded hover:bg-primary-400/10 transition-colors duration-300
                     text-center"
          >
            View My Work
          </a>
          
          <a 
            href="/resume.pdf"
            download="Himaswin Resume.pdf"
            className="px-8 py-3 bg-primary-400 text-dark font-medium
                     rounded hover:bg-primary-500 transition-colors duration-300
                     text-center"
          >
            View Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center sm:justify-start space-x-6 mt-8"
        >
          {[
            { icon: <FiGithub size={24} />, url: "https://github.com/yourusername" },
            { icon: <FiLinkedin size={24} />, url: "https://linkedin.com/in/yourusername" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;