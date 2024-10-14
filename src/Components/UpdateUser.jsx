import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <p className="text-3xl font-semibold">Update User</p>
      <form onSubmit={handleSubmit}>
        <label>Enter new name: </label>
        <input
          type="text"
          placeholder="Enter new Name!"
          className="input input-primary"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
