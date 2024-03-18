import React from "react";
import { StyleSheet, Text, View, Image, Pressable, Linking, Platform, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Mapa from "../src/components/Mapa";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

const TelaMapa = ({ navigation }) => {
    // const baixarMapa = () => {
    //   // Caminho da imagem local no seu projeto
    //   const imagePath = './../assets/mapaSenai.png'; // Substitua pelo caminho correto para sua imagem local

    //   // Obtém o caminho absoluto da imagem com base na plataforma
    //   let imageUrl = Platform.select({
    //     ios: 'file://' + imagePath,
    //     android: 'file://' + imagePath
    //   })();

    //   // Abre a imagem em um navegador para permitir o download
    //   Linking.openURL(imageUrl)
    //     .then(() => {
    //       Alert.alert("Baixar imagem", "Toque e segure a imagem para baixá-la.");
    //     })
    //     .catch((error) => {
    //       console.error("Erro ao abrir a imagem:", error);
    //       Alert.alert("Erro", "Falha ao abrir a imagem. Tente novamente.");
    //     });
    // };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      <View style={styles.contentContainer}>
        <Text style={styles.textoTitulo}>Mapa</Text>

        <Mapa />

        <Text style={styles.textoMenor}>*Movimento de pinça para zoom</Text>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Pressable style={[ styles.botaoBaixarMapa ]}>
          <Text style={styles.footerText}>Baixar mapa</Text>
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
  logo: {
    width: 70,
    height: 53,
  },
  contentContainer: {
    marginTop: 120,
    width: "95%",
    height: "60%",
    borderRadius: 20,
    backgroundColor: "red",
    alignSelf: "center",
  },
  blueBackground: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "none",
    alignItems: "center",
  },
  textoTitulo: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  textoMenor: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  footer: {
    backgroundColor: "#E8E8E8", // Define a cor de fundo do rodapé como branco.
    height: 65, // Define a altura do rodapé como 65 unidades.
    width: "100%", // Define a largura do rodapé como 100% da largura do contêiner pai.
    alignItems: "center", // Centraliza os itens verticalmente dentro do rodapé.
  },
  botaoBaixarMapa: {
    backgroundColor: "#ff0000",
    borderRadius: 100,
    width: 150, // Ajuste a largura para acomodar o texto "Baixar caminho"
    height: 50,
    alignItems: "center", // Centraliza os itens horizontalmente dentro do botão
    justifyContent: "center", // Centraliza os itens verticalmente dentro do botão
    marginTop: 20,
    borderWidth: 1,
  },
  footerText: {
    fontSize: 15,
    fontWeight: "bold",
    //alignSelf: 'center',
  },
  backButton: {
    marginTop: 40,
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default TelaMapa;
