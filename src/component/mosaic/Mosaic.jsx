import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './Mosaic.css';
import { imgPath, imgPathFull } from '../../data/i18n';

const mosaicImages = [
  imgPathFull[3],
  { src: imgPath.immoTeteLitSrc, alt: imgPath.immoTeteLitAlt },
  { src: imgPath.immoSalonBoisSrc, alt: imgPath.immoSalonBoisAlt },
  imgPathFull[4],
  imgPathFull[5],
  imgPathFull[6],
  imgPathFull[7],
  imgPathFull[8],
];

const Mosaic = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i - 1 + mosaicImages.length) % mosaicImages.length);
  const next = () => setActiveIndex((i) => (i + 1) % mosaicImages.length);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeIndex]);

  return (
    <section className="mosaic">
      {mosaicImages.map((img, i) => (
        <button
          key={img.src}
          type="button"
          className="mosaic__item"
          onClick={() => setActiveIndex(i)}
          aria-label={`Agrandir la photo : ${img.alt}`}
        >
          <img src={img.src} alt={img.alt} loading="lazy" />
        </button>
      ))}

      {activeIndex !== null && createPortal(
        <div className="lightbox" onClick={close}>
          <button type="button" className="lightbox__close" onClick={close} aria-label="Fermer">
            ×
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Photo précédente"
          >
            ‹
          </button>
          <img
            className="lightbox__img"
            src={mosaicImages[activeIndex].src}
            alt={mosaicImages[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Photo suivante"
          >
            ›
          </button>
          <span className="lightbox__count">{activeIndex + 1} / {mosaicImages.length}</span>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Mosaic;
