// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, useRef } from 'react';

class ErrorBoundary extends React.Component {
  state = { error : null}

  static getDerivedStateFromError(error) {
    return {error};
  }

  render() {
    const { error } = this.state;
    if(error) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const Child = () => {
  throw new Error("something is wrong");
  return <p>Child..</p>
}

function App() {
  return (
    <>
      <p>App</p>
      <ErrorBoundary fallback={<p>ERROR</p>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}


export default App;
