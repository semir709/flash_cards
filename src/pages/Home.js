import React, { useEffect, useRef, useState } from "react";
import { client } from "../client";
import { getData } from "../utils/data";

const shuffleData = (array) => {
  const arr = array;
  for (let i = arr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const temp = arr[random];
    arr[random] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

const Home = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [revile, setRevile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const query = getData(0, 2);
    client.fetch(query).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const checkValues = (array) => {
    const valFirst = parseInt(array[0]);
    const valSecond = parseInt(array[1]);
    const valMore = array[2];

    if (array[0] === "") {
      setMessage("Please put index one and index two");
      return false;
    } else if (valMore) {
      setMessage("Put only two numbers");
      return false;
    } else if (isNaN(valFirst)) {
      setMessage("First index is not a number");
      return false;
    } else if (isNaN(valSecond)) {
      setMessage("Second index is not a number");
      return false;
    } else {
      setMessage("");
      return { valFirst, valSecond };
    }
  };

  const sendRequest = () => {
    const values = inputRef.current.value.split(",");

    const valObj = checkValues(values);

    if (valObj !== false) {
      const query = getData(values[0], values[1]);
      client.fetch(query).then((data) => {
        setData(data);
        setLoading(false);
      });
    }
  };

  const next = () => {
    setRevile(false);
    if (index === data.length - 1) {
      setData((prev) => {
        const arr = shuffleData(prev);
        return arr;
      });
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
          placeholder="startIndex,endIndex"
        />
        <button
          className="bg-gray-300 px-3 py-1"
          type="button"
          onClick={sendRequest}
        >
          Send
        </button>
      </div>

      {message && <p className="text-red-300">{message}</p>}

      <div className="flex flex-col items-center">
        {loading ? (
          <p>Loading...</p>
        ) : data.length > 0 ? (
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
