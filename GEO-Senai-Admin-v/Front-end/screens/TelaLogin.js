import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaLogin = ({ navigation }) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const realizarLogin = async () => {
    try {
      // Enviar os dados para o servidor
      const response = await fetch('http://10.110.12.19:8080/admin/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, senha })
      });

      // Verificar a resposta do servidor
      if (response.ok) {
        // Login bem-sucedido
        navigation.navigate('TelaInicial');
      } else {
        // Login falhou
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
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
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="gray"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

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
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textoOculto: {
    color: '#C8C8C8',
  },
});

export default TelaLogin;
