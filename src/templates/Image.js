import { motion } from "framer-motion";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export const query = graphql`
  query ($id: String!) {
    allContentfulAsset(filter: { id: { eq: $id } }) {
      nodes {
        gatsbyImageData
      }
    }
  }
`;

export default function Image({ data }) {
  const image = getImage(data.allContentfulAsset.nodes[0]);
  return (
    <Layout page="portfolio">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.25,
        }}
      >
        <GatsbyImage
          image={image}
          class="portfolio-image"
          objectFit="contain"
        />
      </motion.div>
    </Layout>
  );
}
