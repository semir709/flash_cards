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
        <table className="w-full text-white table-fixed min-w-[700px]">
          <tr className="text-left ">
            <th className="px-2">Word</th>
            <th>Grammar</th>
            <th>Translate</th>
            <th>Pronauced</th>
          </tr>
          {words.map(({ word, grammar, translate, pronauced }) => (
            <motion.tr
              className="group "
              // whileHover={{
              //   backgroundColor: "rgb(255, 255, 255, 0.2)",
              //   cursor: "pointer",
              //   // opacity: 0.1,
              //   transition: {
              //     duration: 0.1,
              //   },
              // }}
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
    word: "Ballasd",
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
