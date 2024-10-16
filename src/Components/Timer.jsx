import { useRef, useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
      <p className="text-3xl font-medium">Timer : <span className="text-emerald-500">{count}</span> Seconds</p>
      <button className="btn" onClick={() => clearInterval(timerRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
