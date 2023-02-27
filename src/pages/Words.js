import React from "react";
import CategoryCard from "../components/CategoryCard";

const Words = () => {
  return (
    <>
      <div className="min-h-screen pt-[100px] px-[40px]">
        <div className="my-2">
          <ul className="flex">
            {list.map(({ language }) => (
              <li className="mx-3 my-2 cursor-pointer text-customTextColor">
                {language}
              </li>
            ))}
          </ul>

          <div className="bg-customTextColor w-full h-[1px]"></div>
        </div>
        <div className="">
          {category.map(({ name }) => (
            <CategoryCard name={name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Words;

const list = [
  {
    language: "Engleski",
  },
  {
    language: "Arapski",
  },
  {
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
