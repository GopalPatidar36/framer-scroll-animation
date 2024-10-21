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
import yellow_chipes from "./image/sticky/yellow_chipes.svg";

export default function App() {
  return (
    <div className="sticky-container">
      <img src={cloud} className="bg-image cloud" />

      <div style={{ position: "absolute", top: "0vh", left: 0, right: 0, height: "400vh", width: "100%" }}>
        {/* first component of 100vh */}
        <div style={{ position: "sticky", top: "-10vh", display: "flex", zIndex: 5, width: "100%", height: "100vh", margin: "auto", justifyContent: "center" }}>
          {/* Image group at the bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "end",
              zIndex: 4,
            }}
          >
            <img className="pringles_blue" src={pringles_blue} />
            <img className="pringles_green" src={pringles_green} />
            <img className="pringles_yellow" src={pringles_yellow} />
          </div>

          {/* Image green sticks at 20vh on scroll */}
          <img src={imagegreen} style={{ position: "sticky", top: "20vh", zIndex: 1, width: "100%", margin: "auto" }} />

          {/* Table image at the bottom */}
          <img style={{ position: "absolute", bottom: -25, zIndex: 3 }} src={tables} />

          {/* Onion and chips group at the bottom */}
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "row",
              zIndex: 5,
              justifyContent: "center",
            }}
          >
            <img src={onion} />
            <img src={chips1} />
          </div>
        </div>

        {/* background of 300vh */}

        <div style={{ zIndex: 900, position: "absolute", top: "100vh", left: 0, right: 0 }} className="next-container second">
          <img style={{ maxHeight: "100vh" }} src={yellow_chipes} />
        </div>

        <div style={{ zIndex: 902, position: "absolute", top: "200vh", left: 0, right: 0 }} className="next-container third">
          <img style={{ maxHeight: "100vh" }} src={yellow_chipes} />
        </div>

        <div style={{ zIndex: 904, position: "absolute", top: "300vh", left: 0, right: 0 }} className="next-container forth">
          <img style={{ maxHeight: "100vh" }} src={yellow_chipes} />
        </div>

        {/* component  of 300vh */}

        <div style={{ height: "100vh", zIndex: 901, position: "sticky", top: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h3 style={{ margin: "auto", textAlign: "center", position: "absolute", fontWeight: 700, fontSize: "113px", zIndex: -100, color: "#60B85A" }}>
            Sour Cream & Onion
          </h3>
          <img style={{ margin: "auto", height: "80vh", zIndex: 2 }} src={pringles_blue} />
        </div>

        <div style={{ height: "100vh", zIndex: 903, position: "sticky", top: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h3 style={{ margin: "auto", textAlign: "center", position: "absolute", fontWeight: 700, fontSize: "113px", zIndex: 1, color: "#2DBFE1" }}>
            Cheddar CREAM & ONION
          </h3>
          <img style={{ margin: "auto", height: "80vh", zIndex: 2 }} src={pringles_green} />
        </div>

        <div
          style={{ height: "100vh", width: "100%", zIndex: 905, position: "sticky", top: "0", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <h3 style={{ margin: "auto", textAlign: "center", position: "absolute", fontWeight: 700, fontSize: "113px", zIndex: 1, color: "#2DBFE1" }}>
            sOUR CREAM & ONION
          </h3>
          <img style={{ margin: "auto", height: "80vh", zIndex: 2 }} src={pringles_yellow} />
        </div>
      </div>
      {/* ******************* */}
    </div>
  );
}
