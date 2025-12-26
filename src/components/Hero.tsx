import './Hero.css';
import profileImage from '../assets/180250317.jpeg';
import resumePDF from '../assets/Thejani Perera Resume (1).pdf';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={profileImage} alt="Thejani Perera" className="hero-image" />
        </div>
        <h1 className="hero-name">Thejani Perera</h1>
        <p className="hero-title">Temporary Demonstrator | Academic Researcher</p>
        <p className="hero-subtitle">
          Faculty of Technology, Department of ICT<br />
          University of Sri Jayawardenepura
        </p>
        <div className="hero-buttons">
          <a href={resumePDF} download="Thejani_Perera_Resume.pdf" className="btn btn-primary">Download CV</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          <a href="#publications" className="btn btn-secondary">View Research</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

