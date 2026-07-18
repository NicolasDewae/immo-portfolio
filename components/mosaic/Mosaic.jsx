'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import './Mosaic.css';
import { imgPath } from '../../data/i18n';

// Every source photo is shot at the same ~3:2 sensor ratio (2:3 when vertical),
// so grid cells are sized to that exact ratio too — no crop, no leftover gap.
const defaultImages = [
  { src: imgPath.immoCuisineBlancheSrc, alt: imgPath.immoCuisineBlancheAlt, orientation: 'horizontal' },
  { src: imgPath.immoSalonBoisSrc, alt: imgPath.immoSalonBoisAlt, orientation: 'horizontal' },
  { src: imgPath.immoCuisineCarrelageVertSrc, alt: imgPath.immoCuisineCarrelageVertAlt, orientation: 'horizontal' },
  { src: imgPath.immoSalleAMangerClassiqueSrc, alt: imgPath.immoSalleAMangerClassiqueAlt, orientation: 'horizontal' },
  { src: imgPath.immoCuisineVerandaSrc, alt: imgPath.immoCuisineVerandaAlt, orientation: 'horizontal' },
  { src: imgPath.immoSalonPianoSrc, alt: imgPath.immoSalonPianoAlt, orientation: 'horizontal' },
  { src: imgPath.immoGrangeExterieurSrc, alt: imgPath.immoGrangeExterieurAlt, orientation: 'horizontal' },
  { src: imgPath.immoTeteLitSrc, alt: imgPath.immoTeteLitAlt, orientation: 'vertical' },
];

const Mosaic = ({ images }) => {
  const mosaicImages = images || defaultImages;
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
          className={`mosaic__item mosaic__item--${img.orientation}`}
          onClick={() => setActiveIndex(i)}
          aria-label={`Agrandir la photo : ${img.alt}`}
        >
          <Image src={img.src} alt={img.alt} fill sizes="(max-width: 800px) 50vw, 600px" />
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
