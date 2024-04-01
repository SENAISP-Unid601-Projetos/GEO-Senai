// Tela para exibir todas as informações de uma vaga de emprego em específico, previamente cadastrada
// em CadastroVaga, na versão para administrador do GEO SENAI

import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InformacoesVaga = ({ route, navigation }) => {
  const { vaga } = route.params;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={50} color="black" />
      </Pressable>

      <View style={styles.redBack}>
        <View style={styles.whiteBack}>
          <Text style={styles.txtTituloPrincipal}>{vaga.nome_vaga}</Text>
          <Text style={styles.infoText}><Text style={styles.txtTitulo}>Área da Vaga:</Text> {vaga.area_vaga}</Text>
          <Text style={styles.infoText}><Text style={styles.txtTitulo}>Descrição:</Text> {vaga.desc_vaga}</Text>
          <Text style={styles.infoText}><Text style={styles.txtTitulo}>Requisitos:</Text> {vaga.requisitos_vaga}</Text>
          <Text style={styles.infoText}><Text style={styles.txtTitulo}>Carga Horária:</Text> {vaga.carga_vaga}</Text>
          <Text style={styles.infoText}><Text style={styles.txtTitulo}>Salário:</Text> {vaga.salario_vaga}</Text>
          <Text style={styles.infoText}><Text style={styles.txtTitulo}>Contato:</Text> {vaga.contato_vaga}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  redBack: {
    marginTop: 40,
    width: "80%",
    height: 800,
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: 'center',
  },
  whiteBack: {
    margin: 20,
    padding: 20,
    height: '92%',
    backgroundColor: "white",
    borderRadius: 20,
  },
  txtTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 25,
    marginBottom: 10,
  },
  txtTituloPrincipal: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
  },
});

export default InformacoesVaga;
