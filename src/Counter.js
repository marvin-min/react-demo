import React, { useState } from 'react'
import './counter.css';

const Counter = ({initCounter = 0}) => {
  const [count, setCount] = useState(initCounter);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <>
      <h1 className='title'>Count: <span data-testid='count'>{count}</span></h1>
      <div className='btns'>
        <button onClick={increment} data-testid='increment'>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={restart}>restart</button>
        <button onClick={switchSigns}>switchSigns</button>
      </div>
    </>
  )
}

export default Counter