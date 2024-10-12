import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl">Shopping List</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-4"
      >
        <input
          className="input input-primary"
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input input-primary"
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity = {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
