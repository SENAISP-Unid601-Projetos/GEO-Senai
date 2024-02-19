// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroTurma from './CadastroTurma';
import TelaTurmas from './TelaTurmas';
import TelaInicial from './TelaInicial';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaTurmas" component={TelaTurmas} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroTurma" component={CadastroTurma} options={{ headerShown: false }} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
