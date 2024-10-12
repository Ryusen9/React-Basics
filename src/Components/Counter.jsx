import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You count {count} times</p>
      <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="btn" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
