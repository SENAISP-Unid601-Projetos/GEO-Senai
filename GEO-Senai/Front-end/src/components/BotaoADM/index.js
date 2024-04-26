import React, { useContext } from "react";
import { StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Importe o ícone FontAwesome da biblioteca
import AuthContext from "../../context/AuthContext";

const BotaoADM = ({ onPress }) => {
  const { adm } = useContext(AuthContext); // Obtendo o valor de adm do contexto AuthContext

  return (
    <Pressable style={styles.ADMButton} onPress={onPress}>
      <FontAwesome
        name={adm ? "unlock" : "lock"}
        style={styles.settingsbuttonText}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ADMButton: {
    backgroundColor: "#ff0000",
    padding: 13,
    borderRadius: 30,
    alignItems: "center",
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  settingsbuttonText: {
    color: "#fff",
    fontSize: 25,
    marginTop: -5,
    alignContent: "center",
  },
});

export default BotaoADM;
