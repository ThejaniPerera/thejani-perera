import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Thejani Perera</h1>
        <p className="hero-title">Temporary Demonstrator | Academic Researcher</p>
        <p className="hero-subtitle">
          Faculty of Technology, Department of ICT<br />
          University of Sri Jayawardenepura
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#publications" className="btn btn-secondary">View Research</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

