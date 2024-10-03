import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import "./App.css";
import dummy1 from "./image/dummy1.jpeg";
import dummy2 from "./image/dummy2.jpeg";
import dummy3 from "./image/dummy3.jpeg";

const imageGallery = [
  { src: dummy1, text: "Nirvani", title: "dummy1" },
  { src: dummy2, text: "Ishika", title: "dummy2" },
  { src: dummy3, text: "Avya", title: "dummy3" },
  { src: dummy1, text: "Nitya", title: "dummy1" },
  { src: dummy2, text: "dummy2Dummy2", title: "dummy2" },
  { src: dummy3, text: "dummy3Dummy3", title: "dummy3" },
  { src: dummy1, text: "dummy1Dummy1", title: "dummy1" },
  { src: dummy2, text: "dummy2Dummy2", title: "dummy2" },
  { src: dummy3, text: "dummy3Dummy3", title: "dummy3" },
  { src: dummy1, text: "dummy1Dummy1", title: "dummy1" },
  { src: dummy2, text: "dummy2Dummy2", title: "dummy2" },
  { src: dummy3, text: "dummy3Dummy3", title: "dummy3" },
  { src: dummy1, text: "dummy1Dummy1", title: "dummy1" },
  { src: dummy2, text: "dummy2Dummy2", title: "dummy2" },
  { src: dummy3, text: "dummy3Dummy3", title: "dummy3" },
  { src: dummy1, text: "dummy1Dummy1", title: "dummy1" },
  { src: dummy2, text: "dummy2Dummy2", title: "dummy2" },
  { src: dummy3, text: "dummy3Dummy3", title: "dummy3" },
];

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
    <div className="App">
      <div className="image-gallery-container">
        <div className="left-border"></div>
        <div className="scrollable-gallery">
          {imageGallery.map((image, index) => (
            <Image key={index} src={image.src} text={image.text} />
          ))}
        </div>
        <div className="right-border"></div>
      </div>
    </div>
  );
}
