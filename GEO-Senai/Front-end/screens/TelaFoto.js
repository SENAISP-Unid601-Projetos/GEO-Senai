import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Componente principal da tela inicial
const TelaFoto = ({ route, navigation }) => {
  const CaminhoQr = () => {
    navigation.navigate("TelaQR");
  };

  const { sala } = route.params;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={50} color="black" />
      </Pressable>

      {/* Quadro vermelho no centro */}
      <View style={styles.redBack}>
        <Text style={styles.tituloCurso}>Sala: {sala.nome_sala}</Text>

        <Image
          source={require("./../assets/IMG-20240407-WA0066.jpg")} // Imagem do logo
          style={styles.imgFoto} // Estilos do logo
        />

        <View style={styles.squareBaixo}>
          <Pressable style={[styles.btnControleImg]}>
            <FontAwesome name="chevron-left" size={25} color="white" />{" "}
          </Pressable>

          <Pressable style={[styles.btnControleImg]}>
            <FontAwesome name="chevron-right" size={25} color="white" />{" "}
          </Pressable>
        </View>
      </View>

  

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#E8E8E8", // Cor de fundo da tela
    height: "100%",
  },
  redBack: {
    alignSelf: "center",
// Cor de fundo vermelha do quadrado
    width: "80%", // Largura do quadrado (80% da largura da tela)
    height: "70%", // Altura do quadrado (70% da altura da tela)
    alignItems: "center", // Centraliza conteúdo na horizontal
    flexDirection: "column", // Alinha os elementos filhos na...
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: "1%"
  },
  squareBaixo: {
 // Cor de fundo vermelha do quadrado
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 5, // Reduzindo o padding vertical
    paddingHorizontal: 10, // Reduzindo o padding horizontal
    // Define o raio da borda como 10 para tornar os cantos arredondados
    marginHorizontal: 25, // Adicionando um pequeno espaçamento horizontal entre os botões
    backgroundColor: "red",
    alignItems: "center",
    width: "20%",
    height:40
  },
  buttonQR: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '10%',
    height: "5%",
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTextQR: {
    fontSize: 25, // Reduzindo o tamanho do texto
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },
  tituloCurso: {
    color: "red",
    textAlign: "center",
    fontSize: 50,

    marginBottom: 20,

    width: '20%',
    borderRadius: 10,
   },
  imgFoto: {
    width: "60%", // Mantendo a largura atual
    height: "100%", // Mantendo a altura atual
    alignSelf: "center", // Alinhando a imagem ao centro horizontalmente
    padding: 20, // Adicionando borda arredondada
    borderColor: 'black',

    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    marginLeft: 20,
    marginTop: 40,
  },
});

export default TelaFoto;
