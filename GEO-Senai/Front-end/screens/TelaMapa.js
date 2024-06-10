import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Picker,
  Image,
  Modal,
} from "react-native";
import Mapa from "../src/components/Mapa";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";
import { useApresentacao } from "../src/context/ApresentacaoContext";

const TelaMapa = ({ navigation }) => {
  const { acessibilidade } = useAcessibilidade();
  const { modoApresentacao, modalVisibility, setModalVisibility, toggleModal } = useApresentacao();

  const [mapaSelecionado, setMapaSelecionado] = useState("1");
  const [selectedValue, setSelectedValue] = useState("Mapa área 1 (superior)");

  const falarTexto = (texto) => {
    Speech.speak(texto, { language: "pt-BR" });
  };

  const handleChange = (itemValue) => {
    setSelectedValue(itemValue);
    // Dependendo da opção selecionada, defina um valor diferente para setMapaSelecionado
    switch (itemValue) {
      case "Mapa área 1 (superior)":
        setMapaSelecionado("1");
        break;
      case "Mapa área 1 (inferior)":
        setMapaSelecionado("2");
        break;
      case "Mapa área 2":
        setMapaSelecionado("3");
        break;
      default:
        break;
    }
    if (acessibilidade) {
      falarTexto(itemValue);
    }
  };

  const CaminhoQr = () => {
    switch (selectedValue) {
      case "Mapa área 1 (superior)":
        navigation.navigate("TelaQR", {
          imagemLink: require("./../assets/area1superiorqrcode.png"),
        });
        break;
      case "Mapa área 1 (inferior)":
        navigation.navigate("TelaQR", {
          imagemLink: require("./../assets/area1inferiorqrcode.png"),
        });
        break;
      case "Mapa área 2":
        navigation.navigate("TelaQR", {
          imagemLink: require("./../assets/area2qrcode.png"),
        });
        break;
    }
    if (acessibilidade) {
      falarTexto("Baixar caminho");
    }
  };

  const btnSalas = () => {
    switch (selectedValue) {
      case "Mapa área 1 (inferior)":
        navigation.navigate("TelaSalas", {
          link: "https://appbackend1.azurewebsites.net/salas/area1-inferior",
          andar: "Área 1 (inferior)",
        });
        break;
      case "Mapa área 1 (superior)":
        navigation.navigate("TelaSalas", {
          link: "https://appbackend1.azurewebsites.net/salas/area1-superior",
          andar: "Área 1 (superior)",
        });
        break;
      case "Mapa área 2":
        navigation.navigate("TelaSalas", {
          link: "https://appbackend1.azurewebsites.net/salas/area2",
          andar: "Área 2",
        });
        break;
    }
  };

  useEffect(() => {
    if (modoApresentacao) {
      setModalVisibility(true);
    }
  }, [modoApresentacao]); 

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.footer}>
          <View style={styles.cabecalho}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Image
                source={require("./../assets/icons/arrow-left-solid.svg")}
                style={{ height: 50, width: 50 }}
              />
            </Pressable>

            <Image
              source={require("./../assets/icons/map-black-solid.svg")}
              style={{ ...styles.icon, height: 50, width: 50 }}
            />
          </View>

          <Picker
            selectedValue={selectedValue}
            style={styles.estiloBtn}
            onValueChange={handleChange}
          >
            <Picker.Item
              label="Área 1 (superior)"
              value="Mapa área 1 (superior)"
            />

            <Picker.Item
              label="Área 1 (inferior )"
              value="Mapa área 1 (inferior)"
            />

            <Picker.Item label="Área 2" value="Mapa área 2" />
          </Picker>

          <Pressable
            style={[styles.botaoBaixarCaminho, {}]}
            onPress={CaminhoQr}
          >
            <Text style={styles.footerText}>Baixar caminho</Text>
          </Pressable>
        </View>

        <View style={styles.mapa}>
          <Mapa mapaSelecionado={mapaSelecionado} />
        </View>

        <Pressable style={styles.btnsalas} onPress={btnSalas}>
          <Text style={styles.textoBtnSalas}>Salas</Text>
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibility}
          onRequestClose={toggleModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  ...styles.modalText,
                  fontSize: 40,
                  fontWeight: "bold",
                }}
              >
                Tela de mapas
              </Text>
              <Text style={styles.modalText}>
                Através desta tela você pode localizar as salas dentro da escola em um dos 3 mapas
                disponíveis e baixá-lo para o seu celular
              </Text>
              <Image
                source={require("./../assets/apresentacao/mapa.png")}
                style={{ height: 600, width: 1070 }}
              />
              <Pressable
                onPress={toggleModal}
                style={{
                  alignItems: "center",
                  backgroundColor: "red",
                  borderRadius: 20,
                  margin: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    padding: 10,
                    color: "white",
                  }}
                >
                  Continuar
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    width: 70,
    height: 53,
  },
  contentContainer: {
    flexDirection: "column",
    flex: 1,
    flexShrink: 1,
  },
  blueBackground: {
    flex: 1,
    backgroundColor: "E8E8E8",
    borderWidth: 1,
    borderColor: "none",
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
  },
  footer: {
    backgroundColor: "#E8E8E8", // Define a cor de fundo do rodapé como branco.
    height: 65, // Define a altura do rodapé como 65 unidades.
    width: "100%", // Define a largura do rodapé como 100% da largura do contêiner pai.
    flexDirection: "row", // Organiza os itens horizontalmente
    justifyContent: "space-between", // Distribui o espaço entre os itens
    alignItems: "center", // Centraliza os itens verticalmente dentro do rodapé.
    margin: 10,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 10,
  },
  botaoBaixarCaminho: {
    right: 30,
    marginTop: 40,
    backgroundColor: "#ff0000",
    borderRadius: 20,
    alignItems: "center", // Centraliza os itens horizontalmente dentro do botão
    justifyContent: "center", // Centraliza os itens verticalmente dentro do botão
  },
  botaoVerSalas: {
    marginTop: 20,
    backgroundColor: "#ff0000",
    borderRadius: 20,

    alignSelf: "center",
    alignItems: "center", // Centraliza os itens horizontalmente dentro do botão
    justifyContent: "center", // Centraliza os itens verticalmente dentro do botão
  },
  footerText: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 25,
    color: "#ffffff",
    //alignSelf: 'center',
  },
  cabecalho: {
    flexDirection: "row",
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: 20,
  },
  mapa: {
    padding: 20,
    height: 650,
  },
  estiloBtn: {
    padding: 20,
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
    borderColor: "red",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "red",
    color: "#ffffff",
  },
  // containerBTNS: {
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   backgroundColor: 'black',
  //   flexdirection: 'column',
  //   height: '30%',
  //   width: "40%",
  //   display: 'flex',
  // },
  // BTNS: {
  //   alignItems: 'center',
  //   backgroundColor: 'red',
  //   flexDirection: 'Row',
  //   margin: '5',
  // },
  containerBTNS: {
    alignItems: "center",
    alignSelf: "center",
    // backgroundColor: "red",
    flexDirection: "row", // Alterado para 'column'
    height: "30%",
    width: "40%",
    display: "flex",
  },
  BTNS: {
    alignItems: "center",
    alignSelf: "center",
    //backgroundColor: "black",
    flexDirection: "row", // Alterado para 'row'
    margin: 5, // Alterado para 5 sem aspas
    marginLeft: "2.5%",
    height: "90%", //altura mas não funciona
    width: "120%", //largura
  },
  textoMapa: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },

  // botaoColunas: {
  //   width: "1%", // Definindo largura para ocupar metade da linha
  //   height: "4%",
  //   backgroundColor: "red",
  //   alignItems: "center",
  //   textAlign: "center",
  //   marginBottom: "2%",
  //   marginTop: '1%',
  //   marginLeft: "1%", // Adicionando um pequeno espaço entre os botões
  // },

  TextoBotaoColunas: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  BaixarQRButton: {
    margin: "7%",
    height: "90%", //altura
    width: "20%", //largura
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
  },
  column: {
    flex: 1, // Isso faz com que cada coluna ocupe o mesmo espaço
    flexDirection: "column",
    height: "38%", //altura
    width: "38%", // largura
    alignSelf: "center",
    alignItems: "center",
    marginTop: "1%",
    padding: "1%",
    paddingBottom: "130%",
  },
  botaoColunas: {
    backgroundColor: "red",
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 10,
    marginBottom: "2%",
    //marginRight: '50'
    width: "100%",
  },
  btnsalas: {
    alignSelf: "center",
    textItems: "center",
    width: "10%",
    height: "7%",
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
  },
  textoBtnSalas: {
    color: "white",
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // escurece o fundo
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

export default TelaMapa;
