import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { motion } from "framer-motion";
import ModalWords from "./ModalWords";
import { client } from "../client";
import { getWords } from "../utils/data";
import { json } from "react-router-dom";

const CategoryCard = ({ name, takeId, id }) => {
  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState([]);
  const [toggleLoad, setToggleLoad] = useState(false);

  const onToggle = () => {
    setToggleLoad(true);

    if (data.length === 0) {
      const queryWords = getWords(id, 0, 20);
      client.fetch(queryWords).then((data) => {
        console.log(data);
        setData(data);
        setToggleLoad(false);
        setToggle((prev) => !prev);
      });
    } else {
      setToggleLoad(false);
      setToggle((prev) => !prev);
    }
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

  const checkBoXRef = useRef();

  const variatinsArrowButton = {
    open: { rotate: 180 },
    initial: { rotate: 0 },
  };

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      if (checkBoXRef.current.getAttribute("data-id") === JSON.parse(value)) {
        checkBoXRef.current.checked = true;
      }
    }
  }, []);

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
        <div onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            ref={checkBoXRef}
            name="categoryCheckBox"
            data-id={id}
            onClick={(e) => {
              const id = e.target.getAttribute("data-id");

              if (e.target.checked) {
                localStorage.setItem(
                  JSON.stringify(name.toLowerCase()),
                  JSON.stringify(id)
                );
              } else {
                localStorage.removeItem(JSON.stringify(name.toLowerCase()));
              }
            }}
          />
        </div>

        <div className="flex items-center">
          <motion.div
            className="mx-2 select-none"
            variants={letterHover}
            animate={isHovered ? "open" : "initial"}
          >
            {name}
          </motion.div>
        </div>

        {toggleLoad ? (
          <p>Loading.. </p>
        ) : (
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
        )}
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
          {data.map(
            ({ word, gramar, translation, pronunciation, _id }, index) => (
              <motion.tr
                variants={variantsList}
                animate={toggle ? "open" : "initial"}
                className="group"
                onClick={takeId}
                custom={index}
                id={_id}
              >
                <td className="rounded-l-lg group-hover:bg-customHoverBgWhite cursor-pointer px-2">
                  {word}
                </td>
                <td className=" group-hover:bg-customHoverBgWhite cursor-pointer">
                  {gramar}
                </td>
                <td className=" group-hover:bg-customHoverBgWhite cursor-pointer">
                  {translation}
                </td>
                <td className="rounded-r-lg group-hover:bg-customHoverBgWhite cursor-pointer">
                  {pronunciation}
                </td>
              </motion.tr>
            )
          )}
        </table>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;
