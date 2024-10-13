import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("BasicEffect Triggered!");
  }, []);

  return (
    <div>
      <h1>Check the console</h1>
    </div>
  );
};

export default BasicEffect;
