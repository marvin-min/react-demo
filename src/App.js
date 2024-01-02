
import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Order from './components/Order';
import Calculator from './components/Calculator';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [sum, setSum] = useState(0);
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);
  
  const memOrder = useMemo(() => <Order productId={count}></Order>, [count]);

  
  return <>
    {memOrder}
    <ul>
      <li>count: {count}</li>
      <li>count1: {count1}</li>
      <li>count2: {count2}</li>
      <li>sum: {sum}</li>
      <li>sum1: {sum1}</li>
      <li>sum2: {sum2}</li>
    </ul>
    <div>
      <Calculator number={count} />
      <Calculator number={count1} />
      <Calculator number={count2} />
    </div>
  </>
}

export default App;
