import React, { useState } from "react";
import StackOfCards from "../components/StackOfCards";

const Home = () => {
  return (
    <div className="h-screen  w-full flex justify-between items-stretch">
      <div>left</div>
      <div className="flex h-full justify-center items-center">
        <StackOfCards cards={["Card 1", "Card 2", "Card 3"]} />
      </div>
      <div>right</div>
    </div>
  );
};

export default Home;
