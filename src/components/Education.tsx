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

  const certificationsData = [
    {
      name: 'AWS Academy Graduate - Cloud Architecting',
      issuer: 'AWS Academy',
      year: '',
      url: 'https://www.credly.com/badges/c69b3f16-2749-4ca5-ada5-30bcc9379761/public_url',
      badgeId: 'c69b3f16-2749-4ca5-ada5-30bcc9379761'
    },
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      year: '',
      url: 'https://www.credly.com/badges/e1cb2181-c729-4008-9657-f732fe3ff5f3/public_url',
      badgeId: 'e1cb2181-c729-4008-9657-f732fe3ff5f3'
    },
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Operations',
      issuer: 'AWS Academy',
      year: '',
      url: 'https://www.credly.com/badges/7ce59453-7f4d-4e37-a08b-1c605b4f6e12/public_url',
      badgeId: '7ce59453-7f4d-4e37-a08b-1c605b4f6e12'
    },
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Security',
      issuer: 'AWS Academy',
      year: '',
      url: 'https://www.credly.com/badges/388c3f7a-6a2a-4482-9555-27c562f5b7d4/public_url',
      badgeId: '388c3f7a-6a2a-4482-9555-27c562f5b7d4'
    },
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Developing',
      issuer: 'AWS Academy',
      year: '',
      url: 'https://www.credly.com/badges/a8b0a13c-cfff-4072-b530-4d101e277d08/public_url',
      badgeId: 'a8b0a13c-cfff-4072-b530-4d101e277d08'
    },
    {
      name: 'AWS Academy Graduate - Microservices and CI/CD Pipeline Builder',
      issuer: 'AWS Academy',
      year: '',
      url: 'https://www.credly.com/badges/8b080c12-b9aa-475c-95fc-cbc92e43cd0d/public_url',
      badgeId: '8b080c12-b9aa-475c-95fc-cbc92e43cd0d'
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

        <div className="certifications-section">
          <h2 className="section-title">Certifications</h2>
          <div className="education-grid">
            {certificationsData.map((cert, index) => (
              <div key={index} className="education-card certification-card">
                <h3 className="edu-degree">{cert.name}</h3>
                <p className="edu-institution">{cert.issuer}</p>
                {cert.year && (
                  <div className="edu-meta">
                    <span className="edu-year">{cert.year}</span>
                  </div>
                )}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Credential on Credly →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

