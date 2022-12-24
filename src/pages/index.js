import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Collage from "../components/Collage";
import shuffle from "../tools/shuffle";

export default function Index() {
  const { allContentfulHomePageContent } = useStaticQuery(graphql`
    query IndexQuery {
      allContentfulHomePageContent {
        nodes {
          media {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
            id
            width
            height
          }
        }
      }
    }
  `);

  const media = allContentfulHomePageContent.nodes[0].media;

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
