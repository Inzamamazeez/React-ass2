import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount]= useState(0);
  function handleClick(){
    setCount(count+1);
  }
  function handleClickto(){
    if(count>0){
    setCount(count-1);
  }
}
  return (
    <div className="App">
      <h1>Counter App:</h1>
      <h2>{count}</h2>
      <button onClick={ handleClick}>Increase the count</button>
      &nbsp;
      &nbsp;
      <button onClick={handleClickto}>Decrease the count</button>
    </div>
  );
}

export default App;
