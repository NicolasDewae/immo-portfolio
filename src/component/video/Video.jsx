import React from "react";
import "./Video.css";
import { videoPath } from "../../data/i18n";

const Video = () => {
    return (
        <>
            <iframe src={videoPath.weddingVideoSrc} frameborder="0"></iframe>
        </>
    );
}

export default Video;