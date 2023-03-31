import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "./Card";

const StackOfCards = ({ cards }) => {
  const [array, setArray] = useState(cards);

  useEffect(() => {
    setArray(cards);
  }, [cards]);

  return (
    <div className="relative">
      <AnimatePresence>
        {array.map((card, index) => (
          <Card key={index} data={card} setArray={setArray} array={array} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StackOfCards;
