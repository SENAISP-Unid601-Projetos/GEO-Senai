import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const TelaQR = ({ navigation, route }) => {
  const { imagemLink } = route.params;

  const botaoInicio = () => {
    navigation.navigate("TelaInicial");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Obrigado por utilizar o GEO SENAI :{")"}</Text>
      <View style={styles.textoMid}>
        <Text style={styles.texto}>Escaneie para baixar o mapa </Text>
      </View>
      <View>
        <Image source={imagemLink} style={styles.QR} />
      </View>

      <Pressable style={styles.buttonGoBack} onPress={botaoInicio}>
        <Text style={styles.textGoBack}>Início</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require("./../assets/icons/arrow-left-solid.svg")}
          style={{ height: 50, width: 50 }}
        />
      </Pressable>
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
  texto: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
    borderRadius: 60, // Corrigindo para número
  },
  buttonGoBack: {
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 20,
    width: 150,
    padding: 10,
    borderColor: "red",
  },
  textGoBack: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
  },
  QR: {
    width: 550,
    height: 550,
    top: 0,
    left: 0,
    alignItems: "center",
  },
  textoMid: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  textoTitulo: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default TelaQR;
