import React from 'react';
import './Price.css';
import { priceComponent, price, imgPath } from '../../data/i18n';

const Price = () => {
  return (
    <section className="price-section" id="tarifs">
      <div className="price-inner">
        <div className="price-text">
          <span className="price-label reveal">Tarifs</span>
          <h2 className="price-heading reveal d1">{priceComponent.title}</h2>

          <div className="price-stats">
            <div className="price-stat reveal d1">
              <span className="price-stat__num">{price.priceBase}€</span>
              <span className="price-stat__desc">TTC la prestation</span>
            </div>
            <div className="price-stat reveal d2">
              <span className="price-stat__num">{priceComponent.nbPhoto}</span>
              <span className="price-stat__desc">Photos incluses</span>
            </div>
            <div className="price-stat reveal d3">
              <span className="price-stat__num">{priceComponent.time}</span>
              <span className="price-stat__desc">Délai de livraison</span>
            </div>
          </div>

          <p className="price-detail reveal d4">
            Photo supplémentaire : {price.extraPhoto}&nbsp;€&nbsp;/ unité
          </p>
        </div>

        <div className="price-img reveal d2">
          <img src={imgPath.immoCuisineVerteSrc} alt={imgPath.immoCuisineVerteAlt} />
        </div>
      </div>
    </section>
  );
};

export default Price;
