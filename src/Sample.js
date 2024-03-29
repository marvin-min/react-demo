

import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import './Sample.css';

function Sample() {
  const [height, setHeight] = useState({ '--composer-vh': '100vh', "--hero-image": `url(${'https://images.squarespace-cdn.com/content/v1/6282ec55d5f3c229291fcb47/1674437725718-PQYL45LC1J5G7XX6ZAIM/image-asset.png'})` });
  const [body, setBody] = useState(0);
  
  const viewportResize = () => {
    setBody(window.visualViewport.height)
    document.body.style.overflow = "hidden";
    window.resizeTo(window.visualViewport.width, window.visualViewport.height);
    setHeight({...height, '--composer-vh': `${window.visualViewport.height}px`});
  }
  useEffect(()=>{
    window.visualViewport.addEventListener('resize', viewportResize);
    return () => window.removeEventListener('resize', viewportResize);
  }, []);
  //{}
  return (
    <div className="home" style={height}>
      <div className="fixed-element">
        <div className="textarea">
          <h1>{body} ----> { height["--composer-vh"] }</h1>
            <textarea>Steps to reproduce:
                &#13;&#10;1. Open this page in Safari iOS 15
                &#13;&#10;2. Tap the textarea (result: the floating address bar hides the submit button when the keyboard is visible)
                &#13;&#10;3. Update Safari settings, set address bar to be at the top
                &#13;&#10;4. Tap textarea again (result: submit button is visible, correctly)
            </textarea>
        </div>
      </div>
      <div className="button">
            <button>Submit</button>
        </div>
    </div>
  );
}

export default Sample;
