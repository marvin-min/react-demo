import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';

const Typer = () => {
  const [number, setNumber] = useState(0);
  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      console.log('handle type', value)
    },
    // delay in ms
    1000
  );

  const handleType = () => {
    setNumber((pre) => pre + 1);
    debounced(number)
  }
  return (
    <div>
      <button onClick={handleType}>Type</button>
    </div>
  )
}

export default Typer