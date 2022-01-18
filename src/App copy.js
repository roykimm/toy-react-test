// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  function useLocalStorage(itemName, value = "") {
    const [state, setState] = useState(() => {
      return window.localStorage.getItem(itemName) || value;
    });

    useEffect(() => {
      window.localStorage.setItem(itemName, state);
    }, [state]);

    return [state, setState];
  }

  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [result, setResult] = useLocalStorage("result");
  const [typing, setTyping] = useLocalStorage("typing", false);

  function handleChange(event) {
    
    setKeyword(event.target.value);
    setTyping(true);
  } 

  function handleClick() {
    setTyping(false);
    setResult(`we find results of ${keyword}`)
  }
  
  return (
    <div className="App">
      <input onChange={handleChange} value={keyword}/>
      <button onClick={handleClick} >search</button>
      <p>
        {typing ? `Looking for... ${keyword}` : result}
      </p>
    </div>
  );
}

export default App;
