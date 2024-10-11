import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import "./Sticky.css";
import imagegreen from "./image/sticky/imagegreen.svg";
import onion from "./image/sticky/onion.svg";
import tables from "./image/sticky/tables.svg";
import pringles_mono from "./image/sticky/pringles_mono.png";
import cloud from "./image/sticky/cloud.svg";
import chips1 from "./image/sticky/chips1.svg";
import pringles_green from "./image/sticky/pringles_green.svg";
import pringles_yellow from "./image/sticky/pringles_yellow.svg";
import pringles_blue from "./image/sticky/pringles_blue.svg";

const imageGallery = [];

function useParallax(value, distance) {
  const y = useTransform(value, [0, 1], [-distance, distance]);
  const opacity = useTransform(value, [0.1, 0.5, 0.9], [0, 1, 0]);
  const backgroundPositionY = useTransform(value, [0, 0.5, 1], ["0%", "50%", "100%"]);
  return { y, opacity, backgroundPositionY };
}

function Image({ src, text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const { y, opacity, backgroundPositionY } = useParallax(scrollYProgress, 200); // Use parallax with fade effect

  return (
    <motion.div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundAttachment: "fixed", // Create parallax effect
        backgroundPositionY: backgroundPositionY, // Animate the background Y position
      }}
      className="container"
      ref={ref}
    >
      <motion.div
        style={{
          position: "relative",
          color: "white",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          y: y, // Apply parallax Y movement
          opacity: opacity, // Apply opacity control for fade-in/out
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transitions
      >
        <p style={{ fontSize: "24px", fontWeight: 500, margin: 0 }}>{`#00${text}`}</p>
        <p
          style={{
            fontSize: "60px",
            fontWeight: 700,
            margin: "20px",
          }}
        >
          {`#00${text}`}
        </p>
        <button className="arrow-button"> arrow </button>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="sticky-container">
      <img src={cloud} className="bg-image cloud" />

      <img src={imagegreen} className="bg-image imagegreen" />

      <div className="scroll-sync">
        <img src={tables} className="tables" />
        <div className="vegetables">
          <img src={onion} />
          <img src={chips1} />
        </div>

        <div className="cold_drink">
          <img src={pringles_blue} />
          <img src={pringles_green} />
          <img src={pringles_yellow} />
        </div>
      </div>

      {/* ****************** */}
      <div className="next-container second">
        <img src={pringles_blue} />
      </div>

      <div className="next-container third">
        <img src={pringles_green} />
      </div>
      <div className="next-container forth">
        <img src={pringles_yellow} />
      </div>
    </div>
  );
}
