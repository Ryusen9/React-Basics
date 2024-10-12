import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-4 h-screen w-full justify-center items-center">
      <p className="text-3xl">User Profile</p>
      <div className="flex items-center gap-3">
        <label>Name: </label>
        <input
          className="input input-primary"
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="flex items-center gap-3">
          Age:
          <input
            className="input input-primary"
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <p className="text-3xl">Profile Information</p>
      <div>
        <p className="font-semibold">Name : {profile.name}</p>
        <p className="font-semibold">Age : {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
