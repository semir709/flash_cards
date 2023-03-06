import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const ModalWords = ({
  data: { word, translate, pronuced, grammar, rule_info, translate_info },
  setOpenModal,
}) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  const variations = {
    initial: {
      scale: 0,
      translateX: "-50%",
      translateY: "-50%",
    },
    open: {
      scale: 1,
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.1,
      },
    },
  };
  return (
    <>
      <div className="bg-white opacity-70 fixed top-0 left-0 w-full h-full "></div>

      <motion.div
        variants={variations}
        initial="initial"
        animate="open"
        exit="exit"
        className="bg-customPrimary py-5 px-3 rounded-lg text-white sm:w-[500px] w-[90%] min-h-[100px] sm:max-h-[500px] max-h-fit 
        fixed top-[50%] left-[50%]  flex flex-col items-center px-5"
      >
        <AiOutlineCloseCircle
          fontSize={25}
          className="absolute top-2 right-2 cursor-pointer"
          onClick={closeModal}
        />
        <h3 className=" w-fit text-5xl mb-2">{word}</h3>
        <p className="text-xl mb-2">{translate}</p>
        <p className="text-md mb-4">{translate_info}</p>

        <div className="flex w-full justify-between mb-5">
          <p>{grammar}</p>
          <p>{pronuced}</p>
        </div>

        <div className="w-full  my-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore
            iusto cumque libero temporibus voluptas tenetur aspernatur porro
            quaerat sint? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aut labore iusto cumque libero temporibus voluptas tenetur
            aspernat
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default ModalWords;
