import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from "react-native-responsive-fontsize";

const TelaLogin = ({ navigation }) => {
  const [logarUsuario, setLogarUsuario] = useState("");
  const [logarSenha, setLogarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const local = "http://10.110.12.19:8080/admin/login";  // URL do endpoint de login
  const nuvem = "https://appback.azurewebsites.net/admin/login";

  const realizarLogin = async () => {
    try {
      const response = await axios.post(nuvem, {
        usuarioAdmin: logarUsuario,
        senhaAdmin: logarSenha,
      });

      if (response.data === 'Credenciais inválidas') {
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
      } else {
        const token = response.data;
        await AsyncStorage.setItem('authToken', token);  // Armazena o token
        navigation.navigate('TelaInicial');
      }
    } catch (error) {
      Alert.alert('Erro ao fazer login');
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/logoSenai.png")}
        style={styles.senai}
      />

      <Text style={styles.bemVindo}>GEO SENAI Controller (for Admin)</Text>
      <Text style={styles.textoMedio}>Faça log-in para continuar.</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="gray"
        value={logarUsuario}
        onChangeText={(text) => setLogarUsuario(text)}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="gray"
          secureTextEntry={!mostrarSenha}
          value={logarSenha}
          onChangeText={(text) => setLogarSenha(text)}
        />
        <Pressable
          onPress={() => setMostrarSenha(!mostrarSenha)}
          style={styles.eyeIcon}
        >
          <FontAwesome
            name={mostrarSenha ? "eye-slash" : "eye"}
            size={20}
            color="gray"
          />
        </Pressable>
      </View>

      <Pressable style={styles.classesButton} onPress={realizarLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
        <FontAwesome name="arrow-right" size={20} color="#ffffff" />
      </Pressable>

      <Text style={styles.textoOculto}>
        Todos os direitos reservados para @Templarios.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#171a4a",
    padding: 20,
  },
  senai: {
    width: 200,
    height: 50,
  },
  classesButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
    width: "85%",
    height: 60,
  },
  buttonText: {
    color: "white",
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  bemVindo: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  textoMedio: {
    color: "white",
    fontSize: RFValue(20),
    fontWeight: "normal",
    marginBottom: 50,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  textoOculto: {
    color: "#C8C8C8",
  },
});

export default TelaLogin;
