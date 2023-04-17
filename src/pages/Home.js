import React, { useEffect, useRef, useState } from "react";
import { client } from "../client";
import { getData } from "../utils/data";

const Home = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [revile, setRevile] = useState(false);

  useEffect(() => {
    const query = getData(0, 2);
    client.fetch(query).then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  const sendRequest = () => {
    const values = inputRef.current.value.split(",");

    const query = getData(values[0], values[1]);

    client.fetch(query).then((data) => {
      setData(data);

      console.log(data);
    });
  };

  const next = () => {
    setRevile(false);
    if (index === data.length - 1) {
      //radnomized
      setIndex((prev) => (prev = 0));
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="h-screen flex flex-col  items-center">
      <div className="my-5">
        <input
          ref={inputRef}
          className="border-2 mx-3 py-1 px-2"
          type="text"
          placeholder="type in format: start end"
        />
        <button
          className="bg-gray-300 px-3 py-1"
          type="button"
          onClick={sendRequest}
        >
          Send
        </button>
      </div>

      <div className="flex flex-col items-center">
        {data.length > 0 ? (
          <div className="bg-green-300 w-80">
            {revile ? (
              <h2>{data[index].translation}</h2>
            ) : (
              <h2>{data[index].word}</h2>
            )}
          </div>
        ) : (
          <p>NO data</p>
        )}
        <div className="flex w-full justify-between">
          <button type="button" onClick={() => setRevile((prev) => !prev)}>
            {revile ? "Hide" : "Show"}
          </button>
          <button type="button" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
