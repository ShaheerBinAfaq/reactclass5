import React, {useState} from 'react';
import './App.css';
import Parent from './parent';

function App() {
  let [num, setNum] = useState(45);
  return (
    <div className="App">
      Hello World
      <Parent num={num}></Parent>
      <button onClick={()=>{setNum(++num)}}>Update number</button>
    </div>
  );
}

export default App;
