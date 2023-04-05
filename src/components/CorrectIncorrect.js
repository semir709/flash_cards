import React from "react";
import { motion } from "framer-motion";

const CorrectIncorrect = ({ tickPath, crossPathA, crossPathB, color }) => {
  return (
    <>
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
    </>
  );
};

export default CorrectIncorrect;
