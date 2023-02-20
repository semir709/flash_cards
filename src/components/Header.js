import React, { useState } from "react";

import { BsHouse } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const checkToggle = () => {
    if (toggle) setToggle(false);
    if (toggle === false) setToggle(true);
  };

  return (
    <header className="">
      <nav className="flex justify-between w-full bg-customPrimary py-3 px-5 sm:flex hidden">
        <div className="flex">
          <div className="flex items-center mx-2 cursor-pointer">
            <BsHouse className="fill-white" />
            <span className="ml-2 text-md text-white">Home</span>
          </div>

          <div className="flex items-center mx-2 cursor-pointer">
            <FiBook className="stroke-white" />
            <span className="ml-2 text-md text-white">Words</span>
          </div>
        </div>

        <div className="flex items-center cursor-pointer">
          <AiOutlineMail className="fill-white" />
          <span className="ml-2 text-md text-white">Contact</span>
        </div>
      </nav>

      <nav className="flex w-full bg-customPrimary py-3 px-5 sm:hidden relative">
        <AiOutlineMenu
          fontSize={25}
          className="ml-auto cursor-pointer fill-white"
          onClick={checkToggle}
        />

        {toggle && (
          <div className="bg-customPrimary w-[200px] absolute mt-2 mr-2 rounded-lg p-3 top-full right-0">
            <ul>
              <li className="mb-2">
                <div className="flex items-center mx-2 cursor-pointer">
                  <BsHouse className="fill-white" />
                  <span className="ml-2 text-md text-white">Home</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center mx-2 cursor-pointer">
                  <FiBook className="stroke-white" />
                  <span className="ml-2 text-md text-white">Words</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center cursor-pointer mx-2">
                  <AiOutlineMail className="fill-white" />
                  <span className="ml-2 text-md text-white">Contact</span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
