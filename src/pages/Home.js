import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
// import Card from "../components/Card";

const Home = () => {
  const [index, setIndex] = useState(0);

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "#ff008c",
    "#fff",
    "rgb(230, 255, 0)",
  ]);

  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);
  return (
    <motion.div
      style={{ background }}
      className="h-screen  w-full flex justify-between items-stretch"
    >
      <div>left</div>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
            className="w-[300px] h-[400px] bg-red-300"
          >
            <svg className="progress-icon" viewBox="0 0 50 50">
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                style={{ pathLength: tickPath }}
              />

              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M17,17 L33,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathA }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M33,17 L17,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathB }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <div>right</div>
    </motion.div>
  );
};

export default Home;
