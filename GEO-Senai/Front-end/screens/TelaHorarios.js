import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";

const TelaHorarios = ({ navigation, route }) => {
  const CaminhoQr = () => {
    navigation.navigate("TelaQR");
  };

  const { turma } = route.params;

  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require("./../assets/icons/arrow-left-solid.svg")}
          style={{ height: 50, width: 50 }}
        />
      </Pressable>

      {/* Título */}
      <Text style={styles.txt_horarios}>Horários</Text>

      {/* Fundo Cinza */}
      <View style={styles.fundoCinza}>
        {/* Quadros Cinzas Pequenos */}
        <View style={styles.quadroCinzaPequenoTitulo}>
          <Text style={styles.quadroTexto}>{turma.codigo_turma}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Segunda</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Terça</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Quarta</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Quinta</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Sexta</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>{turma.seg_horario}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>{turma.ter_horario}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>{turma.qua_horario}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>{turma.qui_horario}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>{turma.sex_horario}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#ff0000",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "flex-end",
  },
  logo: {
    width: 70,
    height: 53,
    position: "absolute", // Mantenha apenas isso
    top: 0,
    left: 0,
    position: "absolute",
  },
  // Estilo para um fundo cinza
  fundoCinza: {
    backgroundColor: "gray", // Cor de fundo cinza
    width: "80%", // Largura de 80% do componente pai
    height: "50%", // Altura de 50% do componente pai
    alignItems: "center", // Alinhamento dos itens centralizado horizontalmente
    flexDirection: "row", // Disposição dos itens em linha
    flexWrap: "wrap", // Envolver os itens quando não couberem na mesma linha
  },
  // Estilo para um quadro cinza pequeno com título
  quadroCinzaPequenoTitulo: {
    backgroundColor: "#d3d3d3", // Cor de fundo cinza
    width: "97%", // Largura ocupando 98% do espaço disponível
    height: "13%", // Altura de 10% do componente pai
    marginBottom: 10, // Margem inferior de 10 unidades
    marginLeft: "1.5%",
    borderRadius: 10, // Borda arredondada com raio de 10 unidades
    borderWidth: 1, // Largura da borda de 1 unidade
    borderColor: "black", // Cor da borda preta
    justifyContent: "center", // Alinhamento vertical centralizado
    alignItems: "center", // Alinhamento horizontal centralizado
  },

  // Estilo para um quadro cinza pequeno
  quadroCinzaPequeno: {
    backgroundColor: "#d3d3d3", // Cor de fundo cinza
    width: "18%", // Largura de 19% do componente pai
    height: "20%", // Altura de 20% do componente pai
    borderRadius: 10, // Borda arredondada com raio de 10 unidades
    borderWidth: 1, // Largura da borda de 1 unidade
    borderColor: "black", // Cor da borda preta
    margin: 5, // Margem de 5 unidades em todos os lados
    marginLeft: "1.5%",
    justifyContent: "center", // Alinhamento vertical centralizado
    alignItems: "center", // Alinhamento horizontal centralizado
    alignSelf: "center", // Alinhamento próprio ao centro horizontalmente
  },
  quadroTexto: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  BaixarQRButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    width: 600,
    marginTop: 10,
    borderColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 40,

    alignSelf: "center",
  },

  txt_horarios: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 40,
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 40,
    marginLeft: 20,
  },
});

export default TelaHorarios;
