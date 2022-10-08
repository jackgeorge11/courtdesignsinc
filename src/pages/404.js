import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <Layout title="404" page="not-found" noindex={true}>
      <motion.h2
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
        Sorry but this page doesn't exist.
      </motion.h2>
    </Layout>
  );
}
