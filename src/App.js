import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const containerVariants = {
    default: {
      background: "red",
      width: 300,
      height: 200,
      position: "absolute",
      top: "90%",
      left: "20px",
      translateY: "-90%",
    },
    move: {
      top: "50%",
      left: "50%",
      translateY: "-50%",
      translateX: "-50%",
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

  const [index, setIndex] = useState(0);
  const [data, setData] = useState(obj);

  // console.log(index + 1, "index");
  // console.log(data.length - 1, "data");

  // useEffect(() => {
  //   console.log(index + 1);
  //   console.log(data.length);

  //   console.log(index + 1 === data.length);

  //   if (index + 1 === data.length) {
  //     console.log("hey");
  //     //   // const last = data[data.length - 1]; // take last element
  //     //   // data.pop(); // remove last element
  //     //   // setData((data) => {
  //     //   //   let res = data[Math.floor(Math.random() * data.length - 1)];
  //     //   //   return res;
  //     //   // }); // randomize order of elements
  //     //   // data.unshift(last);
  //     //   // add last element on the beginnig of array
  //     //   setIndex(0);
  //   }
  // }, [index]);

  // console.log("hey");
  // setIndex(0);

  // if (typeof data[index + 1] === "undefined") {
  //   const last = data[data.length - 1]; // take last element
  //   data.pop(); // remove last element
  //   // data = data[Math.floor(Math.random() * data.length - 1)]; // randomize order of elements
  //   setData(data => {return  let d = data.unshift(last);})  // add last element on the beginnig of array
  //   console.log(data, "data");
  //   setIndex(0);
  // }

  // console.log(index + 1);
  // useEffect(() => {
  //   console.log(index + 2);
  //   console.log(data.length);
  //   if (index + 2 === data.length) {
  //     setIndex(0);

  //     console.log(index, "final");
  //   }
  // }, [index, data]);

  // useEffect(() => {}, [index]);

  const changeIndex = () => {
    // console.log(index + 1);
    console.log(data.length);
    console.log(index + 1);
    if (index + 1 === data.length - 1) {
      const last = data[data.length - 1]; // take last element
      data.pop(); // remove last element
      data.sort(() => Math.random() - 0.5); // randomize order of elements

      console.log(data);
      data.unshift(last); // add last element on the beginnig of array
      // console.log(data, "data");
      setIndex(0);
    } else {
      // console.log("old");
      setIndex((prev) => prev + 1);
      // console.log(data[index + 1].word);
      // console.log(data[index + 1]);
    }
  };

  return (
    <>
      <Header />
      <main className="h-screen w-full relative ">
        <p>{JSON.stringify(data[index + 1])}</p>
        <motion.div
          variants={containerVariants}
          initial="default"
          key={index + 1}
          data={data[index + 1]}
        >
          {data[index + 1].word}
        </motion.div>

        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="default"
            animate="move"
            exit="exit"
            key={index}
            data={data[index]}
            onClick={changeIndex}
          >
            {data[index].word}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
{
  /* <div
          className="absolute top-[50%] left-[50%]
            translate-y-[-50%] translate-x-[-50%] w-[500px] h-[300px]"
        >
          <div className="relative w-full h-full">
            {data.map((props) => (
              <Card data={props} key={props.id} />
            ))}
          </div>
        </div> */
}

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
