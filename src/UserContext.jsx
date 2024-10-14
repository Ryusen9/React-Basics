import { createContext, useState } from "react";
import props from "prop-types"

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Avocado" });

  const updateName = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateName }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: props.node.isRequired,
};
export { UserContext, UserProvider };
