import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Collage from "../tools/Collage";

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

  const [media, setMedia] = useState([]);

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

  console.log(allContentfulHomePageContent.nodes);

  useEffect(() => {
    setMedia(shuffle(allContentfulHomePageContent.nodes));
  }, [allContentfulHomePageContent]);

  return (
    <Layout page="home">
      {media.length &&
        [...Array(Math.floor(media.length / 3))].map((n, i) =>
          Collage(i, media)
        )}
    </Layout>
  );
}
