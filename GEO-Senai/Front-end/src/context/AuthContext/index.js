// AuthContext.js
import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [mapaCaminho, setMapaCaminho] = useState(
    "./../../../assets/mapaSenai.png"
  );

  return (
    <AuthContext.Provider value={{ mapaCaminho, setMapaCaminho }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
