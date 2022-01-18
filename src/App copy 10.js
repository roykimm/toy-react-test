// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App () {

  const [ data, setData ] = useState();
  const [ error, setError ] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json')
      .then(function(res) {
        return res.json();
      })
      .then(function(myJson){
        console.log(JSON.stringify(myJson))
        setData(myJson.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      })
  },[])

  if(error != null) {
    return <p>Error</p>
  }

  if(data == null){
    return <p>Loading...</p>;
  }


  return (
    <div>
      <p>People</p>
      {data.people.map((person) => (
        <div>
          <span>name : {person.name}</span>
          <span>age : {person.age}</span>
        </div>
      ))}
    </div>
  )
}


export default App;
