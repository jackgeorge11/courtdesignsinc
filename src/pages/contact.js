import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Contact() {
  const colors = ["blue", "grey", "beige"];

  return (
    <Layout
      page="info"
      title="Info"
      description="Courtney Delancey's services and contact information."
    >
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
        <h1>Courtney Delancey | Court Designs Inc.</h1>
        <h2>
          Lover of found objects and soulful interiors. Visual merchandiser and
          stylist based in Los Angeles. Southern and Central Coast sales
          representative for Codarus and others.
        </h2>
        <h2>
          For inquiries, email me at{" "}
          <a href="mailto:courtdesigns@gmail.com">courtdesigns@gmail.com</a>.
        </h2>
        <div className="colors">
          {colors?.map((b) => (
            <div
              className={`box bg-${b}`}
              style={{ width: Math.floor(Math.random() * 8) + 1 + "rem" }}
            />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
