import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = (tokenValue, emailValue) => {
    setIsLoggedIn(true);
    setToken(tokenValue);
    setEmail(emailValue);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContextProvider;
