import { useState } from "react";
import { useCount } from "../hooks/useCount";
import { Link } from "react-router-dom";
import "../App.css";

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <div className="CounterWrapper">
        <button className="counterBtn" onClick={increment}>
          increment
        </button>
        <button disabled={!count} className="counterBtn" onClick={decrement}>
          decrement
        </button>
        <button className="counterBtn" onClick={reset}>
          reset
        </button>
      </div>

      <div  class="breakHolder">
        <div class="input-container">
          <input
            className="input"
            value={newCount}
            type="number"
            onChange={handleOnChange}
          />
          <label class="label">Input title</label>
          <div class="top-line"></div>
          <div class="under-line"></div>
        </div>

        <button className="counterBtn" onClick={handleOnClick}>
          Set count
        </button>
      </div>
      <div>
        <Link to="/"> Back to Homepage</Link>
      </div>
    </div>
  );
}
