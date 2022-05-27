import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from './counter/countSlice';

import './App.css';

export default function App() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <button className="minus" onClick={() => dispatch(minus())}>
        -
      </button>
      <span>{counter}</span>
      <button className="plus" onClick={() => dispatch(plus())}>
        +
      </button>
    </div>
  );
}
