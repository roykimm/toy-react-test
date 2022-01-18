// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, useRef } from 'react';

const todos = [
  {id: "1", value : "밥먹기"},
  {id: "2", value : "잠자기"},
  {id: "3", value : "벨라랑 놀기"},
  {id: "4", value : "주주랑 놀기"},
]

function App() {

  const [items, setItems] = useState(todos);
  const handleDoneClick = (todo) => {
    setItems(items => items.filter((item) => item !== todo));
  }

  const handleRestoreClick = () => {
    setItems((items) => [
      ...items,
      todos.find((item) => !items.includes(item))
    ])
  }

  return (
    <>
      {
        items.map((todo, index) => (
          <div key={todo.index}>
            <span>{todo.value}</span>
            <button onClick={() => handleDoneClick(todo)}>Done</button>
          </div>
        ))
      }
      <button onClick={handleRestoreClick}>Restore</button>
    </>
  );
}


export default App;
