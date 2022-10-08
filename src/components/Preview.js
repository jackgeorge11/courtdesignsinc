import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

export default function Preview({ image, setPreview }) {
  return (
    <div className={image ? "preview-modal is--active" : "preview-modal"}>
      <div className="wrapper">
        <div className="close" onClick={() => setPreview(undefined)}>
          <button>
            <h3>Close</h3>
          </button>
        </div>
        <GatsbyImage objectFit="contain" image={getImage(image)} />
      </div>
    </div>
  );
}
