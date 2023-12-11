
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import './App.css';

function App() {
  const heroRef = useRef();
  function viewportResize() {
    const composerVH = window.visualViewport.height,
        doc = document.documentElement;
    console.log(window.visualViewport);
    doc.style.setProperty("--composer-vh", `${composerVH}px`);
  }
  useEffect(()=>{
    window.visualViewport.addEventListener('resize', viewportResize);
    heroRef.current.style.setProperty("--hero-image", `url(${'https://www.active.com/asset_pipeline/hero/a3-hero-c25k-ec8d82aaf12ad1dff2655f67baae58bf005e013246bc223c3120f507907c7d02.jpg'})`);
    return () => window.removeEventListener('resize', viewportResize);
  },[]);
  return (
    <div className="home" ref={heroRef}>
      <div className="fixed-element">
        <div className="textarea">
            <textarea>Steps to reproduce:
                &#13;&#10;1. Open this page in Safari iOS 15
                &#13;&#10;2. Tap the textarea (result: the floating address bar hides the submit button when the keyboard is visible)
                &#13;&#10;3. Update Safari settings, set address bar to be at the top
                &#13;&#10;4. Tap textarea again (result: submit button is visible, correctly)
            </textarea>
        </div>
        <div className="button">
            <button>Submit</button>
        </div>
    </div>
    </div>
  );
}

export default App;
