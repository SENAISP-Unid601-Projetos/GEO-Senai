// Tela inicial da versão de administrador do GEO SENAI


import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaInicial = ({ navigation }) => {
  const botaoTurmas = () => {
    navigation.navigate("TelaTurmas");
  };

  const botaoVagas = () => {
    navigation.navigate("TelaVagas");
  };

  const botaoAdmin = () => {
    navigation.navigate("CadastroAdmin");
  };

  return (
    <View style={styles.container}>
      <Image source={require("./../assets/Brasil.png")} style={styles.logo} />
      <Image source={require("./../assets/logoSenai.png")} style={styles.senai} />

      <Text style={styles.BemVindo}>
        Bem-vindo a versão de administrador do GEO SENAI.
      </Text>
      <Text style={styles.TextoMedio}>O que vamos fazer hoje?</Text>

      <Pressable style={styles.classesButton} onPress={botaoTurmas}>
        <Text style={styles.buttonText}>Gerenciar turmas</Text>
        <FontAwesome name="users" size={30} color="#ffffff" />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoVagas}>
        <Text style={styles.buttonText}>Gerenciar vagas</Text>
        <FontAwesome name="user-plus" size={30} color="#ffffff" />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoAdmin}>
        <Text style={styles.buttonText}>Cadastrar administrador</Text>
        <FontAwesome name="key" size={30} color="#ffffff" />
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
    backgroundColor: "#E8E8E8",
    padding: 20,
  },
  senai: {
    width: 200,
    height: 50,
  },
  classesButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginBottom: 20,
    alignItems: "center",
    width: "85%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 40,
    width: 70,
    height: 53,
    position: "absolute",
    top: 10,
    left: 10,
  },
  BemVindo: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  TextoMedio: {
    color: "black",
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 50,
  },
  textoOculto: {
    color: "#C8C8C8",
    fontSize: 10,
  },
});

export default TelaInicial;
