import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import { uid } from "uid";

export default function Portfolio() {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query PortfolioQuery {
      allContentfulAsset {
        nodes {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
          height
          width
          title
        }
      }
    }
  `);

  return (
    <Layout
      page="portfolio"
      title="Portfolio"
      description="Browse through some of Courtney Delancey's recent work."
    >
      {allContentfulAsset.nodes.map((img) => (
        <div key={uid()} className="wrapper" id={img.title.replace(/\s/g, "")}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.25,
              delay: Math.floor(Math.random() * 3) * 0.15,
            }}
          >
            <GatsbyImage image={getImage(img)} objectFit="contain" />
          </motion.span>
        </div>
      ))}
    </Layout>
  );
}
