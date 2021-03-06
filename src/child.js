import React, { useContext } from 'react';

import './App.css';
import ValueContext from './ValueContext';

function Child(props) {
  let value = useContext(ValueContext);
    return (
    <div className="Child">
      Child {value}
    </div>
  );
}

export default Child;
