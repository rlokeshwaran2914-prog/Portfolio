import React from "react";
import "./MyWork.css";

function MyWork() {
  const projects = [
    {
      title: "Full-stack web application",
      description:
        "Built a full-stack web application with JWT authentication, REST APIs, and MongoDB. Features include notes CRUD operations, secure login, and dashboard UI.",
      stack:
        "React.js, JavaScript, HTML, CSS, Python, Flask, JWT, MongoDB Atlas",
    },
    {
      title: "Email Tool",
      description:
        "Developed a web-based email system using Flask and Gmail SMTP with a frontend form to send emails dynamically.",
      stack:
        "HTML, CSS, JavaScript, Python, Flask, Flask-Mail, SMTP",
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

              {/* Description */}
              <div className="description-box">
                <button className="desc-btn">📄 Description</button>
                <span className="description-text">
                  {project.description}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="tech-stack">
                <button className="tech-btn">⚙ Tech Stack</button>
                <span className="stack-text">
                  {project.stack}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;