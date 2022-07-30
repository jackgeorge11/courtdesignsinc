import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function Collage(i, media) {
  console.log(media);
  if (media.length) {
    let images = [media[i * 3], media[i * 3 + 1], media[i * 3 + 2]];
    images = images.sort(
      (a, b) => b.image.height / b.image.width - a.image.height / a.image.width
    );
    return (
      <article className={`${i % 2 === 0 ? "row rev" : "row"}`}>
        <div className="uno">
          <GatsbyImage image={getImage(images[0].image)} />
          <div
            className={`filler bg-${
              ["blue", "beige", "grey"][Math.floor(Math.random() * 3)]
            }`}
          ></div>
        </div>
        <div className="dos">
          <div className="half first">
            <div
              className={`filler bg-${
                ["blue", "beige", "grey"][Math.floor(Math.random() * 3)]
              }`}
            ></div>
            <GatsbyImage image={getImage(images[1].image)} />
          </div>
          <div className="half">
            <GatsbyImage image={getImage(images[2].image)} />
            <div
              className={`filler bg-${
                ["blue", "beige", "grey"][Math.floor(Math.random() * 3)]
              }`}
            ></div>
          </div>
        </div>
      </article>
    );
  }
}
