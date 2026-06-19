import React, { useEffect, useRef } from 'react';
import './Main.css';
import { globalData, imgPath } from '../../data/i18n';

const Main = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('loaded');
    }
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <span className="hero__label">Photographie immobilière</span>
        <h1 className="hero__title">
          <span className="hero__line">Nicolas</span>
          <span className="hero__line hero__line--italic">De Wagner</span>
        </h1>
        <p className="hero__sub">
          Mise en valeur de vos biens immobiliers
        </p>
      </div>

      <div className="hero__img">
        <img ref={imgRef} src={imgPath.immoChambreSrc} alt={imgPath.immoChambreAlt} />
      </div>

      <div className="hero__img-accent">
        <img src={imgPath.immoPlanteSrc} alt={imgPath.immoPlanteAlt} />
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <div className="hero__footer">
        <span>{globalData.authorName}</span>
        <span>{globalData.currentYear}</span>
      </div>
    </section>
  );
};

export default Main;
