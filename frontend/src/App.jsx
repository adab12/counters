import React from "react";
import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="count">
      <button onClick={() => setCount(count + 1)}> increase</button>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
};

export default Counter;
