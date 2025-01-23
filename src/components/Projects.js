// components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import aiGradeImage from "../assets/ai-grade.png";
import netflixImage from "../assets/netflix.png";
import doctorImage from "../assets/doctor.png";
import pacmanImage from "../assets/pacman.jpg";
import bankImage from "../assets/bank.webp";
import portfolioImage from "../assets/portfolio.png";







function Projects() {
  const projects = [
    {
      title: "AI Grading Assistant ",
      description: "This project helps to grade large number of students at once, saving significant time for professors.",
      image: aiGradeImage,
      technologies: ["React", "TailwindCSS", "Django", "MongoDB"],
      github: "https://github.com/Himaswin/AI-Grading-Assistant",
      live: "https://github.com/Himaswin/AI-Grading-Assistant",
    },

    {
      title: "Pacman 3D ",
      description: "A Pacman 3D game implemented using Java3D features interactive 3D gameplay with smooth animations and collision detection. Blender is used to design characters and the maze, which are imported into the game for a visually rich experience. Java3D handles rendering, scene graph management, and user interactions.",
      image: pacmanImage,
      technologies: ["Java3D", "Blendor",],
      github: "https://github.com/Himaswin/Pacman-game",
      live: "https://github.com/Himaswin/Pacman-game",
    },

    {
      title: "Bank-Management-System ",
      description: "I built Bank Management System using Java Swing, JFrame, and SQL provides a GUI for managing accounts, transactions, and inquiries, with SQL handling data storage via JDBC.",
      image: bankImage,
      technologies: ["Java", "SQL", "MySQL",],
      github: "https://github.com/Himaswin/Bank-management-system",
      live: "https://github.com/Himaswin/Bank-management-system",
    },

    {
      title: "Netflix-clone ",
      description: "A Netflix clone built using React, React Hooks, HTML, CSS, and JavaScript replicates the streaming platform's UI and functionality. It features responsive design, dynamic content rendering, and interactive user experience. React Hooks like useState and useEffect manage state and side effects, while HTML, CSS, and JavaScript handle layout, styling, and interactivity.",
      image: netflixImage,
      technologies: ["React", "Javascript", "CSS", ],
      github: "https://github.com/Himaswin/netflix-clone",
      live: "https://github.com/Himaswin/netflix-clone",
    },

    {
      title: "Doctor-Patient ABMS ",
      description: "An agent-based model built using Python and Matplotlib simulates interactions between doctor and patient agents, where treatment decisions are based on patient severity levels. Matplotlib visualizes agent movements and interactions over time.",
      image: doctorImage,
      technologies: ["Python", "MathPlotlib", "Seaborn",],
      github: "https://github.com/Himaswin/Doctor_Patient_ABMS",
      live: "https://github.com/Himaswin/Doctor_Patient_ABMS",
    },

    {
      title: "Portfolio-Website ",
      description: "A portfolio website built using React and Tailwind CSS offers a modern, responsive, and customizable design to showcase projects and skills. React enables a dynamic component-based structure, while Tailwind CSS provides utility-first styling for fast and consistent UI development.",
      image: portfolioImage,
      technologies: ["React", "TailwindCSS",],
      github: "https://github.com/Himaswin/Myportfolio.git",
      live: "https://github.com/Himaswin/Myportfolio.git",
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-light rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-dark/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-400"
                    >
                      <FiGithub size={24} />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-400"
                    >
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm text-primary-400 bg-primary-400/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
