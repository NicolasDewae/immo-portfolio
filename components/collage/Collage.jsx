import React from 'react';
import Image from 'next/image';
import './Collage.css';

const Media = ({ base, overlap }) => (
  <div className="collage__media">
    <div className="collage__media-base">
      <Image
        className={`collage__img${base.orientation === 'vertical' ? ' collage__img--contain' : ''}`}
        src={base.src}
        alt={base.alt}
        fill
        sizes="(max-width: 800px) 60vw, 30vw"
      />
    </div>
    <div className="collage__media-overlap">
      <Image
        className={`collage__img${overlap.orientation === 'vertical' ? ' collage__img--contain' : ''}`}
        src={overlap.src}
        alt={overlap.alt}
        fill
        sizes="(max-width: 800px) 45vw, 22vw"
      />
    </div>
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
