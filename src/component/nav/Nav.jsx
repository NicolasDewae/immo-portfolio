import React, { useState, useEffect } from 'react';
import './Nav.css';
import { globalData } from '../../data/i18n';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#top" className="nav__logo">
        {globalData.authorName}
      </a>
      <ul className="nav__links">
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#tarifs">Tarifs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
