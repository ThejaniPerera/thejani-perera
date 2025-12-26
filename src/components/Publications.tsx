import './Publications.css';

const Publications = () => {
  const publications = [
    {
      year: '2025',
      type: 'Full Paper',
      title: 'A CNN-Based Mobile Application for the Recognition of Ancient Sinhala Inscriptions in Sri Lanka',
      conference: 'IRS 2025',
      authors: 'DANT Perera, T.K. Malwatta, LSMND senanayaka'
    },
    {
      year: '2024',
      type: 'Full Paper',
      title: 'An Exploratory Examination of ATM Security Utilizing Fingerprint Biometric Identification',
      conference: '8th International Research Conference of Uva Wellassa University, IRCUWU2024',
      authors: 'DANT Perera, P.H.S.S. Wijayarathna'
    },
    {
      year: '2024',
      type: 'Full Paper',
      title: 'Development and Evaluation of an Automated Student Attendance Tracking System Using Facial Recognition Technology',
      conference: 'International Research Symposium - 2024 (IRS 2024-UOVT)',
      authors: 'DANT Perera, T. K. Malwatta, L. S. M. N. D. Senanayaka'
    }
  ];

  return (
    <section id="publications" className="publications section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card">
              <div className="pub-header">
                <span className="pub-year">{pub.year}</span>
                <span className="pub-type">{pub.type}</span>
              </div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-conference">{pub.conference}</p>
              <p className="pub-authors"><strong>Authors:</strong> {pub.authors}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

