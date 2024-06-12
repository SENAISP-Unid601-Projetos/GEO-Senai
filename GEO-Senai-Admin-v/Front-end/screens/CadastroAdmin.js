// Tela que possibilita ao administrador responsável  que permita a outros colaboradores o acesso
// a versão de administrador do GEO SENAI 

import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import { RFValue } from "react-native-responsive-fontsize";

const CadastroAdmin = ({ navigation }) => {
  const [usuario, setUsuario] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");

  const local = "http://10.110.12.19:8080/admin/cadastrar";
  const nuvem = "https://appbackend1.azurewebsites.net/admin/cadastrar";

  const enviarDados = () => {
    // Valide os campos, se necessário
    if (usuario.trim() === "" || senha1.trim() === "" || senha2.trim() === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
    } else if (senha1 === senha2) {
      // Criar objeto de administrador com os dados
      const novoAdmin = {
        usuarioAdmin: usuario,
        senhaAdmin: senha1,
      };

      // Enviar os dados para o backend
      fetch(nuvem, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoAdmin),
      })
        .then((response) => {
          if (response.ok) {
            // Turma adicionada com sucesso, fazer algo, se necessário
            Alert.alert("Sucesso", "Novo administrador cadastrado com sucesso.");
            navigation.navigate("TelaInicial");
          } else {
            throw new Error("Erro ao efetuar cadastro");
          }
        })
        .catch((error) => {
          console.error("Erro ao efetuar cadastro:", error);
          Alert.alert(
            "Erro",
            "Erro ao efetuar cadastro. Por favor, tente novamente mais tarde."
          );
        });
    } else {
      Alert.alert("Erro", "As senhas não coincidem");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.voltarSeta} onPress={() => navigation.goBack()}>
      <Image
          source={require('./../assets/icons/arrow-left-solid.png')}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>

      <View style={styles.containerForm}>
        <Text style={styles.headerText}>Cadastrar novo administrador</Text>
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
          value={senha1}
          onChangeText={(text) => setSenha1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="gray"
          value={senha2}
          onChangeText={(text) => setSenha2(text)}
        />
        <View style={styles.containerBtnForm}>
          <Pressable style={styles.btnPublicar} onPress={enviarDados}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    flex: 1,
    padding: 20,
  },
  containerForm: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    alignItems: "center", // Corrige o alinhamento vertical
  },
  containerBtnForm: {
    alignItems: "flex-end",
  },
  voltarSeta: {
    marginTop: 40,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: "#E8E8E8", 
    borderWidth: 2, 
    borderRadius: 8, 
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
  },
  btnPublicar: {
    backgroundColor: "#ff0000",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize:RFValue(16),
    fontWeight: "bold",
    padding: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginBottom: 20,
  },
  seta: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default CadastroAdmin;
