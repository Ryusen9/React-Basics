import { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <p>User Profile</p>
        <p>Name : {user.name}</p>
    </div>
  )
}

export default UserProfile