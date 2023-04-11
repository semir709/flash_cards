import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import LoadingFullScreen from "../components/LoadingFullScreen";
import ModalWords from "../components/ModalWords";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AnimatePresence } from "framer-motion";
import ListLanguage from "../components/ListLanguage";
import { client } from "../client";
import { getCategories, getListLanguage, getWordsFull } from "../utils/data";

const Words = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingLanguage, setLoadingLanguage] = useState(false);
  const [category, setCategory] = useState([]);
  const [word, setWord] = useState(null);
  const [language, setLanguage] = useState([]);
  const [langSlug, setLangSlug] = useState("engleski");

  useEffect(() => {
    const queryData = getCategories("engleski", 0, 10);
    const queryListLanguage = getListLanguage();
    setLoadingLanguage(true);

    Promise.all([
      client.fetch(queryData),
      client.fetch(queryListLanguage),
    ]).then(([category, language]) => {
      setCategory(category);
      setLanguage(language);
      setLoadingLanguage(false);
    });
  }, []);

  useEffect(() => {
    const queryData = getCategories(langSlug, 0, 10);
    setLoadingLanguage(true);

    client.fetch(queryData).then((data) => {
      setCategory(data);
      setLoadingLanguage(false);
    });
  }, [langSlug]);

  const takeId = (e) => {
    setLoadingModal(true);
    document.body.style.overflow = "hidden";
    const id = e.target.parentNode.id;
    const queryWords = getWordsFull(id);
    client.fetch(queryWords).then((data) => {
      setWord(data[0]);
      setLoadingModal(false);
      document.body.style.overflow = "auto";
      setOpenModal(true);
    });
  };

  return (
    <>
      <div className="min-h-screen pt-[100px] px-[40px]">
        <div className="my-2">
          <ListLanguage
            data={language}
            setLangSlug={setLangSlug}
            langSlug={langSlug}
          />

          <div className="bg-customTextColor w-full h-[1px]"></div>
        </div>
        <div className="mx-4">
          {loadingLanguage ? (
            <Skeleton count={10} className=" h-[40px] my-[5px] rounded-lg" />
          ) : (
            category.map(({ category_name, _id }) => (
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
