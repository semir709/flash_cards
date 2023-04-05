import React, { useState } from "react";
import StackOfCards from "../components/StackOfCards";

const Home = () => {
  return (
    <div className="h-screen  w-full flex justify-between items-stretch">
      <div>left</div>
      <div className="flex h-full justify-center items-center">
        <div className="w-[300px] h-[400px]">
          <StackOfCards cards={data} />
        </div>
      </div>
      <div>right</div>
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
