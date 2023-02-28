import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const LoadingFullScreen = () => {
  return (
    <div className="bg-white opacity-70 fixed top-0 left-0 w-full h-full">
      <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
        <FadeLoader color="#DE3E6F" />
      </div>
    </div>
  );
};

export default LoadingFullScreen;
