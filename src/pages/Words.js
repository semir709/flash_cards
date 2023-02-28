import React, { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import LoadingFullScreen from "../components/LoadingFullScreen";
import ModalWords from "../components/ModalWords";

const Words = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingLanguage, setLoadingLanguage] = useState(false);

  const takeId = (e) => {
    const id = e.target.parentNode.id;

    //get all data for word with this id
    // setLoadingModal(true);
    // document.body.style.overflow = "hidden";

    // setLoadingModal(false);
    // document.body.style.overflow = "auto";
    setOpenModal(true);
  };

  const getLanguage = (e) => {
    const slug = e.target.getAttribute("data-slug");

    //GET DATA USING SLUG
    console.log("Get LANGUAGE data");
    setLoadingLanguage(false);
  };
  return (
    <>
      <div className="min-h-screen pt-[100px] px-[40px]">
        <div className="my-2">
          <ul className="flex">
            {list.map(({ language, slug }) => (
              <li
                className="mx-3 my-2 cursor-pointer text-customTextColor"
                data-slug={slug}
                onClick={getLanguage}
              >
                {language}
              </li>
            ))}
          </ul>

          <div className="bg-customTextColor w-full h-[1px]"></div>
        </div>
        <div className="">
          {loadingLanguage ? (
            <p>Loading...</p>
          ) : (
            category.map(({ name }, index) => (
              <CategoryCard name={name} key={index} takeId={takeId} />
            ))
          )}
        </div>
      </div>

      {/* {loadingModal && <LoadingFullScreen />} */}
      {openModal && <ModalWords data={data[0]} setOpenModal={setOpenModal} />}
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

const category = [
  {
    name: "Why, Where, Who?",
  },

  {
    name: "House, kitchen, staff",
  },

  {
    name: "Sports",
  },
  {
    name: "Tools",
  },
  {
    name: "Toys",
  },
  {
    name: "Animals",
  },
  {
    name: "Nautre",
  },
];
