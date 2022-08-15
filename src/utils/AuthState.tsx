import React, { createContext, useState } from "react";

interface AuthStatusState {
  loggedIn: boolean;
  setLoggedIn?: any;
}

const initialAuthStatus: AuthStatusState = {
  loggedIn: false,
};

export const AuthStatusContext = createContext(initialAuthStatus);

export const AuthStatusProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <AuthStatusContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthStatusContext.Provider>
  );
};
