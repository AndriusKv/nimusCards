import React from "react";

export default function Attachment({ file, type }) {
    const src = typeof file === "string" ? file : URL.createObjectURL(file);

    if (type === "image") {
        return <img src={src} alt="" className="side-image" />;
    }
    else if (type === "audio") {
        return <audio src={src} className="side-audio" controls></audio>;
    }
    return null;
}