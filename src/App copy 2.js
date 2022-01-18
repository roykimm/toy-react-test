// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [show, setShow] = useState(false);

  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <button onClick={handleClick}>Search</button>
      { show ? <Child /> : null}
    </>
  );
}

const Child = () => {

  const [text, setText] = useState(() => {
    console.log("Child useState");
    return "";
  })

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <input onChange={handleChange}/>
      <p>{text}</p>
    </>
  )
}

export default App;
