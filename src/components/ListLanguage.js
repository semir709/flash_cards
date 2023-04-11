import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";

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

const ListLanguage = ({ data, setLangSlug, langSlug }) => {
  // const [langListAction, setLangListAction] = useState(null);

  useEffect(() => {
    if (typeof data[0] !== "undefined") setLangSlug(data[0].slug.current);
  }, [data, setLangSlug]);

  return (
    <>
      {data.length > 0 ? (
        <ul className="flex">
          {data.map(({ slug, name, _id }) => (
            <motion.li
              className="mx-3 my-2 cursor-pointer text-customTextColor"
              onClick={(e) => setLangSlug(slug.current)}
              variants={listLanguageVar}
              whileHover="hover"
              animate={langSlug === slug.current ? "onClick" : "initial"}
            >
              {name}
            </motion.li>
          ))}
        </ul>
      ) : (
        <div className="w-[150px]">
          <Skeleton count={1} className=" h-[20px]  my-[5px] rounded-lg" />
        </div>
      )}
    </>
  );
};

export default ListLanguage;
