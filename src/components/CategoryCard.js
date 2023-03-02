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

  const onToggle = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        translateY: -10,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className=""
    >
      <div
        onClick={onToggle}
        className="w-full my-5 bg-customPrimary flex justify-between
         items-center px-5 py-1 rounded-lg text-white cursor-pointer"
      >
        <div className="flex items-center">
          <div class="flex items-center mr-4">
            <div class="flex items-center ">
              <input
                onClick={(e) => e.stopPropagation()}
                type={"checkbox"}
                class="w-4 h-4 text-blue-600 bg-gray-100
                        rounded focus:ring-transparent
                        dark:focus:ring-transparent dark:ring-offset-transparent
                        focus:ring-2 dark:bg-transparent dark:border-transparent"
              />
            </div>
          </div>
          <motion.div
            className="mx-2"
            variants={{
              hovered: { wordSpacing: "5px" },
              unhovered: { wordSpacing: "0px" },
            }}
            animate={isHovered ? "hovered" : "unhovered"}
          >
            {name}
          </motion.div>
        </div>

        <motion.div
          variants={{
            hovered: { rotate: 360 },
            unhovered: { rotate: 0 },
          }}
          animate={isHovered ? "hovered" : "unhovered"}
          onClick={onToggle}
        >
          <MdOutlineKeyboardArrowDown
            fontSize={30}
            className="cursor-pointer"
          />
          {/* {toggle ? (
            <MdOutlineKeyboardArrowUp
              fontSize={30}
              className="cursor-pointer"
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              fontSize={30}
              className="cursor-pointer"
            />
          )} */}
        </motion.div>
      </div>

      {toggle && (
        <div className=" bg-customPrimary w-full py-5 px-3 rounded-lg overflow-x-auto">
          <table className="w-full text-white table-fixed min-w-[700px]">
            <tr className="text-left ">
              <th className="px-2">Word</th>
              <th>Grammar</th>
              <th>Translate</th>
              <th>Pronauced</th>
            </tr>
            {words.map(({ word, grammar, translate, pronauced, id }) => (
              <motion.tr className="group" onClick={takeId} id={id}>
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
        </div>
      )}
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
