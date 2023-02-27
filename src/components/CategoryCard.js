import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const CategoryCard = ({ name }) => {
  const listVariants = {};
  return (
    <div className="mx-4">
      <div className="w-full my-5 bg-customPrimary flex justify-between items-center px-5 py-1 rounded-lg text-white ">
        <div className="flex items-center">
          <div class="flex items-center mr-4">
            <div class="flex items-center ">
              <input
                type={"checkbox"}
                class="w-4 h-4 text-blue-600 bg-gray-100
                        rounded focus:ring-transparent
                        dark:focus:ring-transparent dark:ring-offset-transparent
                        focus:ring-2 dark:bg-transparent dark:border-transparent"
              />
            </div>
          </div>
          <div className="mx-2">{name}</div>
        </div>

        <div className="">
          <MdOutlineKeyboardArrowDown
            fontSize={30}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className=" bg-customPrimary w-full py-5 px-3 rounded-lg overflow-x-auto">
        <ul className="w-full min-w-[500px] list-decimal text-white">
          <tr className="flex  justify-between items-center text-left">
            <th className="text-left min-w-[15%]">Word</th>
            <th className="text-left w-[15%]">Grammar</th>
            <th className="text-left w-[15%]">Translate</th>
            <th className="text-left w-[15%]">Pronauced</th>
          </tr>
          {words.map(({ word, grammar, translate, pronauced }) => (
            <motion.li
              whileHover={{
                backgroundColor: ["#DE3E6F", "hsl(-120, 100, 50)"],
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="flex  justify-between items-center text-left cursor-pointer rounded-lg px-1 mb-1"
            >
              <p className="text-left w-[15%]">{word}</p>
              <p className="text-left w-[15%]">{grammar}</p>
              <p className="text-left w-[15%]">{pronauced}</p>
              <p className="text-left w-[15%]">{translate}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCard;

const words = [
  {
    word: "Sun",
    grammar: "muški rod",
    translate: "Sunce",
    pronauced: "San",
  },
  {
    word: "Ballasdasdasdasdasd",
    grammar: "muški rod",
    translate: "Lopta",
    pronauced: "Ball",
  },
  {
    word: "House",
    grammar: "muški rod",
    translate: "Kuca",
    pronauced: "Hause",
  },
  {
    word: "Door",
    grammar: "muški rod",
    translate: "Vrata",
    pronauced: "Door",
  },
];
