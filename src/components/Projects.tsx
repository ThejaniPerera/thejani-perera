import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Hostel Management Mobile App',
      description: 'Developed a mobile application for managing hostel operations, including room allocation, rent tracking, and maintenance requests.',
      technologies: ['Android Studio', 'Java', 'Firebase']
    },
    {
      title: 'Sri Lanka Travel Guide App',
      description: 'Designed a travel guide application using Adobe XD for user interface and user experience.',
      technologies: ['Adobe XD']
    },
    {
      title: 'Bakery Business Website',
      description: 'Designed and created a website to promote bakery items business using WordPress.',
      technologies: ['WordPress']
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                <strong>Technologies:</strong>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

