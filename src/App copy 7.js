// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App () {
  
  const handleSubmit = () => {

    console.log("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">id:</label>
        <input type="text" id="id" name="id" />
        <br />
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}


export default App;
