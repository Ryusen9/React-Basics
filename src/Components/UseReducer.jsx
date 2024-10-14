import { useReducer } from "react";

const UseReducer = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };
      case "Decrement":
        return { ...state, count: state.count - 1 };
      case "Reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        className="btn ml-4 mt-3"
        onClick={() => dispatch({ type: "Increment" })}
      >
        +
      </button>
      <button
        className="btn ml-4 mt-3"
        onClick={() => dispatch({ type: "Decrement" })}
      >
        -
      </button>
      <button
        className="btn ml-4 mt-3"
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset
      </button>
      <p>Count : {state.count}</p>
    </div>
  );
};

export default UseReducer;
