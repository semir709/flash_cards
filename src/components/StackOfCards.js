import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "./Card";

const StackOfCards = ({ cards }) => {
  const [array, setArray] = useState(cards);
  const [index, setIndex] = useState(0);

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
    console.log(array);
    console.log(index);

    if (index + 1 === array.length - 1) {
      console.log("next is last");
      // setIsUpdating(true);
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
    <div className="relative w-full h-full">
      <AnimatePresence>
        <Card key={cards[index + 1].id} data={cards[index + 1].title} />

        <Card
          key={cards[index].id}
          data={cards[index].title}
          setIndex={setIndex}
        />
      </AnimatePresence>
    </div>
  );
};

export default StackOfCards;
