import React, { useState } from "react";
import { motion } from "framer-motion";

import { BsBook, BsHouse, BsGraphUp, BsPatchQuestion } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import CustomItem from "./CustomItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="fixed z-50 mt-2 ml-2">
      <nav className="hidden sm:block">
        <ul>
          <li>
            <CustomItem text="Home">
              <BsHouse fontSize={20} />
            </CustomItem>
          </li>

          <li>
            <CustomItem text="Languages">
              <BsBook fontSize={20} />
            </CustomItem>
          </li>

          <li>
            <CustomItem text="Progress">
              <BsGraphUp fontSize={20} />
            </CustomItem>
          </li>

          <li>
            <CustomItem text="About Us">
              <BsPatchQuestion fontSize={20} />
            </CustomItem>
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
              <CustomItem text="Home">
                <BsHouse fontSize={20} />
              </CustomItem>
            </li>

            <li>
              <CustomItem text="Languages">
                <BsBook fontSize={20} />
              </CustomItem>
            </li>

            <li>
              <CustomItem text="Progress">
                <BsGraphUp fontSize={20} />
              </CustomItem>
            </li>

            <li>
              <CustomItem text="About Us">
                <BsPatchQuestion fontSize={20} />
              </CustomItem>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
