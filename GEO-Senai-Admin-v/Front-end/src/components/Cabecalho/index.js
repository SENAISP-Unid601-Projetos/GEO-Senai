import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Cabecalho() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>SENAI</Text>
      <Image
        source={require("./../../../assets/Brasil.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 53,
    top: 5,
    left: 5,
    position: "absolute",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#ff0000",
    padding: 15,
  
    borderBottomColor: "#ccc",
    alignItems: "flex-end",
  },
});
