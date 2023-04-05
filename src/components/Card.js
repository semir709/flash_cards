import React, { useState, useRef } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import CorrectIncorrect from "./CorrectIncorrect";

const Card = ({ data, setIndex }) => {
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
  const refCard = useRef();

  const handleDrag = (event, info) => {
    if (info.offset.x < -swipeConfidenceThreshold) {
      setDragDirection("left");
      if (setIndex) setIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeConfidenceThreshold) {
      setDragDirection("right");
      if (setIndex)
        setIndex((prev) => {
          console.log(prev);
          return prev + 1;
        });
    }
  };
  return (
    <>
      <motion.div
        className=" bg-green-300 m-5 w-full h-full absolute "
        ref={refCard}
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDrag}
        animate={
          dragDirection === "right"
            ? { x: 500, opacity: 0 }
            : dragDirection === "left"
            ? { x: -500, opacity: 0 }
            : { x: 0 }
        }
        transition={{ duration: 0.2 }}
        exit="exit"
      >
        {data}

        <CorrectIncorrect
          tickPath={tickPath}
          crossPathA={crossPathA}
          crossPathB={crossPathB}
          color={color}
        />
      </motion.div>
    </>
  );
};

export default Card;
