import React from "react";
import { useState } from "react";
import "../App.css";

const Counter = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // const [vote, setVote] = useState("your opinion counts!");
  let vote = "your opinion counts!";
  let result = like > dislike ? "Tinubu remains president" : "Tinubu must go";

  return (
    <div className="count">
      {/* <button onClick={() => setCount(count + 1)}> increase</button>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count - 1)}>decrease</button> */}
      <h2>Do you like Tinubu</h2>

      <div className="container">
        <button onClick={() => setDislike(dislike + 1)}>
          I don't like him
        </button>
        <h2> {dislike}</h2>
      </div>

      <div className="container">
        <button onClick={() => setLike(like + 1)}>I like him</button>
        <h2>{like}</h2>
      </div>

      <div>
        <h1>{result} </h1>
      </div>
    </div>
  );
};

export default Counter;
