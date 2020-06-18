import React, {useState} from 'react';
import './App.css';
import Parent from './parent';
import ValueContext from './ValueContext';

function App() {  
  let value = useState(81);
  return (
    <ValueContext.Provider value={value}>
    <div className="App">
      Hello World
      <Parent></Parent>
      <button onClick={()=>{value[1](++value[0])}}>update num</button>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
