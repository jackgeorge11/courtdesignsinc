import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export default function Collage({ i, media, setPreview }) {
  if (media.length) {
    let images = [media[i * 3], media[i * 3 + 1], media[i * 3 + 2]];
    images = images.sort((a, b) => b.height / b.width - a.height / a.width);

    const colorClass = () => {
      const name = `filler bg-${
        ["blue", "beige", "grey"][Math.floor(Math.random() * 3)]
      }`;
      return name;
    };

    return (
      <article className={`${i % 2 === 0 ? "row rev" : "row"}`}>
        <div className="uno">
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
            <Link to={`/portfolio/${images[0].id}`}>
              <GatsbyImage image={getImage(images[0])} />
            </Link>
          </motion.span>
          <motion.div className={colorClass()}></motion.div>
        </div>
        <div className="dos">
          <div className="half first">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                mass: 0.35,
                stiffness: 75,
                duration: 0.25,
                delay: Math.floor(Math.random() * 3) * 0.1,
              }}
              className={colorClass()}
            ></motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                mass: 0.35,
                stiffness: 75,
                duration: 0.25,
                delay: Math.floor(Math.random() * 3) * 0.1,
              }}
            >
              <Link to={`/portfolio/${images[1].id}`}>
                <GatsbyImage image={getImage(images[1])} />
              </Link>
            </motion.span>
          </div>
          <div className="half">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                mass: 0.35,
                stiffness: 75,
                duration: 0.25,
                delay: Math.floor(Math.random() * 3) * 0.1,
              }}
            >
              <Link to={`/portfolio/${images[2].id}`}>
                <GatsbyImage image={getImage(images[2])} />
              </Link>
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                mass: 0.35,
                stiffness: 75,
                duration: 0.25,
                delay: Math.floor(Math.random() * 3) * 0.1,
              }}
              className={colorClass()}
            ></motion.div>
          </div>
        </div>
      </article>
    );
  } else {
    return null;
  }
}
