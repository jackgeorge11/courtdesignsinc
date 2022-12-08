import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Collage from "../components/Collage";
import shuffle from "../tools/shuffle";

export default function Index() {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query IndexQuery {
      allContentfulAsset {
        nodes {
          id
          gatsbyImageData(placeholder: DOMINANT_COLOR)
          height
          width
          title
        }
      }
    }
  `);

  const [media, setMedia] = useState([]);

  useEffect(() => {
    setMedia(shuffle(allContentfulAsset.nodes));
  }, [allContentfulAsset]);

  return (
    <Layout page="home">
      {media.length
        ? [...Array(Math.floor(media.length / 3))].map((n, i) => (
            <Collage i={i} media={media} />
          ))
        : null}
    </Layout>
  );
}
