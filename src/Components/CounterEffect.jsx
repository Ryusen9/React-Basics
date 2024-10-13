import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Counter ${count}`;
  }, [count]);
  return (
    <div>
      <p>Your count : {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default CounterEffect;
