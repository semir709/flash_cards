import { useState } from "react";

const data = [
  {
    word: "Smile",
    pronuced: "(Smajl)",
    translate: "Osmjeh",
    translate_info: "Smijeh, veseo",
    rule_info: "no info",
  },

  {
    word: "Man",
    pronuced: "(Men)",
    translate: "Čovjek",
    translate_info: "Čovjek, osoba, muškarac",
    rule_info: "Muški rod za osobu",
  },

  {
    word: "Ball",
    pronuced: "(Booll)",
    translate: "Lopta",
    translate_info: "no translate info",
    rule_info: "za muški i ženski rod",
  },
];

const Card = () => {
  const [flip, setFlip] = useState(false);
  return (
    <div className="w-[500px] h-[300px] [perspective:1000px;] group">
      <div
        className={` ${
          flip && "[transform:rotateY(180deg)]"
        }  relative w-full h-full
        [transform-style:preserve-3d] transition duration-500`}
      >
        <div
          onClick={() => setFlip(true)}
          className="w-full h-full bg-gradient-to-tl from-customPurple to-customOrange rounded-3xl p-3
            flex flex-col justify-between items-center cursor-pointer absolute 
            [backface-visibility:hidden]"
        >
          <div className="flex flex-col items-center my-5">
            <h2 className="text-white text-3xl mt-[40px]">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-lg mt-2">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <span className="text-white ">Lorem ipsum dolor sit.</span>
        </div>

        <div
          onClick={() => setFlip(false)}
          className="w-full h-full bg-gradient-to-tl from-customOrange to-customPurple
            rounded-3xl p-3 flex flex-col items-center justify-between cursor-pointer absolute 
            [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-white text-3xl mt-[50px]">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-white text-lg mt-2">
              Lorem ipsum dolor sit amet
            </p>
          </div>

          <div className="ml-auto mr-5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Hey");
              }}
              className="text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
