// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adm, setAdm] = useState(false);

  return (
    <AuthContext.Provider value={{ adm, setAdm }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

