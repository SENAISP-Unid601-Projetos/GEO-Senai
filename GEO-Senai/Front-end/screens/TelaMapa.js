import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Picker } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Mapa from "../src/components/Mapa";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import ListaMapas from "../src/components/listaMapas";

const TelaMapa = ({ navigation }) => {
  const [mapaSelecionado, setMapaSelecionado] = useState("1");
  const [selectedValue, setSelectedValue] = useState("Mapa primeiro andar");

  const handleChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);

    // Dependendo da opção selecionada, defina um valor diferente para setMapaSelecionado
    switch (itemValue) {
      case "Mapa primeiro andar":
        setMapaSelecionado("1");
        break;
      case "Mapa segundo andar":
        setMapaSelecionado("2");
        break;
      case "Mapa terceiro andar":
        setMapaSelecionado("3");
        break;
      default:
        break;
    }
  };

  const CaminhoQr = () => {
    switch (selectedValue) {
      case "Mapa primeiro andar":
        navigation.navigate("TelaQR", { imagemLink: require("./../assets/mapaSenaiQR.png")});
        break;
      case "Mapa segundo andar":
        navigation.navigate("TelaQR", { imagemLink: require("./../assets/blocobQR.png")});
        break;
      case "Mapa terceiro andar":
        navigation.navigate("TelaQR", { imagemLink: require("./../assets/areadoisQR.png")});
        break;    
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.footer}>
          <View style={styles.cabecalho}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <FontAwesome name="arrow-left" size={50} color="black" />
            </Pressable>

            <FontAwesome
              style={styles.icon}
              name="map"
              size={50}
              color="black"
            />
          </View>

          <Picker
            selectedValue={selectedValue}
            style={styles.estiloBtn}
            onValueChange={handleChange}
          >
            <Picker.Item
              label="Bloco B (superior)"
              value="Mapa primeiro andar"
            />
            <Picker.Item
              label="Bloco B (inferior )"
              value="Mapa segundo andar"
            />
            <Picker.Item 
            label="Bloco A" 
            value="Mapa terceiro andar" />
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
        

        <Pressable style={styles.botaoVerSalas}>
          <Text style={styles.footerText}>Ver salas</Text>
        </Pressable>
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
    borderWidth: 2,
    alignItems: "center", // Centraliza os itens horizontalmente dentro do botão
    justifyContent: "center", // Centraliza os itens verticalmente dentro do botão
  },
  botaoVerSalas: {
    marginTop: 20,
    backgroundColor: "#ff0000",
    borderRadius: 20,
    borderWidth: 2,
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
    borderColor: "#FF0000", // Cor da borda vermelha
    borderWidth: 2, // Largura da borda
    borderRadius: 10, // Raio do canto da borda
  },
  estiloBtn: {
    padding: 20,
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
    borderColor: "red",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "red ",
    color: "#ffffff",
  },
});

export default TelaMapa;
