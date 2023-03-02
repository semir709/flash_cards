import React, { useState } from "react";
import { motion } from "framer-motion";

const listLanguageVar = {
  hover: {
    translateY: -10,
    color: "#DE3E6F",
  },

  onClick: { translateY: -10, color: "#DE3E6F" },

  initial: {
    translateY: 0,
    color: "#353535",
  },
};

const ListLanguage = ({ data }) => {
  const [langListAction, setLangListAction] = useState(0);

  return (
    <>
      <ul className="flex">
        {data.map(({ slug, language }, index) => (
          <motion.li
            className="mx-3 my-2 cursor-pointer text-customTextColor"
            data-slug={slug}
            onClick={(e) => setLangListAction(index)}
            variants={listLanguageVar}
            whileHover="hover"
            animate={langListAction === index ? "onClick" : "initial"}
          >
            {language}
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default ListLanguage;
