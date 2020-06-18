import React from 'react';
import './App.css';
import Child from './child';

function Parent(props) {
  return (
    <div className="Parent">
      Parent <Child ></Child>
    </div>
  );
}

export default Parent;
