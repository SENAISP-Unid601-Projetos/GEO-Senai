// Tela inicial do GEO SENAI, por onde são acessadas as telas de mapa, turmas e vagas

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaInicial = ({ navigation }) => {
  const botaoTurmas = () => {
    navigation.navigate("TelaTurmas");
  };

  const botaoMapa = () => {
    navigation.navigate("TelaMapa");
  };
  const botaovagas = () => {
    navigation.navigate("TextDecoderStream");
  };

  const botaoVagas = () => {
    navigation.navigate("TelaVagas");
  };

  const botaoFAQ = () => {
    navigation.navigate("PerguntasFrequentes");
  };
  const botaoTelaVoz = () => {
    navigation.navigate("TelaVoz");
  };

  const abrirSite = () => {
    const url = "https://sp.senai.br/unidade/saocarlos";
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={require("./../assets/Brasil.png")} style={styles.logo} />
      <Image
        source={require("./../assets/logoSenai.png")}
        style={styles.senai}
      />

      <Text style={styles.BemVindo}>Seja bem-vindo ao GEO SENAI!</Text>
      <Text style={styles.TextoMedio}>
        É um prazer tê-lo conosco, como posso te ajudar?
      </Text>

      <Pressable style={styles.classesButton} onPress={botaoMapa}>
        <Text style={styles.buttonText}>Mapas</Text>
        <FontAwesome name="map" size={50} color="#ffffff" />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoTurmas}>
        <Text style={styles.buttonText}>Turmas</Text>
        <FontAwesome name="users" size={50} color="#ffffff" />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoVagas}>
        <Text style={styles.buttonText}>Vagas</Text>
        <FontAwesome name="suitcase" size={50} color="#ffffff" />
      </Pressable>

      {/* <Pressable style={styles.classesButton} onPress={botaoTelaVoz}>
        <Text style={styles.buttonText}>Vwagas</Text>
        <FontAwesome name="user-plus" size={50} color="#ffffff" />
      </Pressable> */}

      <View style={styles.faqsView}>
        <View style={styles.quadroFaqs}>
          <FontAwesome
            style={styles.exclamacao}
            name="exclamation"
            size={40}
            color="red"
          />
          <View style={styles.viewTxtFaqs}>
            <Text style={styles.faqsTxt}>
              Novo no SENAI? Experimente dar uma
            </Text>
            <Text style={styles.faqsTxt}>olhada em Perguntas Frequentes!</Text>
          </View>
        </View>
        <Pressable onPress={botaoFAQ} style={styles.btnFaqs}>
          <FontAwesome name="question-circle" size={75} color="red" />
        </Pressable>
      </View>

      <Text style={styles.textoOculto}>
        Todos os direitos reservados para Templarios®
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
  },
  senai: {
    width: 600,
    height: 150,
  },
  classesButton: {
    flexDirection: "row", // Para alinhar o texto e o ícone lado a lado
    justifyContent: "space-between",
    backgroundColor: "red",
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnFaqs: {
    marginLeft: 20,
    marginRight: 30,
  },
  faqsView: {
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  quadroFaqs: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
  },
  viewTxtFaqs: {
    justifyContent: "center",
    height: 80,
  },
  faqsTxt: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  exclamacao: {
    alignSelf: "center",
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  settingsbuttonText: {
    color: "#fff",
    fontSize: 25,
    marginTop: -5,
    alignContent: "center",
  },
  logo: {
    marginLeft: 20,
    marginTop: 40,
    width: 120,
    height: 83,
    top: 10,
    left: 10,
    position: "absolute",
  },
  BemVindo: {
    color: "black",
    fontSize: 70,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
  },
  TextoMedio: {
    color: "black",
    fontSize: 30,
    fontWeight: "normal",
    borderRadius: 40,
    marginBottom: 50,
  },
  textoOculto: {
    color: "#C8C8C8",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default TelaInicial;
