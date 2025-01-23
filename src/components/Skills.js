// components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiTool 
} from 'react-icons/fi';

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <FiCode />,
      items: ["JavaScript", "Python", "Java", "C++", "TypeScript"]
    },
    {
      category: "Web Technologies",
      icon: <FiServer />,
      items: ["React", "Node.js", "Express", "HTML5", "CSS3"]
    },
    {
      category: "Databases",
      icon: <FiDatabase />,
      items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      category: "Tools & Platforms",
      icon: <FiTool />,
      items: ["Git", "Docker", "AWS", "Linux", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark p-6 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4 text-primary-400">
                {category.icon}
                <h3 className="text-lg font-semibold ml-2 text-gray-100">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="text-gray-400 flex items-center"
                  >
                    <span className="text-primary-400 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;