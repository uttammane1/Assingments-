// src/components/ConditionalMessage1.jsx

import React from "react";

function ConditionalMessage1({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>;
}

export default ConditionalMessage1;
