import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Card = ({ data }) => {
  const [flip, setFlip] = useState(false);
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState(false);
  const cardRef = useRef(null);

  // useEffect(() => {
  //   const card = cardRef.current;
  //   card.classList.add("translate-x-[0]", "translate-y-[0]");
  // }, []);

  // const next = (e) => {
  //   e.stopPropagation();
  //   const card = cardRef.current;

  //   //animation
  //   // setAnimation(true);

  //   // card.classList.add("translate-x-[300%]");

  //   setFlip(false);
  //   setCount((prev) => prev + 1);

  //   // setAnimation(false);
  // };

  return (
    <div
      ref={cardRef}
      className={`w-full h-full [perspective:1000px;] group transition duration-500  absolute`}
    >
      <div
        className={` ${
          flip && "[transform:rotateY(180deg)]"
        }  relative w-full h-full
[transform-style:preserve-3d] transition duration-500  `}
      >
        <div
          onClick={() => setFlip(true)}
          className="w-full h-full bg-gradient-to-tl from-customPurple to-customOrange rounded-3xl p-3
    flex flex-col justify-between items-center cursor-pointer 
    [backface-visibility:hidden] absolute"
        >
          <div className="flex flex-col items-center my-5">
            <h2 className="text-white text-3xl mt-[40px]">{data.word}</h2>
            <p className="text-white text-lg mt-2">{data.pronuced}</p>
          </div>
          <span className="text-white ">{data.rule_info}</span>
        </div>

        <div
          onClick={() => setFlip(false)}
          className="w-full h-full bg-gradient-to-tl from-customOrange to-customPurple
    rounded-3xl p-3 flex flex-col items-center justify-between cursor-pointer
    [transform:rotateY(180deg)] [backface-visibility:hidden] absolute "
        >
          <div className="flex flex-col items-center">
            <h2 className="text-white text-3xl mt-[50px]">{data.translate}</h2>
            <p className="text-white text-lg mt-2">{data.translate_info}</p>
          </div>

          <div className="ml-auto mr-5">
            <button onClick={() => {}} className="text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div
      ref={cardRef}
      className={`w-full h-full [perspective:1000px;] group transition duration-500  absolute`}
    >
      <div
        className={` ${
          flip && "[transform:rotateY(180deg)]"
        }  relative w-full h-full
    [transform-style:preserve-3d] transition duration-500  `}
      >
        <div
          onClick={() => setFlip(true)}
          className="w-full h-full bg-gradient-to-tl from-customPurple to-customOrange rounded-3xl p-3
        flex flex-col justify-between items-center cursor-pointer 
        [backface-visibility:hidden] absolute"
        >
          <div className="flex flex-col items-center my-5">
            <h2 className="text-white text-3xl mt-[40px]">{data.word}</h2>
            <p className="text-white text-lg mt-2">{data.pronuced}</p>
          </div>
          <span className="text-white ">{data.rule_info}</span>
        </div>

        <div
          onClick={() => setFlip(false)}
          className="w-full h-full bg-gradient-to-tl from-customOrange to-customPurple
        rounded-3xl p-3 flex flex-col items-center justify-between cursor-pointer
        [transform:rotateY(180deg)] [backface-visibility:hidden] absolute "
        >
          <div className="flex flex-col items-center">
            <h2 className="text-white text-3xl mt-[50px]">{data.translate}</h2>
            <p className="text-white text-lg mt-2">{data.translate_info}</p>
          </div>

          <div className="ml-auto mr-5">
            <button onClick={() => {}} className="text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div> */
}
