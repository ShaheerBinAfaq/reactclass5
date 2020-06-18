import React, {useState} from 'react';
import './App.css';
import Parent from './parent';
import ValueContext from './ValueContext';

function App() {  
  let value = 81;
  return (
    <ValueContext.Provider value={value}>
    <div className="App">
      Hello World
      <Parent></Parent>            
    </div>
    </ValueContext.Provider>
  );
}

export default App;
