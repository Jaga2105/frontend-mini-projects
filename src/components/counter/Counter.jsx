import React, { useRef, useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [changedValue, setChangedValue] = useState(0);
  const changingAmountRef = useRef(null);

  const increment = () => {
    setChangedValue(changedValue + parseInt(changingAmountRef.current.value));
  };

  const decrement = () => {
    setChangedValue(changedValue - parseInt(changingAmountRef.current.value));
  };

  return (
    <div className="body-container">
      <div className="container">
        <div className="result">
          <span className="result_text">{changedValue}</span>
        </div>
        <div className="symbols">
          <button className="btn" onClick={increment}>
            +
          </button>
          <button className="btn" onClick={decrement}>
            -
          </button>
        </div>
        <div>
          <span className="inc_text">Increment/Decrement by:</span>
          <input
            className="input"
            type="number"
            defaultValue="1"
            ref={changingAmountRef}
          />
        </div>
        <button className="btn_reset" onClick={() => setChangedValue(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
