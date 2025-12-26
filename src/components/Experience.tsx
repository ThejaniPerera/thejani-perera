import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'Visiting Lecturer',
      organization: 'Management and Science Institute',
      period: '2025 - Present',
      description: 'Teaching Networking and Data Security, delivering lectures, conducting assessments, and guiding students in practical applications of cybersecurity and networking concepts.'
    },
    {
      title: 'Temporary Demonstrator',
      organization: 'University of Sri Jayawardenepura',
      period: '2024 - Present',
      description: 'Delivered lectures and practical sessions in Creative Design, Introduction to Graphic Design, Digital Marketing, Computer Programming, Mobile Application Development and Database Management.'
    },
    {
      title: 'Temporary Demonstrator',
      organization: 'University of Vocational Technology',
      period: '2023 - 2024',
      description: 'Teaching and demonstration responsibilities in ICT related subjects.'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-organization">{exp.organization}</p>
                <p className="exp-period">{exp.period}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

