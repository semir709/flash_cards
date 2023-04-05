import React from "react";
import StackOfCards from "../components/StackOfCards";

const Home = () => {
  return (
    <div className="h-screen  w-full sm:flex justify-between items-stretch px-2">
      <div className="sm:w-[33.5%] relative">
        <div className="bg-blue-300 w-[100px] h-[100px] absolute bottom-5"></div>
      </div>
      <div className="flex sm:h-full justify-center items-center sm:w-[33.5%]  ">
        <div className="min-[320px]:w-[300px] w-full h-[400px]">
          <StackOfCards cards={data} />
        </div>
      </div>
      <div className="sm:h-full relative sm:w-[33.5%] ">
        <div className="absolute w-2/3 h-[100px] top-[20px] bg-red-300">
          Message
        </div>

        <div className="w-3/4 absolute bottom-36">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illo
            aliquam consequatur? Mollitia quisquam quos enim, reiciendis nam
            magnam dolorem? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et illo aliquam consequatur? Mollitia quisquam quos enim,
            reiciendis nam magnam dolorem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

const data = [
  {
    id: 1,
    title: "Card 1",
  },
  {
    id: 2,
    title: "Card 2",
  },
  {
    id: 3,
    title: "Card 3",
  },
  {
    id: 4,
    title: "Card 4",
  },
  {
    id: 5,
    title: "Card 5",
  },
];
