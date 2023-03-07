import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { motion } from "framer-motion";
import ModalWords from "./ModalWords";

const CategoryCard = ({ name, takeId }) => {
  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onToggle = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  const variationParent = {
    open: {
      translateY: [-3, 3, 0],
      transition: {
        duration: 0.5,
      },
    },
    initial: {
      translateY: 0,
    },
  };

  const letterHover = {
    open: { wordSpacing: "5px" },
    initial: { wordSpacing: "0px" },
  };

  const variationToggle = {
    initial: {
      height: "0px",
    },

    open: {
      height: "auto",
    },
  };

  const variantsList = {
    initial: {
      opacity: 0,
    },
    open: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },

      // opacity: 1,
    }),
  };

  const variatinsArrowButton = {
    open: { rotate: 180 },
    initial: { rotate: 0 },
  };
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={variationParent}
      whileHover={!isClicked && "open"}
      animate={isClicked ? "open" : "initial"}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div
        onClick={onToggle}
        className="w-full my-2 bg-customPrimary flex justify-between
         items-center px-5 py-1 rounded-lg text-white cursor-pointer"
      >
        <div className="flex items-center">
          <motion.div
            className="mx-2 select-none"
            variants={letterHover}
            animate={isHovered ? "open" : "initial"}
          >
            {name}
          </motion.div>
        </div>

        <motion.div
          variants={variatinsArrowButton}
          animate={toggle ? "open" : "initial"}
          onClick={onToggle}
        >
          <MdOutlineKeyboardArrowDown
            fontSize={30}
            className="cursor-pointer"
          />
        </motion.div>
      </div>

      <motion.div
        variants={variationToggle}
        initial="initial"
        animate={toggle ? "open" : "initial"}
        className=" bg-customPrimary rounded-lg overflow-y-hidden px-3 "
      >
        <table className="w-full text-white table-fixed min-w-[700px] my-3">
          <tr className="text-left ">
            <th className="px-2">Word</th>
            <th>Grammar</th>
            <th>Translate</th>
            <th>Pronauced</th>
          </tr>
          {words.map(({ word, grammar, translate, pronauced, id }, index) => (
            <motion.tr
              variants={variantsList}
              animate={toggle ? "open" : "initial"}
              className="group"
              onClick={takeId}
              custom={index}
              id={id}
            >
              <td className="rounded-l-lg group-hover:bg-customHoverBgWhite cursor-pointer px-2">
                {word}
              </td>
              <td className=" group-hover:bg-customHoverBgWhite cursor-pointer">
                {grammar}
              </td>
              <td className=" group-hover:bg-customHoverBgWhite cursor-pointer">
                {translate}
              </td>
              <td className="rounded-r-lg group-hover:bg-customHoverBgWhite cursor-pointer">
                {pronauced}
              </td>
            </motion.tr>
          ))}
        </table>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;

const words = [
  {
    id: 1,
    word: "Sun",
    grammar: "muški rod",
    translate: "Sunce",
    pronauced: "San",
  },
  {
    id: 2,
    word: "Ballasd",
    grammar: "muški rod",
    translate: "Lopta",
    pronauced: "Ball",
  },
  {
    id: 3,
    word: "House",
    grammar: "muški rod",
    translate: "Kuca",
    pronauced: "Hause",
  },
  {
    id: 4,
    word: "Door",
    grammar: "muški rod",
    translate: "Vrata",
    pronauced: "Door",
  },
];
