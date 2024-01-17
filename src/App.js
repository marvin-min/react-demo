import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, increment } from './features/counter/counterSlice';

import Counter from './features/counter/Counter';
import './App.css';


const App = () => {
  const count = useSelector(selectCount)
  const dispatch= useDispatch();
  return (
    <div className='main'>
      <h1 onClick={()=>{dispatch(increment())}}>total number {count}</h1>
      <Counter />
    </div>
  )
}

export default App