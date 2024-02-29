import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroTurma from './CadastroTurma';
import TelaTurmas from './TelaTurmas';
import TelaInicial from './TelaInicial';
import InformacoesTurma from './InformacoesTurma';
import Carrossel from './src/components/Carrossel';
import { AuthProvider } from './src/context/AuthContext'; // Importe o provedor de contexto de autenticação

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
      document.addEventListener('touchstart', resetTimerOnInteraction, false);
      document.addEventListener('mousedown', resetTimerOnInteraction, false);
    };

    // Remove os ouvintes de eventos
    const removeEventListeners = () => {
      document.removeEventListener('touchstart', resetTimerOnInteraction, false);
      document.removeEventListener('mousedown', resetTimerOnInteraction, false);
    };

    addEventListeners();

    return () => {
      clearTimeout(idleTimer);
      removeEventListeners();
    };
  }, []);

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <AuthProvider> {/* Envolve o componente App com o provedor de contexto de autenticação */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial">
          <Stack.Screen
            name="TelaTurmas"
            component={TelaTurmas}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CadastroTurma"
            component={CadastroTurma}
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
        </Stack.Navigator>
        {showCarousel && <Carrossel onClose={handleCloseCarousel} />}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
