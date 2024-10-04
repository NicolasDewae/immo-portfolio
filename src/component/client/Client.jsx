import React from "react";
import './Client.css';
import { clientComponent, imgPath } from '../../data/i18n';

const Client = () => {

    return (
        <>
            <section>
                <div className="clientLeft">
                    <div>
                        <img src={imgPath.immoCuisineVerteSrc} alt={imgPath.immoCuisineVerteAlt} />
                    </div>
                </div>
                <div className="clientRight">
                    <h2>{clientComponent.title}</h2>
                <div className="detailPrice">
                    <p>
                        TODO : Ajouter les logos des entreprises avec lesquels j'ai déjà travaillé et les rendre cliquable vers les articles en question 
                    </p>
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

export default Client;