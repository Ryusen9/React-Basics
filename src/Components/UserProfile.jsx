import { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p className="text-3xl font-semibold">User Profile</p>
      <p className="text-2xl">
        Name : <span className="font-bold text-emerald-600">{user.name}</span>
      </p>
    </div>
  );
};

export default UserProfile;
