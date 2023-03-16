import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";

import { useEffect } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(obj);

  const containerVariants = {
    default: {
      width: `${!(window.innerWidth < 440) ? "385px" : "100%"}`,
      height: 400,
      position: "absolute",
      top: "105%",
      left: `${!(window.innerWidth < 640) ? "-4%" : "50%"}`,
      translateX: `${!(window.innerWidth < 640) ? "0%" : "-50%"}`,
      translateY: "-100%",
      scale: 0.5,
    },
    move: {
      top: "50%",
      left: "50%",
      translateY: "-50%",
      translateX: "-50%",
      scale: 1,
      transition: {
        // delay: 1,
        duration: 0.5,
      },
    },

    exit: {
      x: 1200,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const changeIndex = () => {
    if (index + 1 === data.length - 1) {
      const last = data[data.length - 1]; // take last element
      data.pop(); // remove last element
      data.sort(() => Math.random() - 0.5); // randomize order of elements
      data.unshift(last); // add last element on the beginnig of array
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <main className="h-screen  w-full relative ">
      <div className="">
        <motion.div
          variants={containerVariants}
          initial="default"
          key={index + 1}
        >
          <Card data={data[index + 1]} animation={false} />
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="default"
          animate="move"
          exit="exit"
          key={index}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <Card data={data[index]} changeIndex={changeIndex} animation={true} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Home;

let obj = [
  {
    id: 1,
    word: "Smile",
    pronuced: "(Smajl)",
    translate: "Osmjeh",
    translate_info: "Smijeh, veseo",
    rule_info: "no info",
  },

  {
    id: 2,
    word: "Man",
    pronuced: "(Men)",
    translate: "Čovjek",
    translate_info: "Čovjek, osoba, muškarac",
    rule_info: "Muški rod za osobu",
  },

  {
    id: 3,
    word: "Ball",
    pronuced: "(Booll)",
    translate: "Lopta",
    translate_info: "no translate info",
    rule_info: "za muški i ženski rod",
  },

  {
    id: 4,
    word: "Football",
    pronuced: "(Futball)",
    translate: "Nogomeeet",
    translate_info: "no translate info",
    rule_info: "za muški i ženski rod",
  },

  {
    id: 5,
    word: "House",
    pronuced: "(Hause)",
    translate: "Kuca",
    translate_info: "no translate info",
    rule_info: "za muški i ženski rod",
  },

  {
    id: 6,
    word: "Best",
    pronuced: "(Best)",
    translate: "Najbolji",
    translate_info: "no translate info",
    rule_info: "za muški i ženski rod",
  },
];
