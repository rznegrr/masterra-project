import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logOutHandler = () => {
    setToken(null);
  };
  
  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logOut: logOutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
