// Tela de login da versão de administrador do GEO SENAI.
// Restringe o acesso a administradores.

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

const TelaLogin = ({ navigation }) => {
  const [logarUsuario, setLogarUsuario] = useState("");
  const [logarSenha, setLogarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const local = "http://10.110.12.19:8080/admin/verificar-dados";

  const realizarLogin = async () => {
    // Login chumbado :)
     if (logarUsuario === 'templarios' && logarSenha === 'tds2024') {
       navigation.navigate('TelaInicial');
     } else {
       Alert.alert('Erro', 'Usuário ou senha inválidos.');
     }

    // try {
    //   const response = await axios.post(local, {
    //     usuario: logarUsuario,
    //     senha: logarSenha,
    //   }, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     }
    //   });
    
    //   if (response.status === 200) {
    //     navigation.navigate("TelaInicial");
    //   } else {
    //     console.log("Erro ao tentar logar:", response.statusText);
    //     Alert.alert("Erro ao tentar logar");
    //   }
    // } catch (error) {
    //   Alert.alert("Ocorreu um erro ao tentar logar:", error.message);
    // }

    try {
      const response = await axios.post('http://10.110.12.19:8080/admin/login', {
        username,
        password,
      });
  
      if (response.data === 'Credenciais inválidas') {
        Alert.alert('Credenciais inválidas');
      } else {
        navigation.navigate('TelaInicial');
      }
    } catch (error) {
      Alert.alert('Erro ao fazer login');
      console.error(error);
    }

  };

  const efetuarLogin = () => {
    // Valide os campos, se necessário
    if (logarUsuario.trim() === "" || logarSenha.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
    }
      const dados = {
        usuario_admin: logarUsuario,
        senha_admin: logarSenha,
      };

      // Enviar os dados para o backend
      fetch('http://10.110.12.19:8080/admin/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      })
        .then((response) => {
          if (response.ok) {
            Alert.alert("Sucesso", "Login bem sucedido.");
            navigation.navigate("TelaInicial");
          } else {
            throw new Error("Erro ao efetuar login");
          }
        })
        .catch((error) => {
          Alert.alert(
            "Erro",
            "Erro ao efetuar login. Por favor, tente novamente mais tarde."
          );
        });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/logoSenai.png")}
        style={styles.senai}
      />

      <Text style={styles.BemVindo}>GEO SENAI Controller (for Admin)</Text>
      <Text style={styles.TextoMedio}>Faça log-in para continuar.</Text>

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
