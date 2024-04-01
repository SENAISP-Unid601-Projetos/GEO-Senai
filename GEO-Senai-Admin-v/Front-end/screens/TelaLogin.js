// Tela de login da versão de administrador do GEO SENAI.
// Restringe o acesso a administradores.

import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaLogin = ({ navigation }) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const realizarLogin = async () => {
    // Login chumbado :)
    if (usuario === 'templarios' && senha === 'tds2024') {
      navigation.navigate('TelaInicial');
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./../assets/logoSenai.png")} style={styles.senai} />

      <Text style={styles.BemVindo}>GEO SENAI Controller (for Admin)</Text>
      <Text style={styles.TextoMedio}>Faça log-in para continuar.</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="gray"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="gray"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.eyeIcon}>
          <FontAwesome name={mostrarSenha ? "eye-slash" : "eye"} size={20} color="gray" />
        </Pressable>
      </View>

      <Pressable style={styles.classesButton} onPress={realizarLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
        <FontAwesome name="arrow-right" size={20} color="#ffffff" />
      </Pressable>

      <Text style={styles.textoOculto}>Todos os direitos reservados para @Templarios.</Text>
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
    borderColor: 'white',
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
    fontSize: 20,
    fontWeight: "bold",
  },
  BemVindo: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  TextoMedio: {
    color: "white",
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 50,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
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
    position: 'absolute',
    right: 10,
    top: 20,
  },
  textoOculto: {
    color: '#C8C8C8',
  },
});

export default TelaLogin;
