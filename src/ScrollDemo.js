import React, { useEffect, useRef, useState } from 'react'

import './ScrollDemo.css';

const ScrollDemo = () => {
  const data = Array.from(Array(100).keys())
  const [height, setHeight] = useState(0);
  const [body, setBody] = useState(0);
  const rootRef = useRef(null);
  const lvRef = useRef(null);
  const bottomRef = useRef(null);
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


  // const viewportResize = () => {
  //   setBody(window.visualViewport.height)
  //   window.resizeTo(window.visualViewport.width, window.visualViewport.height);
  //   // document.body.style.overflow = "hidden";
  //   // rootRef.current.scrollIntoView();
   
  //   setHeight(window.visualViewport.height)

  //   //setHeight({...height, '--composer-vh': `${window.visualViewport.height}px`});
 
  // }


  // useEffect(() => {
  //   document.head.innerHTML+=`
  //   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
  //   `
  //   setHeight(rootRef.current.clientHeight);
  //   setBody(window.visualViewport.height)

  //   window.visualViewport.addEventListener('resize', viewportResize);
  //   return () => window.visualViewport.removeEventListener('resize', viewportResize);
  // }, []);

  

  return (
    <>
      <div className='content-container' ref={rootRef} >
        <div>height:{height}, body: {body}</div>
        <ul>
          {data.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className='bottom-bar' ref={bottomRef}>
          <input type='text' className='keyword-input'/><button>submit</button>
      </div>
      <div id="layoutViewport" ref={lvRef}></div>
    </>
  )
}

export default ScrollDemo