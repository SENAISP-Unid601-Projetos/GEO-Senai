import React, { createContext, useState, useContext } from 'react';

const ApresentacaoContext = createContext();

export const useApresentacao = () => {
  return useContext(ApresentacaoContext);
};

export const ApresentacaoProvider = ({ children }) => {
  const [modoApresentacao, setModoApresentacao] = useState(false);

  const toggleApresentacao = () => {
    setModoApresentacao(!modoApresentacao);
  };

  const [modalVisibility, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <ApresentacaoContext.Provider value={{ modoApresentacao, toggleApresentacao, modalVisibility, setModalVisibility, toggleModal }}>
      {children}
    </ApresentacaoContext.Provider>
  );
};
