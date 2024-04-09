import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InformacoesVaga from "./screens/InformacoesVaga";
import TelaTurmas from "./screens/TelaTurmas";
import TelaInicial from "./screens/TelaInicial";
import InformacoesTurma from "./screens/InformacoesTurma";
import Carrossel from "./src/components/Carrossel";
import TelaMapa from "./screens/TelaMapa";
import TelaVagas from "./screens/TelaVagas";
import TelaQR from "./screens/TelaQR";
import TelaFoto from "./screens/TelaFoto";
import TelaHorarios from "./screens/TelaHorarios";
import PerguntasFrequentes from "./screens/PerguntasFrequentes";
import TelaVoz from "./screens/TelaVoz";

const Stack = createStackNavigator();

const App = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    let idleTimer = null;

    const handleIdle = () => {
      idleTimer = setTimeout(() => {
        setShowCarousel(true);
      }, 4000000); // 40 segundos em milissegundos
    };

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      handleIdle();
    };

    const handleInteraction = () => {
      resetIdleTimer();
      if (showCarousel) {
        setShowCarousel(false);
      }
    };

    // Adiciona ouvintes de eventos para reiniciar o temporizador em interações do usuário
    const addEventListeners = () => {
      // Use os eventos de interação adequados para o seu aplicativo
      // Aqui, estamos adicionando um ouvinte de toque para redefinir o temporizador
      document.addEventListener("touchstart", handleInteraction);
    };

    addEventListeners();
    handleIdle();

    return () => {
      clearTimeout(idleTimer);
      // Remova os ouvintes de eventos quando o componente for desmontado
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [showCarousel]);

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="TelaTurmas"
          component={TelaTurmas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaVagas"
          component={TelaVagas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InformacoesVaga"
          component={InformacoesVaga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InformacoesTurma"
          component={InformacoesTurma}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaMapa"
          component={TelaMapa}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="TelaQR"
          component={TelaQR}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaFoto"
          component={TelaFoto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaHorarios"
          component={TelaHorarios}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="PerguntasFrequentes"
          component={PerguntasFrequentes}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="TelaVoz"
          component={TelaVoz}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {showCarousel && <Carrossel onClose={handleCloseCarousel} />}
    </NavigationContainer>
  );
};

export default App;
