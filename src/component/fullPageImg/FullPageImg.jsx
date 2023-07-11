import React from "react";
import "./FullPageImg.css";
import { imgPathFull } from "../../data/i18n";

const FullPageImg = () => {
    return (
        <>
            <div className="fullPageImg">
                {
                    imgPathFull.map((img, index) => {
                        return (
                            <div key={index}>
                                <img src={img.src} alt={img.alt} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default FullPageImg;
