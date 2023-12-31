import React from "react";
import './Price.css';
import { priceComponent, price, imgPath } from '../../data/i18n';

const Price = () => {

    return (
        <>
            <section>
                <div className="priceLeft">
                    <div>
                        <img src={imgPath.immoCuisineVerteSrc} alt={imgPath.immoCuisineVerteAlt} />
                    </div>
                </div>
                <div className="priceRight">
                    <h2>{priceComponent.title}</h2>
                    <p>{price.priceBase} € TTC</p>
                    <p>{priceComponent.nbPhoto} photos</p>
                    <p>Livrées en {priceComponent.time}</p>
                    <div className="detailPrice">
                        <p>Pour toute photo supplémentaire, le prix sera de {price.extraPhoto} € par photo.</p>
                    </div>
                </div>
                <div className="hiddenImg">
                    <div>
                        <img src={imgPath.immoTeteLitSrc} alt={imgPath.immoTeteLitAlt} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Price;