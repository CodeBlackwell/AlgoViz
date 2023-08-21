import React from 'react';
import '../styles/Projects.scss';

const Projects = () => {
    // Placeholder projects data
    const projects = [
        { title: 'Project 1', description: 'Lorem ipsum dolor sit amet.', image: 'project1-placeholder.jpg' },
        { title: 'Project 2', description: 'Quisque nisl eros, pulvinar facilisis justo mollis.', image: 'project2-placeholder.jpg' },
        // Add more projects as needed
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href="#" className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
