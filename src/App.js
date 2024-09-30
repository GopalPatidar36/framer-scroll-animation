import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import "./App.css";
import dummy1 from "./image/dummy1.jpeg";
import dummy2 from "./image/dummy2.jpeg";
import dummy3 from "./image/dummy3.jpeg";

const imageGallary = [
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
  { src: dummy1, text: "dummy1Dummy1", title: "dummy1" },
  { src: dummy2, text: "dummy2Dummy2", title: "dummy2" },
  { src: dummy3, text: "dummy3Dummy3", title: "dummy3" },
  { src: dummy1, text: "dummy1Dummy1", title: "dummy1" },
  { src: dummy2, text: "dummy2Dummy2", title: "dummy2" },
  { src: dummy3, text: "dummy3Dummy3", title: "dummy3" },
];

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ src, text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section>
      <div className="container" ref={ref}>
        <img src={src} alt="A London skyscraper" />
        <motion.div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            y,
          }}
        >
          <p style={{ fontSize: "24px", fontWeight: 500, alignItems: "center", justifyContent: "center", alignSelf: "center", display: "flex", margin: 0 }}>
            {`#00${text}`}
          </p>
          <p
            style={{ fontSize: "60px", fontWeight: 700, alignItems: "center", justifyContent: "center", alignSelf: "center", display: "flex", margin: "20px" }}
          >
            {`#00${text}`}
          </p>
          <button className="arrow-button"> arrow </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      {imageGallary.map((image, index) => (
        <Image src={image.src} text={image.text} />
      ))}
    </>
  );
}
