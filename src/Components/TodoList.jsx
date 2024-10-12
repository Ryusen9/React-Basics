import { useState } from "react";

const TodoList = () => {
  const [todos, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = e => {
    setInputValue(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodo([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div className="flex gap-4 flex-col items-center justify-center h-screen w-full">
      <h1 className="text-2xl">Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="Add a new todo" className="input border-2 border-emerald-200 mr-2" onChange={handleChange}/>
        <button type="submit" className="btn">
          Add todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
            <li className="list-disc" key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
