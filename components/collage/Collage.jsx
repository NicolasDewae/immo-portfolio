import React from 'react';
import Image from 'next/image';
import './Collage.css';

const imgClass = (img) => `collage__img${img.fit === 'contain' ? ' collage__img--contain' : ''}`;

// When a photo must keep its own proportions (fit: 'contain'), its box is
// sized to that same ratio instead of a fixed frame — otherwise object-fit
// just pads the mismatch with empty bars. `ratio` lets a photo give its
// exact width/height instead of the generic vertical/horizontal guess.
const mediaStyle = (img) => (img.fit === 'contain'
  ? { aspectRatio: img.ratio || (img.orientation === 'vertical' ? '2 / 3' : '3 / 2') }
  : undefined);

const Media = ({ base, overlap }) => (
  <div className="collage__media">
    <div className={`collage__media-base${base.fit === 'contain' ? ' collage__media-base--fit' : ''}`} style={mediaStyle(base)}>
      <Image
        className={imgClass(base)}
        src={base.src}
        alt={base.alt}
        fill
        sizes="(max-width: 800px) 60vw, 40vw"
        quality={90}
        style={base.objectPosition ? { objectPosition: base.objectPosition } : undefined}
      />
    </div>
    <div
      className={`collage__media-overlap${overlap.fit === 'contain' ? ' collage__media-overlap--fit' : ''}`}
      style={{ ...mediaStyle(overlap), ...(overlap.shiftRight ? { right: `-${overlap.shiftRight}` } : undefined) }}
    >
      <Image
        className={imgClass(overlap)}
        src={overlap.src}
        alt={overlap.alt}
        fill
        sizes="(max-width: 800px) 45vw, 40vw"
        quality={90}
        style={overlap.objectPosition ? { objectPosition: overlap.objectPosition } : undefined}
      />
    </div>
  </div>
);

const Collage = ({ variant, label, title, body, cta, onCta, images, dataPanel }) => {
  return (
    <section className={`collage collage--${variant}`} id={dataPanel} data-panel={dataPanel}>
      {variant === 'light' && <Media base={images[0]} overlap={images[1]} />}

      <div className="collage__text">
        <span className="collage__label eyebrow reveal">{label}</span>
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
