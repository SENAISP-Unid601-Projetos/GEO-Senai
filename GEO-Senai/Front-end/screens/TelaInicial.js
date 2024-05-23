import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SwitchToggle from "react-native-switch-toggle";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";
import * as Animatable from "react-native-animatable";

const TelaInicial = ({ navigation }) => {
  const { acessibilidade, toggleAcessibilidade } = useAcessibilidade();

  const falarTexto = (texto) => {
    Speech.speak(texto, { language: "pt-BR" });
  };

  const botaoTurmas = () => {
    if (acessibilidade) {
      navigation.navigate("TelaTurmas");
      falarTexto("Turmas");
    } else {
      navigation.navigate("TelaTurmas");
    }
  };

  const botaoMapa = () => {
    if (acessibilidade) {
      navigation.navigate("TelaMapa");
      falarTexto("Mapas");
    } else {
      navigation.navigate("TelaMapa");
    }
  };

  const botaoVagas = () => {
    if (acessibilidade) {
      navigation.navigate("TelaVagas");
      falarTexto("Vagas");
    } else {
      navigation.navigate("TelaVagas");
    }
  };

  const botaoFAQ = () => {
    if (acessibilidade) {
      navigation.navigate("PerguntasFrequentes");
      falarTexto("Perguntas frequentes");
    } else {
      navigation.navigate("PerguntasFrequentes");
    }
  };

  const viewBemVindoRef = useRef(null);
  const viewFaqsRef = useRef(null);

  useEffect(() => {
    viewBemVindoRef.current.pulse(2000);

    const animaNovamente = navigation.addListener('focus', () => {
      if (viewFaqsRef.current) {
        viewFaqsRef.current.pulse(2000);
      }
    });

    return animaNovamente;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("./../assets/Brasil.png")} style={styles.logo} />
      <Image
        source={require("./../assets/logoSenai.png")}
        style={styles.senai}
      />

      <View style={styles.switchContainer}>
        <SwitchToggle
          backgroundColorOff="black"
          backgroundColorOn="red"
          circleStyle={styles.circleStyle}
          switchOn={acessibilidade}
          onPress={toggleAcessibilidade}
        />
      </View>

      <Animatable.View ref={viewBemVindoRef} style={{ alignItems: "center" }}>
        <Text style={styles.BemVindo}>Seja bem-vindo ao GEO SENAI!</Text>
        <Text style={styles.TextoMedio}>
          É um prazer tê-lo conosco, como posso te ajudar?
        </Text>
      </Animatable.View>

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

      <Animatable.View
        ref={viewFaqsRef}
        style={styles.faqsView}
      >
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
      </Animatable.View>

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
  switchContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  circleStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
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
