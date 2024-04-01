import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Componente principal da tela inicial
const TelaFoto = ({ route, navigation }) => {
  const CaminhoQr = () => {
    navigation.navigate("TelaQR");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={50} color="black" />
      </Pressable>

      {/* Quadro vermelho no centro */}
      <View style={styles.redBack}>
        <Text style={styles.tituloCurso}>Informática</Text>

        <Image
          source={require("./../assets/Brasil.png")} // Imagem do logo
          style={styles.imgFoto} // Estilos do logo
        />

        <View style={styles.squareBaixo}>
          <Pressable style={[styles.btnControleImg]} >
            <FontAwesome name="chevron-left" size={25} color="black" />{" "}
          </Pressable>

          <Pressable style={[styles.btnControleImg]} >
            <FontAwesome name="chevron-right" size={25} color="black" />{" "}
          </Pressable>
        </View>

        <Pressable style={[styles.buttonQR]} onPress={CaminhoQr}>
          <Text style={styles.buttonTextQR}>Gerar QR Code</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#E8E8E8", // Cor de fundo da tela
  },
  redBack: {
    alignSelf: "center",
    backgroundColor: "red", // Cor de fundo vermelha do quadrado
    width: "80%", // Largura do quadrado (80% da largura da tela)
    height: 750, // Altura do quadrado (70% da altura da tela)
    alignItems: "center", // Centraliza conteúdo na horizontal
    flexDirection: "column", // Alinha os elementos filhos na...
    justifyContent: "center",
    borderRadius: 30,
  },
  squareBaixo: {
    backgroundColor: "red", // Cor de fundo vermelha do quadrado
    width: "100%", // Largura do quadrado (80% da largura da tela)
    height: 10,
    aspectRatio: 10 / 1, // Mantém a proporção 10:1 para fazer uma barra horizontal
    flexDirection: "row", // Alinhando os botões na horizontal
    justifyContent: "center", // Centralizando os botões na horizontal
    alignItems: "center", // Centralizando conteúdo na vertical
    borderRadius: 30,
    marginBottom: 40, // Aumentando a margem inferior para mover os botões para baixo
    marginTop: 30, // Adicionando uma margem superior para espaçamento
  },
  btnControleImg: {
    borderWidth: 2, // Define a largura da borda como 1
    paddingVertical: 5, // Reduzindo o padding vertical
    paddingHorizontal: 10, // Reduzindo o padding horizontal
    borderRadius: 10, // Define o raio da borda como 10 para tornar os cantos arredondados
    marginHorizontal: 25, // Adicionando um pequeno espaçamento horizontal entre os botões
    backgroundColor: "white",
    alignItems: "center",
  },
  buttonTextRetornar: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  txtControleImg: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonQR: {
    borderWidth: 1,
    paddingVertical: 5, // Reduzindo o padding vertical
    paddingHorizontal: 10, // Reduzindo o padding horizontal
    borderRadius: 10,
    marginHorizontal: 5, // Adicionando um pequeno espaçamento horizontal entre os botões
    backgroundColor: "black",
    alignItems: "center",
  },
  buttonTextQR: {
    fontSize: 25, // Reduzindo o tamanho do texto
    fontWeight: "bold",
    padding: 10,
    color: 'white',
  },
  tituloCurso: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imgFoto: {
    width: "40%", // Mantendo a largura atual
    height: "60%", // Mantendo a altura atual
    alignSelf: "center", // Alinhando a imagem ao centro horizontalmente
    padding: 20,
    borderRadius: 10, // Adicionando borda arredondada
    borderWidth: 2, // Adicionando borda
    borderColor: "black", // Definindo a cor da borda como preto
  },
  backButton: {
    marginLeft: 20,
    marginTop: 40,
  },
});

export default TelaFoto;
