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


const Stack = createStackNavigator();

const App = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    let idleTimer = null;

    const handleIdle = () => {
      idleTimer = setTimeout(() => {
        setShowCarousel(true);
      }, 40000); // 40 segundos em milissegundos
    };

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      handleIdle();
    };

    handleIdle();

    const resetTimerOnInteraction = () => {
      resetIdleTimer();
    };

    // Adiciona os ouvintes de eventos
    const addEventListeners = () => {
      // Utilize os eventos de interação do React Native, como touchstart, mousedown, etc.
      // No caso de React Native, você pode usar eventos de toque (touch), gestos ou interações específicas do seu aplicativo.
      // Por exemplo, você pode usar onPress em componentes Touchable para detectar interações do usuário.
      // Neste exemplo, deixarei o código de adição de ouvintes de eventos vazio, pois não é necessário para o carrossel.
    };

    // Não é necessário remover ouvintes de eventos no React Native

    // Adiciona os ouvintes de eventos (não é necessário para o carrossel)
    addEventListeners();

    return () => {
      clearTimeout(idleTimer);
      // Não é necessário remover ouvintes de eventos no React Native
    };
  }, []);

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
      </Stack.Navigator>
      {showCarousel && <Carrossel onClose={handleCloseCarousel} />}
    </NavigationContainer>
  );
};

export default App;
