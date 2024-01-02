import React, { useEffect, useRef, useState } from 'react'
import './vwDemo.css';
const VwDemo = () => {
  const bottomRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const lvRef = useRef(null);
  const viewport = window.visualViewport;
  function viewportHandler() {
    // Since the bar is position: fixed we need to offset it by the visual
    // viewport's offset from the layout viewport origin.
    var offsetX = viewport.offsetLeft;
    var offsetY = viewport.height
                - lvRef.current.getBoundingClientRect().height
                + viewport.offsetTop;

    // You could also do this by setting style.left and style.top if you
    // use width: 100% instead.
    bottomRef.current.style.transform = 'translate(' + 
                                offsetX + 'px,' +
                                offsetY + 'px) ' +
                                'scale(' + 1/viewport.scale + ')'
  }

  useEffect(() => {
    document.head.innerHTML+=`
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    `
    window.visualViewport.addEventListener('resize', viewportHandler);
    window.visualViewport.addEventListener('scroll', viewportHandler);
    return () => {
      window.visualViewport.removeEventListener('scroll', viewportHandler);
      window.visualViewport.removeEventListener('resize', viewportHandler);
    }
  }, []);

  return (
    <>
      <div id="bottombar" ref={bottomRef}>
        <input type='text'/>
      </div>
      <div id="forcescrolling"> {Array.from(Array(100).keys()).map(item => <li key={item}>{item}</li>)} </div>
      <div id="layoutViewport" ref={lvRef}>asdfasdfsa</div>
    </>
  )
}

export default VwDemo