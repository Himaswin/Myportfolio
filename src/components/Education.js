import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  padding: 2rem;
  margin-top: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const EducationCard = styled(motion.div)`
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid #334155;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
    border-color: #4ade80;
  }
`;

const Institution = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #4ade80;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Degree = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #94a3b8;
`;

const Period = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #4ade80;
    border-radius: 50%;
  }
`;

const Details = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #334155;
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const CourseItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  color: #cbd5e1;
  transition: color 0.3s ease;

  &:before {
    content: "▹";
    color: #4ade80;
    position: absolute;
    left: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #4ade80;

    &:before {
      transform: translateX(5px);
    }
  }
`;

const GPA = styled.div`
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 6px;
  display: inline-block;
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.2);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: #4ade80;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #4ade80, transparent);
  }
`;

function Education() {
  const educationData = [
    {
      institution: "University of Windsor",
      degree: "Bachelor of Computer Science",
      specialization: "Software Engineering",
      period: "September 2021 - April 2025",
      gpa: "3.0/4.0",
      achievements: [
        "Dean's List: Multiple Semesters",
        "Contributed to AI Research Project",
      ],
    },
    {
      institution: "Narayana Junior College",
      degree: "Mathematics and Science",
      period: "2018 - 2020",
      gpa: "93%",
      achievements: [
        "School Topper",
        "Best Project in Science Fair",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030712]">
      <EducationContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </SectionTitle>
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Institution>{edu.institution}</Institution>
            <Degree>{edu.degree}</Degree>
            {edu.specialization && (
              <p className="text-gray-400 mb-2">
                <strong className="text-gray-300">Specialization:</strong> {edu.specialization}
              </p>
            )}
            <Period>{edu.period}</Period>
            {edu.gpa && <GPA>GPA: {edu.gpa}</GPA>}
            <Details>
              {edu.achievements && (
                <>
                  <h4 className="text-lg font-semibold mb-4 text-gray-300">
                    Achievements
                  </h4>
                  <CourseList>
                    {edu.achievements.map((achievement, idx) => (
                      <CourseItem key={idx}>{achievement}</CourseItem>
                    ))}
                  </CourseList>
                </>
              )}
            </Details>
          </EducationCard>
        ))}
      </EducationContainer>
    </section>
  );
}

export default Education;