import React from "react";
import "./Main.css";
import { globalData, mainComponent, imgPath } from "../../data/i18n";

const Main = () => {
    return (
        <>
            <h1>{globalData.authorName} - {mainComponent.text.title.immo}</h1>
            <section>
                <div className="mainLeft">
                    <div>
                        <img src={imgPath.immoPlanteSrc} alt={imgPath.immoPlanteAlt} />
                    </div>
                    <div className="arrow">
                        <img src="/assets/icons/arrow.png" alt="arrow" />
                    </div>
                </div>
                <div className="mainRight">
                    <img src={imgPath.immoChambreSrc} alt={imgPath.immoChambreAlt} />
                </div>
            </section>
        </>
    );
}

export default Main;