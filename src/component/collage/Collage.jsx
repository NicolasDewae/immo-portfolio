import React from 'react';
import './Collage.css';

const Media = ({ base, overlap }) => (
  <div className="collage__media">
    <img className="collage__img collage__img--base" src={base.src} alt={base.alt} loading="lazy" />
    <img className="collage__img collage__img--overlap" src={overlap.src} alt={overlap.alt} loading="lazy" />
  </div>
);

const Collage = ({ variant, label, title, body, cta, onCta, images, dataPanel }) => {
  return (
    <section className={`collage collage--${variant}`} data-panel={dataPanel}>
      {variant === 'light' && <Media base={images[0]} overlap={images[1]} />}

      <div className="collage__text">
        <span className="collage__label reveal">{label}</span>
        <h2 className="collage__title reveal d1">{title}</h2>
        <p className="collage__body reveal d2">{body}</p>
        {cta && (
          <a
            href="#contact"
            onClick={onCta}
            className={`btn-pill reveal d3${variant === 'dark' ? ' btn-pill--invert' : ''}`}
          >
            {cta}&nbsp;→
          </a>
        )}
      </div>

      {variant === 'dark' && <Media base={images[0]} overlap={images[1]} />}
    </section>
  );
};

export default Collage;
