import { createContext, useState } from "react";

// Step 1: Create Context
export const AuthContext = createContext();

// Step 2.A : Provide Context
export function AuthContextProvider(props) {
  // State to manage loggedin status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to log in

  const login = () => setIsLoggedIn(true);

  // Function to log out

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      // Providing authentication state and functions to children components
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
