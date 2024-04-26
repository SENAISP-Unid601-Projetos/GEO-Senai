import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default ListaMapas = ({ setMapaSelecionado }) => {
  const [selectedValue, setSelectedValue] = useState("Mapa área 1 (superior)");

  const handleChange = (itemValue, itemIndex) => {
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
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.estiloBtn}
        onValueChange={handleChange}
      >
        <Picker.Item label="Bloco B (superior)" value="Mapa área 1 (superior)" />
        <Picker.Item label="Bloco B (inferior )" value="Mapa área 1 (inferior)" />
        <Picker.Item label="Bloco A" value="Mapa área 2" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  estiloBtn: {
    padding: 20,
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "red",
    color: "#ffffff",
  },
});
