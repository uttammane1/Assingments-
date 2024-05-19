// src/components/UserInfo1.jsx

import { useState } from "react";

function UserInfo1() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleInputChange}
      />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserInfo1;
