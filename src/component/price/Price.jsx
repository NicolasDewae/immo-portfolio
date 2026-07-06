import React from 'react';
import './Price.css';
import { priceComponent, price, imgPath } from '../../data/i18n';

const Price = () => {
  return (
    <section className="price-section" id="tarifs" data-panel="tarifs">
      <div className="price-inner">
        <div className="price-text">
          <span className="price-label reveal">Tarifs</span>
          <h2 className="price-heading reveal d1">{priceComponent.title}</h2>

          <div className="price-stats">
            <div className="price-stat reveal d1">
              <span className="price-stat__num">
                {price.priceBase}€<span className="price-asterisk">*</span>
              </span>
              <span className="price-stat__desc">TTC la prestation</span>
            </div>
            <div className="price-stat reveal d2">
              <span className="price-stat__num">
                {priceComponent.nbPhoto}<span className="price-asterisk">*</span>
              </span>
              <span className="price-stat__desc">Photos incluses</span>
            </div>
            <div className="price-stat reveal d3">
              <span className="price-stat__num">{priceComponent.time}</span>
              <span className="price-stat__desc">Délai de livraison</span>
            </div>
          </div>

          <div className="price-notes reveal d4">
            <div className="price-details">
              <p className="price-detail">{priceComponent.travel}</p>
              <p className="price-detail">
                Photo supplémentaire : {price.extraPhoto}&nbsp;€&nbsp;/ unité
              </p>
            </div>
            <div className="price-footnotes">
              <p className="price-footnote">
                <span className="price-asterisk">*</span>&nbsp;{priceComponent.studioNote}
              </p>
              <p className="price-footnote">{priceComponent.kmNote}</p>
            </div>
          </div>
        </div>

        <div className="price-img reveal d2">
          <img src={imgPath.immoCuisineVerteSrc} alt={imgPath.immoCuisineVerteAlt} />
        </div>
      </div>
    </section>
  );
};

export default Price;
