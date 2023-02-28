import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalWords = ({
  data: { word, translate, pronuced, grammar, rule_info, translate_info },
  setOpenModal,
}) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="bg-white opacity-70 fixed top-0 left-0 w-full h-full "></div>

      <div
        className="bg-customPrimary py-5 px-3 rounded-lg text-white sm-w-[90%] w-[500px] min-h-[100px] max-h-[500px]
        fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center px-5"
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

        {/* <div className="flex justify-between mb-2 ">
          <div className="flex">
            <span>Word:</span>
            <p>{word}</p>
          </div>
          <p>{translate}</p>
        </div> */}

        {/* <div className="flex justify-between mb-2">
          <p>{pronuced}</p>
          <p>{grammar}</p>
        </div>

        <div className="flex justify-between mb-2">
          <p>{rule_info}</p>
          <p>{translate_info}</p>
        </div> */}
      </div>
    </>
  );
};

export default ModalWords;
