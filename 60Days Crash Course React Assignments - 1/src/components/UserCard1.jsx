// src/components/UserCard1.jsx

import React from "react";

function UserCard1({ name, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard1;
