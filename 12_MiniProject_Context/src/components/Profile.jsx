import React, { useContext, useState } from "react";
import LoginContext, { pfpContext } from "./LoginContext";

const Profile = () => {
  let [user, setUser] = useContext(pfpContext);
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName(user);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="login">
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button>Login</button>
      </div>

      <div className="card">
        <h4>Welcome: {name}</h4>
        <h1>Aman Singh</h1>
        <h3>DOB: 19-04-2003</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          unde et eaque placeat voluptatem nisi consequatur itaque iste?
        </p>
      </div>
    </form>
  );
};

export default Profile;
