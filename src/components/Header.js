import React, { useState } from "react";
import { motion } from "framer-motion";

import { BsBook, BsHouse, BsGraphUp, BsPatchQuestion } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import CustomItem from "./CustomItem";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="fixed z-50 mt-2 ml-2">
      <nav className="hidden sm:block">
        <ul>
          <li>
            <Link to="/">
              <CustomItem text="Home">
                <BsHouse fontSize={20} />
              </CustomItem>
            </Link>
          </li>

          <li>
            <Link to="/languages">
              <CustomItem text="Languages">
                <BsBook fontSize={20} />
              </CustomItem>
            </Link>
          </li>

          <li>
            <Link to="/progress">
              <CustomItem text="Progress">
                <BsGraphUp fontSize={20} />
              </CustomItem>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <CustomItem text="About Us">
                <BsPatchQuestion fontSize={20} />
              </CustomItem>
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className="sm:hidden block"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <CustomItem text="Close">
            <AiOutlineClose fontSize={20} />
          </CustomItem>
        ) : (
          <CustomItem text="Menu">
            <FiMenu fontSize={20} />
          </CustomItem>
        )}
      </div>

      {toggle && (
        <motion.div>
          <ul>
            <li>
              <Link to="/">
                <CustomItem text="Home">
                  <BsHouse fontSize={20} />
                </CustomItem>
              </Link>
            </li>

            <li>
              <Link to="/languages">
                <CustomItem text="Languages">
                  <BsBook fontSize={20} />
                </CustomItem>
              </Link>
            </li>

            <li>
              <Link to="/progress">
                <CustomItem text="Progress">
                  <BsGraphUp fontSize={20} />
                </CustomItem>
              </Link>
            </li>

            <li>
              <Link to="about">
                <CustomItem text="About Us">
                  <BsPatchQuestion fontSize={20} />
                </CustomItem>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
