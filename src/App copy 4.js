// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target);

    alert(`firstname : ${event.target[0].value} , lastName : ${event.target[1].value}, cars: ${event.target[2].value}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First name:</label>
        <br />
        <input type="text" id="fname" name="fname"/>
        <br />
        <label htmlFor="">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname"/>
        <br />
        <label htmlFor="">choose car:</label>
        <br />
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="hyundai">Hyundai</option>
          <option value="hammer">Hammer</option>
        </select>
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}


export default App;
