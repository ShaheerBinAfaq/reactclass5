import React from 'react';

import './App.css';

function Child(props) {
  return (
    <div className="Child">
      Child {props.num}
    </div>
  );
}

export default Child;
