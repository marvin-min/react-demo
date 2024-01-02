import React,  { useCallback, useState } from 'react';
const Calculator = ({number}) => {
  const [result, setResult] = useState(0);
  const sumTotal = useCallback(() => {
    console.log(number)

    console.log('start calc....')
    let total = number;
    // 模拟耗时
    for (let i = 0; i < 10000; i++) {
      console.log('calc....')
      total += i;
    }
    console.log('return ...' + total)
    setResult(total);
  }, [number]);
  
  return <>
    <div>{result}</div>
    {/* 这里使用useCallback，避免每次父组件更新时，子组件也跟着更新 */}
    <div><button onClick={sumTotal}>add..</button></div>
  </>
}

//cache component
export default React.memo(Calculator);
// export default Calculator