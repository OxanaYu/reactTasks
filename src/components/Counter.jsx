import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className="counter_container">
        <p>Counter: {count}</p>
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
      </div>
    </div>
  );
};

export default Counter;
