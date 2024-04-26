import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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
        <FontAwesome name="arrow-left" size={50} color="black" />
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

      {/* Botão "Baixar QR" */}
      <Pressable style={[styles.BaixarQRButton]} onPress={toggleImage}>
        <Text style={styles.buttonText}>
          {showImage ? "Esconder QR code" : "Exibir QR code"}
        </Text>
        {showImage && (
          <Image
            source={require("./../assets/mapaSenaiQR.png")}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />
        )}
      </Pressable>
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
  fundoCinza: {
    backgroundColor: "gray",
    width: "80%",
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  quadroCinzaPequenoTitulo: {
    backgroundColor: "#d3d3d3",
    width: "100%",
    marginBottom: 10,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  quadroCinzaPequeno: {
    backgroundColor: "#d3d3d3",
    width: "19%",
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
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
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 40,
    marginLeft: 20,
  },
});

export default TelaHorarios;
