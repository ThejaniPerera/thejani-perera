import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'MSc in Computer Science',
      institution: 'University of Sri Jayawardenepura',
      year: '2023 - Present',
      location: 'Reading',
      details: 'Currently pursuing'
    },
    {
      degree: 'Bachelor of Arts (ICT for Development)',
      institution: 'University of Colombo',
      year: '2023',
      location: 'Colombo',
      details: 'Second Class (Upper Division)'
    },
    {
      degree: 'National Vocational Qualification Level 4 in ICTT',
      institution: 'Vocational Training Authority of Sri Lanka',
      year: '2019',
      location: 'Anuradhapura',
      details: ''
    },
    {
      degree: 'Python for Beginners Course',
      institution: 'University of Moratuwa',
      year: '2023',
      location: 'Successfully Completed',
      details: ''
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <div className="edu-meta">
                <span className="edu-year">{edu.year}</span>
                {edu.location && <span className="edu-location"> • {edu.location}</span>}
              </div>
              {edu.details && <p className="edu-details">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

