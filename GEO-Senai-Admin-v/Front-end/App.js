import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroVaga from "./screens/CadastroVaga";
import TelaVagas from "./screens/TelaVagas";
import InformacoesVaga from "./screens/InformacoesVaga";
import TelaInicial from "./screens/TelaInicial";
import TelaTurmas from "./screens/TelaTurmas";
import CadastroTurma from "./screens/CadastroTurma";
import InformacoesTurma from "./screens/InformacoesTurma";
import TelaLogin from "./screens/TelaLogin";
import CadastroAdmin from "./screens/CadastroAdmin";
import EditarVaga from "./screens/EditarVaga";
import EditarTurma from "./screens/EditarTurma";
import TelaHorarios from "./screens/TelaHorarios";
import UploadImageStatus from "./screens/UploadImageStatus";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaVagas"
          component={TelaVagas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroVaga"
          component={CadastroVaga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InformacoesVaga"
          component={InformacoesVaga}
          options={{ headerShown: false }}
        />
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
          name="InformacoesTurma"
          component={InformacoesTurma}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroAdmin"
          component={CadastroAdmin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditarVaga"
          component={EditarVaga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditarTurma"
          component={EditarTurma}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaHorarios"
          component={TelaHorarios}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UploadImageStatus"
          component={UploadImageStatus}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
