import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaHorarios = ({ navigation, route }) => {
  const { turma } = route.params;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      {/* Título */}
      <Text style={styles.txt_horarios}>Horários</Text>

      {/* Fundo Cinza */}
      <View style={styles.Fundo_Cinza}>
        {/* Quadros Cinzas Pequenos */}
        <View style={styles.quadroCinzaPequenoTitulo}>
          <Text style={styles.quadroTextoTitulo}>{turma.codigo_turma}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Seg</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Ter</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Qua</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Qui</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Sex</Text>
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  Fundo_Cinza: {
    backgroundColor: "gray",
    width: "95%",
    height: '75%',
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  quadroCinzaPequenoTitulo: {
    backgroundColor: "#d3d3d3",
    width: "100%",
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  quadroCinzaPequeno: {
    backgroundColor: "#d3d3d3",
    width: "50%",
    height: '16%',
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  quadroTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  quadroTextoTitulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  ADMButton: {
    backgroundColor: "#ff0000",
    padding: 13,
    borderRadius: "60%",
    alignItems: "center",
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  BaixarQRButton: {
    backgroundColor: "#ff0000",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
  },
  buttonTextADM: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
  },
  txt_horarios: {
    marginTop: 20,
    fontSize: 25,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 40,
    marginLeft: 20,
  },
});

export default TelaHorarios;
