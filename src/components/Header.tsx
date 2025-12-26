import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = 100;
    
    // Track intersection ratios for all sections
    const sectionRatios = new Map<string, number>();

    const updateActiveSection = () => {
      // Handle case when at the very top of the page
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // Find section with highest intersection ratio
      let maxRatio = 0;
      let activeId = 'home';

      sectionRatios.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeId = id;
        }
      });

      // If no section has significant visibility, use scroll position
      if (maxRatio < 0.1) {
        const scrollPosition = window.scrollY + headerHeight;
        
        sections.forEach((section) => {
          const sectionElement = section as HTMLElement;
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;
          const sectionId = section.getAttribute('id') || '';

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeId = sectionId;
          }
        });
      }

      setActiveSection(activeId);
    };

    // Intersection Observer for accurate section detection
    const observerOptions = {
      root: null,
      rootMargin: `-${headerHeight}px 0px -60% 0px`,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          sectionRatios.set(sectionId, entry.intersectionRatio);
        } else {
          sectionRatios.set(sectionId, 0);
        }
      });
      updateActiveSection();
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const sectionId = section.getAttribute('id') || '';
      sectionRatios.set(sectionId, 0);
      observer.observe(section);
    });

    // Initial check
    updateActiveSection();

    // Scroll handler as additional check
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      sectionRatios.clear();
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h2>Thejani Perera</h2>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

