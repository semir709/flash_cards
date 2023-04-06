import React, { useState } from "react";
import { motion } from "framer-motion";

const CustomItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const variationText = {
    initial: {
      display: "none",
      opacity: 0,
      y: -20,
    },
    hover: {
      display: "block",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className="flex flex-col items-center my-2 mx-2 cursor-pointer">
      <motion.div
        className="rounded-full w-auto  p-2 bg-[#CD2C93] text-white"
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        whileTap={{ scale: 0.8 }}
      >
        {props.children}
      </motion.div>

      {props.text && (
        <motion.p
          variants={variationText}
          animate={isHover ? "hover" : "initial"}
          className=" text-customGray absolute bottom-[-10px]"
        >
          {props.text}
        </motion.p>
      )}
    </div>
  );
};

export default CustomItem;
