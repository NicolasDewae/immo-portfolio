'use client';

import React, { useState, useEffect } from 'react';
import './Nav.css';
import { globalData } from '../../data/content';

const Nav = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (panel) => (e) => {
    e.preventDefault();
    onNavigate?.(panel);
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#hero" onClick={go('hero')} className="nav__logo">
        {globalData.authorName}
      </a>
      <ul className="nav__links">
        <li><a href="#about" onClick={go('about')}>Portfolio</a></li>
        <li><a href="#tarifs" onClick={go('tarifs')}>Tarifs</a></li>
        <li><a href="#contact" onClick={go('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
