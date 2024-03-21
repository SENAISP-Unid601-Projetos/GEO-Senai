import React, { useContext } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone FontAwesome da biblioteca
import AuthContext from '../../context/AuthContext';


const BotaoSalas = ({ props }) => {


  return (
    <Pressable
    style={[
      styles.botãoSala1,
      { borderWidth: 1, borderColor: "black" },
    ]}
    onPress={() => console.log("Novo botão 2 pressionado")}
  >
    <Text style={styles.texto}>Botão 2</Text>
  </Pressable>
  );
};

const styles = StyleSheet.create({
 
    redBackground: {
        flex: 1,
        backgroundColor: "red",
        borderWidth: 30,
        borderColor: "white",
        alignItems: "center",
      },
      botãoSala1: {
        backgroundColor: "#ff0000",
        padding: 20,
        borderRadius: 1000,
        marginBottom: 20,
        alignItems: "center",
        width: 150,
        height: 10,
        borderTopWidth: 20,
        flexDirection: "row",
      },

});

export default BotaoSalas;
