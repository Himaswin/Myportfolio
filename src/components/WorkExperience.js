// components/WorkExperience.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import glendorLogo from '../assets/glendor.png'; // Path from components to assets folder
import outlierLogo from '../assets/outlier.png'; // Update as needed
import centralTransportLogo from '../assets/ct.png'; // Update as needed

function WorkExperience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Glendor Inc",
      logo: glendorLogo, // Add the logo path here
      position: "AI Intern",
      location: "Draper, Utah, USA",
      period: "Jan 2025 – Present",
      description: [
        "Collected and preprocessed brain MRI data, implementing image anonymization techniques using open-source de-facers (e.g., FSL deface, MRI deface, Pydeface).",
        "Utilized and integrated open-source biomarker extractors (e.g., FSL) to extract relevant brain biomarkers for analysis.",
        "Developed a framework for defacing and biomarker extraction, conducting before-and-after comparisons to evaluate the effectiveness of anonymization methods."
      ],
      technologies: ["Python", "FSL", "MRI Deface", "Pydeface"]
    },
    {
      company: "Outlier",
      logo: outlierLogo, // Add the logo path here
      position: "Generative AI Trainer",
      location: "Remote",
      period: "Jan 2025 – Present",
      description: [
        "Evaluated AI-generated content to improve accuracy, relevance, and clarity by reducing errors in natural language processing.",
        "Ranked and rewrote responses to enhance readability, accuracy, and user engagement.",
        "Monitored AI performance, optimized prompts, and refined outputs to maintain high-quality results."
      ],
      technologies: ["AI", "Natural Language Processing", "LLMs"]
    },
    {
      company: "Central Transport",
      logo: centralTransportLogo, // Add the logo path here
      position: "Data Entry Clerk (Part-time)",
      location: "Windsor, ON, Canada",
      period: "Feb 2022 – Present",
      description: [
        "Accurately entered data into company systems and databases while maintaining productivity targets of billing more than 36 bills per hour.",
        "Strived to achieve an error rate below 3%, emphasizing accuracy and attention to detail in all tasks.",
        "Demonstrated strong typing skills and the ability to work independently to meet deadlines and maintain data integrity."
      ],
      technologies: ["Microsoft Office", "Data Entry", ".Net"]
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions in the software industry.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-64 flex lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide"
          >
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-l-2 lg:border-b-0 
                          transition-all duration-300 ${activeTab === index
                            ? 'border-primary-400 text-primary-400 bg-primary-400/10'
                            : 'border-gray-700 text-gray-400 hover:bg-gray-800/50'
                          }`}
              >
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-6 h-6 mr-2 inline" />
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-dark-light rounded-lg p-6"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-1">
                {experiences[activeTab].position}
              </h3>
              <p className="text-primary-400 mb-4">
                {experiences[activeTab].company}
              </p>
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  <span>{experiences[activeTab].period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin />
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-6">
              {experiences[activeTab].description.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-primary-400 mt-1">▹</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experiences[activeTab].technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-primary-400 bg-primary-400/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
