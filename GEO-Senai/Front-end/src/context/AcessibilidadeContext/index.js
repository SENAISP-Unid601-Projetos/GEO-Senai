import React, { createContext, useState, useContext } from 'react';
import * as Speech from "expo-speech";

const AcessibilidadeContext = createContext();

export const useAcessibilidade = () => {
  return useContext(AcessibilidadeContext);
};

const falarTexto = (texto) => {
    Speech.speak(texto, { language: "pt-BR" });
};

export const AcessibilidadeProvider = ({ children }) => {
  const [acessibilidade, setAcessibilidade] = useState(false);

  const toggleAcessibilidade = () => {
    if (!acessibilidade) {
        falarTexto("Modo de acessibilidade ativado");
      }
    setAcessibilidade(!acessibilidade);
  };

  return (
    <AcessibilidadeContext.Provider value={{ acessibilidade, toggleAcessibilidade }}>
      {children}
    </AcessibilidadeContext.Provider>
  );
};
