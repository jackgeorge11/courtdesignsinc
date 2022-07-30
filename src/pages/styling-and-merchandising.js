import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Collage from "../tools/Collage";

export default function StylingAndMerchandising() {
  const { allContentfulPortfolioPage } = useStaticQuery(graphql`
    query {
      allContentfulPortfolioPage {
        nodes {
          slug
          text {
            raw
          }
          media {
            images {
              gatsbyImageData
              width
              height
            }
            projectTitle
          }
        }
      }
    }
  `);

  const content = allContentfulPortfolioPage.nodes;
  const media = content[0]?.media?.[0].images;

  console.log(content);

  return (
    <Layout page="styling-and-merchandising">
      {/* {media?.length
        ? [...Array(Math.floor(media.length / 3))].map((n, i) =>
            Collage(i, media)
          )
        : null} */}
    </Layout>
  );
}
