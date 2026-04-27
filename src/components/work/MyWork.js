import React from "react";
import "./MyWork.css";

function MyWork() {
  const projects = [
    {
      title: "Full-stack web application",
      description:
        "Built a full-stack web application with JWT-based authentication and secure password hashing. Developed REST APIs using Flask for user authentication, dashboard access, and notes CRUD operations. Designed a dashboard interface with categorized sections. Implemented features like creating, editing, renaming, and deleting notes with MongoDB persistence. Integrated React frontend with Flask backend APIs.",
      stack:
        "React.js, JavaScript, HTML, CSS, Python, Flask, JWT, MongoDB Atlas, REST APIs",
    },
    {
      title: "Email Tool",
      description:
        "Built a web-based email system using Python Flask and Gmail SMTP. Developed a frontend form to compose emails and implemented backend APIs using Flask-Mail to send emails programmatically.",
      stack: "HTML, CSS, JavaScript, Python, Flask, Flask-Mail, SMTP",
    },
  ];

  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>

            <div className="project-buttons">

              {/* DESCRIPTION */}
              <div className="description-box">
                <button className="desc-btn">📄 Description</button>
                <div className="description-text">
                  {project.description}
                </div>
              </div>

              {/* TECH STACK */}
              <div className="tech-stack">
                <button className="tech-btn">⚙ Tech Stack</button>
                <div className="stack-text">
                  {project.stack}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;