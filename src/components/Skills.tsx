import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        'JavaScript', 'HTML', 'CSS', 'Python', 'Java', 
        'MySQL', 'C', 'Android Studio', 'Machine Learning', 
        'Image Processing'
      ]
    },
    {
      title: 'Design Tools',
      skills: [
        'WordPress', 'Adobe XD', 'Adobe Photoshop', 
        'Adobe Illustrator'
      ]
    },
    {
      title: 'Languages',
      skills: ['Sinhala', 'English', 'Tamil']
    },
    {
      title: 'Soft Skills',
      skills: ['Creativity', 'Time Management', 'Problem-Solving']
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

