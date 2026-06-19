import React, { useRef, useEffect } from 'react';
import './FullPageImg.css';
import { imgPathFull } from '../../data/i18n';

const FullPageImg = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const setHeight = () => {
      const extra = track.scrollWidth - window.innerWidth;
      section.style.height = `${extra + window.innerHeight}px`;
    };

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const start = sectionTop;
      const end = sectionTop + section.offsetHeight - window.innerHeight;

      if (scrollY >= start && scrollY <= end) {
        const progress = (scrollY - start) / (end - start);
        const max = track.scrollWidth - window.innerWidth;
        track.style.transform = `translateX(${-progress * max}px)`;
      }
    };

    setHeight();
    window.addEventListener('resize', setHeight, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section" id="portfolio">
      <div className="gallery-sticky">
        <div className="gallery-header">
          <span className="gallery-label reveal">Portfolio</span>
          <h2 className="gallery-title reveal d1">Réalisations</h2>
          <span className="gallery-hint reveal d2">→ scroll</span>
        </div>
        <div ref={trackRef} className="gallery-track">
          {imgPathFull.map((img, i) => (
            <div
              key={i}
              className={`gallery-item gallery-item--${i % 2 === 0 ? 'tall' : 'short'}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-num">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullPageImg;
