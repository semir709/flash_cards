import React, { useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
const Card = ({ data, setArray, array }) => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);

  const swipeConfidenceThreshold = 300;
  const [dragDirection, setDragDirection] = useState(null);

  const removeLastElement = (array) => {
    const arr = [...array];
    arr.pop();
    setArray(arr);
  };

  const handleDrag = (event, info) => {
    if (info.offset.x < -swipeConfidenceThreshold) {
      setDragDirection("left");
      removeLastElement(array);
    } else if (info.offset.x > swipeConfidenceThreshold) {
      setDragDirection("right");
      removeLastElement(array);
    }
  };
  return (
    <div className="absolute">
      <motion.div
        className=" bg-green-300 m-5 w-[100px] h-[100px] absolute"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDrag}
        animate={
          dragDirection === "right"
            ? { x: 1000, opacity: 0 }
            : dragDirection === "left"
            ? { x: -1000 }
            : { x: 0 }
        }
        transition={{ duration: 1 }}
        exit="exit"
      >
        {data}

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
  );
};

export default Card;
