import { useReducer, useState } from "react";

const CounterByReducer = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "incrementByAmount":
        return { ...state, count: state.count + action.payload };
      case "decrementByAmount":
        return { ...state, count: state.count - action.payload };
      case "reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: parseInt(inputValue) });
    setInputValue("");
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: parseInt(inputValue) });
    setInputValue("");
  };
  return (
    <div>
      <p className="text-3xl font-semibold">
        Counter: <span className="text-emerald-600">{state.count}</span>
      </p>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleDecrement}>
        Increment
      </button>
      <input
        className="input input-primary"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      />
      <button className="btn" onClick={handleIncrementByAmount}>
        Add
      </button>
      <button className="btn" onClick={handleDecrementByAmount}>
        Subtract
      </button>
    </div>
  );
};

export default CounterByReducer;
