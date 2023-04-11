import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import { type } from "@testing-library/user-event/dist/type";

const StackOfCards = ({ cards, width, height }) => {
  const [array, setArray] = useState(cards);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("visited"));

    if (!visited) {
      localStorage.setItem("visited", "true");
      setMessage(true);
      setTimeout(() => setMessage(false), 3000);
    }
  }, []);

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[random];
      arr[random] = temp;
    }

    return arr;
  };

  useEffect(() => {
    if (index + 1 === array.length - 1) {
      const next = array[index + 1];
      const current = array[index];

      let arr = array;
      arr.pop();
      arr.pop();
      arr = shuffleArray(arr);
      arr.unshift(next);
      arr.unshift(current);
      setArray(arr);
      setIndex(0);
    }
  }, [index, array]);

  return (
    <div className=" h-full w-full flex flex-col items-center justify-center ">
      {message && (
        <div className="flex w-full justify-between">
          <div>Move left</div>
          <div>Move rigth</div>
        </div>
      )}
      <div
        className={` w-full h-full flex flex-col items-center justify-center`}
      >
        <AnimatePresence>
          <Card
            key={cards[index + 1].id}
            data={cards[index + 1].title}
            width={width}
            height={height}
          />

          <Card
            key={cards[index].id}
            data={cards[index].title}
            setIndex={setIndex}
            width={width}
            height={height}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StackOfCards;
