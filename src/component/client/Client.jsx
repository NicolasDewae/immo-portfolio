import React from 'react';
import './Client.css';
import { clientComponent, imgPath } from '../../data/i18n';

const Client = () => {
  return (
    <section className="client-section">
      <div className="client-text">
        <span className="client-label reveal">Confiance</span>
        <h2 className="client-heading reveal d1">{clientComponent.title}</h2>
        <p className="client-body reveal d2">
          Agences immobilières, promoteurs et particuliers —&nbsp;je mets en lumière
          chaque espace pour maximiser l'impact de vos annonces et séduire vos acheteurs.
        </p>
        <a href="#contact" className="client-cta reveal d3">
          Travailler ensemble&nbsp;→
        </a>
      </div>
      <div className="client-img reveal d1">
        <img src={imgPath.immoGrangeSrc} alt={imgPath.immoGrangeAlt} />
      </div>
    </section>
  );
};

export default Client;
