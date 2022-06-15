import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function Index() {
  const { allContentfulHomePageContent } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulHomePageContent {
        nodes {
          image {
            gatsbyImageData
            width
            height
          }
          slug
        }
      }
    }
  `);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  let [content, setContent] = useState([]);

  const collage = (i) => {
    if (content.length) {
      let images = [content[i * 3], content[i * 3 + 1], content[i * 3 + 2]];
      console.log(images);
      images = images.sort(
        (a, b) =>
          b.image.height / b.image.width - a.image.height / a.image.width
      );
      console.log(images);
      return (
        <article className={i % 2 == 0 ? "row" : "row rev"}>
          <div className="uno">
            <GatsbyImage image={getImage(images[0].image)} />
          </div>
          <div className="dos">
            <div className="half first">
              <div
                className={`filler bg-${
                  ["red", "green", "teal"][Math.floor(Math.random() * 3)]
                }`}
              ></div>
              <GatsbyImage image={getImage(images[1].image)} />
            </div>
            <div className="half">
              <GatsbyImage image={getImage(images[2].image)} />
              <div
                className={`filler bg-${
                  ["red", "green", "teal"][Math.floor(Math.random() * 3)]
                }`}
              ></div>
            </div>
          </div>
        </article>
      );
    }
  };

  useEffect(() => {
    setContent(shuffle(allContentfulHomePageContent.nodes));
  }, [allContentfulHomePageContent]);

  return (
    <Layout page="home">
      {content.length &&
        [...Array(Math.floor(content.length / 3))].map((n, i) => collage(i))}
    </Layout>
  );
}
