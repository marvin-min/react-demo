import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, increment } from './features/counter/counterSlice';

import Counter from './features/counter/Counter';
const CounterDemo = () => {
  const count = useSelector(selectCount)
  const dispatch= useDispatch();
  return (
    <>
      <h1 onClick={()=>{dispatch(increment())}}>total number {count}</h1>
      <Counter />
    </>
  )
}

export default CounterDemo