import React, { useState } from "react";

import { BsHouse } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const checkToggle = () => {
    if (toggle) setToggle(false);
    if (toggle === false) setToggle(true);
  };

  const variantsHover = {
    initial: {
      translateX: 0,
    },
    hover: {
      translateX: [5, -5, 0],
    },
  };

  const variantsToggle = {
    initial: {
      width: 0,
      height: 0,
    },

    toggle: {
      width: 200,
      height: "auto",
    },
  };

  return (
    <header className=" fixed  w-full z-50">
      <nav className="flex justify-between w-full bg-customPrimary py-3 px-5 sm:flex hidden">
        <div className="flex">
          <Link to="/home">
            <motion.div
              variants={variantsHover}
              initial="initial"
              whileHover="hover"
              className="flex items-center mx-2 cursor-pointer"
            >
              <BsHouse className="fill-white" />
              <span className="ml-2 text-md text-white">Home</span>
            </motion.div>
          </Link>

          <Link to="/words">
            <motion.div
              variants={variantsHover}
              initial="initial"
              whileHover="hover"
              className="flex items-center mx-2 cursor-pointer"
            >
              <FiBook className="stroke-white" />
              <span className="ml-2 text-md text-white">Words</span>
            </motion.div>
          </Link>
        </div>

        <Link to="/contact">
          <motion.div
            variants={variantsHover}
            initial="initial"
            whileHover="hover"
            className="flex items-center cursor-pointer"
          >
            <AiOutlineMail className="fill-white" />
            <span className="ml-2 text-md text-white">Contact</span>
          </motion.div>
        </Link>
      </nav>

      <nav className="flex w-full bg-customPrimary py-3 px-5 sm:hidden relative">
        <AiOutlineMenu
          fontSize={25}
          className="ml-auto cursor-pointer fill-white"
          onClick={checkToggle}
        />

        {toggle && (
          <motion.div
            variants={variantsToggle}
            initial="initial"
            animate={toggle ? "toggle" : "initial"}
            className="bg-customPrimary w-[200px] absolute mt-2 mr-2 rounded-lg top-full right-0"
          >
            <ul className="m-3">
              <li className="mb-2 ">
                <Link to="/home">
                  <motion.div
                    variants={variantsHover}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center mx-2 cursor-pointer"
                  >
                    <BsHouse className="fill-white" />
                    <span className="ml-2 text-md text-white">Home</span>
                  </motion.div>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="words">
                  <motion.div
                    variants={variantsHover}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center mx-2 cursor-pointer"
                  >
                    <FiBook className="stroke-white" />
                    <span className="ml-2 text-md text-white">Words</span>
                  </motion.div>
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">
                  <motion.div
                    variants={variantsHover}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center cursor-pointer mx-2"
                  >
                    <AiOutlineMail className="fill-white" />
                    <span className="ml-2 text-md text-white">Contact</span>
                  </motion.div>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
