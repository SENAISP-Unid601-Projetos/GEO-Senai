import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";
import * as Animatable from "react-native-animatable";
import { useApresentacao } from "../src/context/ApresentacaoContext";

const TelaInicial = ({ navigation }) => {
  const { acessibilidade, toggleAcessibilidade } = useAcessibilidade();
  const { modoApresentacao, toggleApresentacao, modalVisibility, toggleModal } = useApresentacao();

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

  const [opcoes, setOpcoes] = useState(false);

  const toggleOpcoes = () => {
    setOpcoes(!opcoes);
  };

  const switchToggle = () => {
    if (!modoApresentacao) {
      toggleModal();
    }
    toggleApresentacao();
    setOpcoes(false);
  };

  const viewBemVindoRef = useRef(null);
  const viewFaqsRef = useRef(null);

  useEffect(() => {
    viewBemVindoRef.current.pulse(2000);

    const animaNovamente = navigation.addListener("focus", () => {
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

      {!opcoes && (
        <Pressable
          onPress={toggleOpcoes}
          style={{ position: "absolute", top: 20, right: 20 }}
        >
          <Image
            source={require("./../assets/icons/gear-solid.svg")}
            style={{ width: 75, height: 75 }}
          />
        </Pressable>
      )}

      {opcoes && (
        <View style={styles.switchContainer}>
          <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
            {opcoes && (
              <Text style={{ fontSize: 30, margin: 10 }}>Auxílio de voz</Text>
            )}
            {opcoes && (
              <SwitchToggle
                backgroundColorOff="black"
                backgroundColorOn="red"
                circleStyle={styles.circleStyle}
                switchOn={acessibilidade}
                onPress={toggleAcessibilidade}
              />
            )}
          </View>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              paddingBottom: 10,
            }}
          >
            {opcoes && (
              <Text style={{ fontSize: 30, margin: 10 }}>
                Modo Apresentação
              </Text>
            )}
            {opcoes && (
              <SwitchToggle
                backgroundColorOff="black"
                backgroundColorOn="red"
                circleStyle={styles.circleStyle}
                switchOn={modoApresentacao}
                onPress={switchToggle}
              />
            )}
          </View>
        </View>
      )}

      <Animatable.View ref={viewBemVindoRef} style={{ alignItems: "center" }}>
        <Text style={styles.BemVindo}>Seja bem-vindo ao GEO SENAI!</Text>
        <Text style={styles.TextoMedio}>
          É um prazer tê-lo conosco, como posso te ajudar?
        </Text>
      </Animatable.View>

      <Pressable style={styles.classesButton} onPress={botaoMapa}>
        <Text style={styles.buttonText}>Mapas</Text>
        <Image
          source={require("./../assets/icons/map-solid.svg")}
          style={styles.icon}
        />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoTurmas}>
        <Text style={styles.buttonText}>Turmas</Text>
        <Image
          source={require("./../assets/icons/users-solid.svg")}
          style={styles.icon}
        />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoVagas}>
        <Text style={styles.buttonText}>Vagas</Text>
        <Image
          source={require("./../assets/icons/suitcase-solid.svg")}
          style={styles.icon}
        />
      </Pressable>

      <Animatable.View ref={viewFaqsRef} style={styles.faqsView}>
        <View style={styles.quadroFaqs}>
          <Image
            source={require("./../assets/icons/circle-exclamation-solid.svg")}
            style={styles.exclamacao}
          />
          <View style={styles.viewTxtFaqs}>
            <Text style={styles.faqsTxt}>
              Novo no SENAI? Experimente dar uma
            </Text>
            <Text style={styles.faqsTxt}>olhada em Perguntas Frequentes!</Text>
          </View>
        </View>
        <Pressable onPress={botaoFAQ} style={styles.btnFaqs}>
          <Image
            source={require("./../assets/icons/circle-question-solid.svg")}
            style={{ width: 75, height: 75 }}
          />
        </Pressable>
      </Animatable.View>

      <Text style={styles.textoOculto}>
        Todos os direitos reservados para Templarios®
      </Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{...styles.modalText, fontSize: 40, fontWeight: 'bold'}}>Olá, bem vindo ao GEO SENAI!</Text>
            <Text style={styles.modalText}>Conheça o nosso menu principal</Text>
            <Image source={require("./../assets/apresentacao/menuInicial.png")} style={{height: 600, width: 1070}}/>
            <Pressable onPress={toggleModal}
              style={{
                alignItems: "center",
                backgroundColor: "red",
                borderRadius: 20,
                margin: 20,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight:'bold', padding: 10, color: 'white' }}>Vamos lá?</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "flex-end",
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
    margin: 10,
    width: 40,
    height: 40,
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
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    height: 50,
    width: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // escurece o fundo
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
  },
});

export default TelaInicial;
