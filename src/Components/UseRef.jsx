import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  console.log(inputRef);
  const handleBtn = () => {
    inputRef.current.focus();
    inputRef.current.value = "Avocado";
  };
  return (
    <div className="m-4">
      <input className="input input-primary" type="text" ref={inputRef} />
      <button className="btn ml-4 bg-blue-500 text-white" onClick={handleBtn}>
        Focus
      </button>
    </div>
  );
};
export default UseRef;
