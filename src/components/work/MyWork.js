import React from "react";
import "./MyWork.css";

function MyWork() {

  const projects = [
    {
      title: "Full-stack web application ",
      description: "Built a full-stack web application with JWT-based authentication and secure password hashing. Developed REST APIs using Flask for user authentication, dashboard access, and notes CRUD operation. Designed a dashboard interface with categorized sections for Frontend, Backend, and Database topics. Implemented features for creating, saving, edit, renaming, and deleting notes with MongoDB data persistence. Integrated React frontend with Flask backend APIs for seamless client-server communication",
      stack: "React.js, JavaScript, HTML, CSS, Python, Flask, JWT Authentication, MongoDB Atlas, REST APIs"
    },
    {
      title: "Email Tool",
      description: "Built a web-based email sending system using Python Flask and Gmail SMTP. Developed a frontend form using HTML, CSS, and JavaScript to compose emails. Implemented backend APIs with Flask-Mail to send emails programmatically",
      stack: "HTML, CSS, JavaScript, Python, Flask, Flask-Mail, SMTP"
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
               <div className="description-box">
                <button className="desc-btn">Description</button>
                <span className="description-text">{project.description}</span>
              </div>
              <div className="tech-stack">
                <button className="tech-btn">Tech Stack</button>
                <span className="stack-text">{project.stack}</span>
              </div>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;