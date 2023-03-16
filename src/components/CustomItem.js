import React, { useState } from "react";
import { motion } from "framer-motion";

const CustomItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const variationText = {
    initial: {
      display: "none",
      opacity: 0,
      x: -20,
    },
    hover: {
      display: "block",
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className="flex items-center my-2 cursor-pointer">
      <motion.div
        className="rounded-full w-fit p-2 bg-[#CD2C93] text-white"
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        whileTap={{ scale: 0.8 }}
      >
        {props.children}
      </motion.div>
      <motion.p
        variants={variationText}
        animate={isHover ? "hover" : "initial"}
        className="mx-3 text-customGray"
      >
        {props.text}
      </motion.p>
    </div>
  );
};

export default CustomItem;
