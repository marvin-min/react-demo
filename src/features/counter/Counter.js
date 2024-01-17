import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setByAmount, selectCount, doSearch } from './counterSlice';
import './counter.css';
const Counter = () => {
  const count = useSelector(selectCount)
  const [inited, setInited] = useState(false);
  const dispatch = useDispatch();

  const initDeafultValue = ()=> {
    dispatch(setByAmount(10));
  }
  useEffect(() => {
    if (!inited) {
      console.log('init value...')
      initDeafultValue();
      setInited(true);
    }
  },[])

  return (
    <div className='counter-container'>
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <div>{count}</div>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      <div>
        <button onClick={()=>{dispatch(doSearch())}}>Search</button>
      </div>
    </div>
  )
}

export default Counter