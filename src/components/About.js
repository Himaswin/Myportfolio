import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from './himaswin.jpg';  // Ensure image is in the same folder

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Hello! I'm a Computer Science student specializing in Software Engineering. 
                My journey in programming began during my first year of university, and 
                I've been passionate about creating software solutions ever since.
              </p>
              <p>
                I focus on writing clean, efficient code and building user-friendly 
                applications. My coursework and personal projects have given me 
                experience in both frontend and backend development.
              </p>
              <p>
                Currently, I'm looking for internship opportunities where I can 
                contribute to meaningful projects and continue growing as a developer.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={ProfileImage} 
                alt="Himaswin" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-2 border-primary-400 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
