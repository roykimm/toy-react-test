// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App () {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [btnEnable, setBtnEnable] = useState(true);

  const handleId = (e) => {
    setId(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {

    if(id && password){
      setBtnEnable(false);
    } else {
      setBtnEnable(true);
    }
  },[id, password])

  const handleSubmit = () => {

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">id:</label>
        <input type="text" id="id" name="id" value={id} onChange={handleId} />
        <br />
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePassword}/>
        <br />
        <button type="submit" disabled={btnEnable}>Login</button>
      </form>
    </>
  )
}


export default App;
