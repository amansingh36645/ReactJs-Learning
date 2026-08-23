import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);

  const fetchData = async () => {
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${num}&limit=10`,
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [num]);

  console.log(data);

  return (
    <>
      {data.map((e) => {
        return (
          <div key={e.id}>
            <img style={{ width: "250px" }} src={e.download_url} alt={e.author} />
            <p>Author name: {e.author}</p>
          </div>
        );
      })}

      <div>
        <button
          onClick={() => {
            setNum((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <p>Page: {num}</p>
        <button
          onClick={() => {
            setNum((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
