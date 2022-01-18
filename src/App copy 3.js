// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {

  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    //document.getElementById("input").focus();
    inputRef.current.focus();

    setTimeout(() => {
      divRef.current.style.backgroundColor = 'pink'
    }, 1000);
  },[])
  

  return (
    <>
      <input id="input" ref={inputRef} />
      <div ref={divRef} style={{ height : 100, width: 300, backgroundColor: "brown"}} />
    </>
  );
}


export default App;
