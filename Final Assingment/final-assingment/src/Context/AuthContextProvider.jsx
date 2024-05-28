import { createContext, useState } from "react";
import PropTypes from 'prop-types';


// C P C

// 1
export const AuthContext = createContext();

// 2A
export function AuthContextProvider({ children }) {
    AuthContextProvider.propTypes = {
        children: PropTypes.node.isRequired, // Add prop validation for the 'children' prop
      };
      
  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: false,
    token: null,
  });

  const login = (token) => {
    setAuthDetails({
      isLoggedIn: true,
      token: token,
    });
  };

  const logout = () => {
    setAuthDetails({
      isLoggedIn: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


