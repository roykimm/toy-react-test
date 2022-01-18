// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumber = event.target.elements.phone.value;
    if(phoneNumber.startsWith(0)) {
      alert("good");
    } else {
      alert("bad");
    }
  }

  const handleChange = (e) => {
    
    if(e.target.value.startsWith(0)) {
      setMessage("phone number is valid");
    } else {
      setMessage("phone number should starts with 0");
    }
    setPhoneNumber(e.target.value);
  } 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input id="phone" name="phone" onChange={handleChange} />
        <p>{message}</p>
        <br />
        <br />
        <button type="submit" disabled={phoneNumber.length === 0 || message.length !== "phone number is valid"}>Submit</button>
      </form>
    </>
  );
}


export default App;
