import './Contact.css';
import resumePDF from '../assets/Thejani Perera Resume (1).pdf';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>No:36, Kanduwata rd, Puraviodya gammanaya, Mihintale, Anuradhapura</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>0705105499</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:nawodathejani1999@gmail.com">
                    nawodathejani1999@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🔗</span>
              <div>
                <h4>Links</h4>
                <div className="contact-links">
                  <a href="https://www.linkedin.com/in/thejani-perera-853068226" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://github.com/ThejaniPerera" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📄</span>
              <div>
                <h4>Resume</h4>
                <div className="contact-links">
                  <a href={resumePDF} download="Thejani_Perera_Resume.pdf" className="cv-download-link">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="references">
            <h3 className="references-title">References</h3>
            <div className="reference-list">
              <div className="reference-item">
                <h4>Dr. Ravimal Bandara</h4>
                <p>Department of Computer Science, University of Sri Jayawardenepura</p>
                <p>Tel: +94 11 275 8919</p>
                <p>Email: <a href="mailto:ravimal@sjp.ac.lk">ravimal@sjp.ac.lk</a></p>
              </div>
              <div className="reference-item">
                <h4>Helawikum Athauda Seneviratne</h4>
                <p>Senior Lecturer, Faculty of ICT, University of Vocational Technology</p>
                <p>Tel: 0112630700</p>
                <p>Email: <a href="mailto:helawikum@uovt.ac.lk">helawikum@uovt.ac.lk</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

