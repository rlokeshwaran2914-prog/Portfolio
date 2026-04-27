import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

import html5Logo from "../../assets/HTML.png";
import cssLogo from "../../assets/CSS.png";
import jsLogo from "../../assets/JS.png";
import reactLogo from "../../assets/REACT.png";
import pythonLogo from "../../assets/PYTHON.png";
import flaskLogo from "../../assets/FLASK.png";
import mysqlLogo from "../../assets/MySQL.png";
import mongodbLogo from "../../assets/MONGODB.png";
import gitLogo from "../../assets/GIT.png";

const skills = [
  { name: "HTML", logo: html5Logo, message: "I’m confident in HTML — I can structure clean, semantic pages that form the backbone of any modern web app." },
  { name: "CSS", logo: cssLogo, message: "CSS is my creative playground — I craft responsive layouts, animations, and immersive designs with precision." },
  { name: "JavaScript", logo: jsLogo, message: "JavaScript is where I bring ideas to life — from dynamic interactions to full-fledged applications." },
  { name: "React", logo: reactLogo, message: "React is my go-to for building fast, reusable components and seamless user experiences." },
  { name: "Python", logo: pythonLogo, message: "Python is my versatile tool — whether it’s automation, data handling, or backend logic, I handle it with ease." },
  { name: "Flask", logo: flaskLogo, message: "Flask lets me spin up lightweight APIs and backend services quickly, with clean routing and integration." },
  { name: "MySQL", logo: mysqlLogo, message: "I’m skilled in MySQL — designing efficient schemas and writing optimized queries for reliable data management." },
  { name: "MongoDB", logo: mongodbLogo, message: "MongoDB is my choice for flexible, document-based storage — perfect for modern, scalable applications." },
  { name: "Git", logo: gitLogo, message: "Git keeps my workflow sharp — I manage branches, commits, and collaboration with confidence." }
];

const messageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const Skills = () => {
  return (
    <div id="skills" className="skills-wrapper">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="skills-title">Technical Skills</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-wrapper"
              initial="hidden"
              whileHover="visible"
            >
              <motion.div className="skill-card" whileHover={{ scale: 1.05 }}>
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                />
                <p className="skill-name">{skill.name}</p>
              </motion.div>

              <motion.div
                className="skill-message"
                variants={messageVariants}
                transition={{ duration: 0.4 }}
              >
                <h2>{skill.name}</h2>
                <p>{skill.message}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
