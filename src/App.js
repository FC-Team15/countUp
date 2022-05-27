import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [Count, setCount] = useState(0);

  const countff = () => {
    setCount((prev) => prev + 1);
  };
  const countff1 = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button className="minus" onClick={countff1}>
        -
      </button>
      <span>{Count}</span>
      <button className="plus" onClick={countff}>
        +
      </button>
    </div>
  );
}
