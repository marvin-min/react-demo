import React from 'react'
import { useCallback } from 'react';
const Order = ({ productId }) => {
  console.log('render' + productId);
    // 这里使用 useCallback 来优化性能，确保 handleSubmit 函数只在 productId 发生变化时才会重新创建
    const handleSubmit = useCallback((orderDetails) => {
      console.log(productId + " --> "+ orderDetails);
    }, [productId]);

  return (
    <div>
      <button onClick={handleSubmit}>Order Now</button>
    </div>
  )
}
export default React.memo(Order);

// export default Order;