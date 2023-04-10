import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import LoadingFullScreen from "../components/LoadingFullScreen";
import ModalWords from "../components/ModalWords";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion, AnimatePresence } from "framer-motion";
import ListLanguage from "../components/ListLanguage";
import { client } from "../client";
import { getCategories, getList, getWordsFull } from "../utils/data";

const Words = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingLanguage, setLoadingLanguage] = useState(false);
  const [category, setCategory] = useState([]);
  const [word, setWord] = useState(null);

  useEffect(() => {
    const queryData = getCategories("engleski", 0, 1);
    client.fetch(queryData).then((data) => {
      setCategory(data);
    });
  }, []);

  const takeId = (e) => {
    setLoadingModal(true);
    document.body.style.overflow = "hidden";
    const id = e.target.parentNode.id;
    const queryWords = getWordsFull(id);
    client.fetch(queryWords).then((data) => {
      console.log(data[0]);
      setWord(data[0]);
      setLoadingModal(false);
      document.body.style.overflow = "auto";
      setOpenModal(true);
    });

    //get all data for word with this id
    // setLoadingModal(true);
    // document.body.style.overflow = "hidden";

    // setLoadingModal(false);
    // document.body.style.overflow = "auto";
    // setOpenModal(true);
  };

  return (
    <>
      <div className="min-h-screen pt-[100px] px-[40px]">
        <div className="my-2">
          <ListLanguage data={list} />
          <div className="bg-customTextColor w-full h-[1px]"></div>
        </div>
        <div className="mx-4">
          {loadingLanguage ? (
            <Skeleton count={10} className=" h-[40px] my-[20px] rounded-lg" />
          ) : (
            category.map(({ category_name, _id }, index) => (
              <CategoryCard
                name={category_name}
                key={_id}
                id={_id}
                takeId={takeId}
              />
            ))
          )}
        </div>
      </div>

      {loadingModal && <LoadingFullScreen />}

      <AnimatePresence>
        {openModal && <ModalWords data={word} setOpenModal={setOpenModal} />}
      </AnimatePresence>
    </>
  );
};

export default Words;

const data = [
  {
    id: 1,
    word: "Smile",
    pronuced: "(Smajl)",
    translate: "Osmjeh",
    translate_info: "Smijeh, veseo",
    rule_info: "no info",
    grammar: "muški rod",
  },
];

const list = [
  {
    slug: "engleski",
    language: "Engleski",
  },
  {
    slug: "arapski",
    language: "Arapski",
  },
  {
    slug: "francuski",
    language: "Francuski",
  },
];

// const category = [
//   {
//     name: "Why, Where, Who?",
//   },

//   {
//     name: "House, kitchen, staff",
//   },

//   {
//     name: "Sports",
//   },
//   {
//     name: "Tools",
//   },
//   {
//     name: "Toys",
//   },
//   {
//     name: "Animals",
//   },
//   {
//     name: "Nautre",
//   },
// ];
