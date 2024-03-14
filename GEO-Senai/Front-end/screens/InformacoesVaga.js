// Tela para exibir todas as informações de uma vaga de emprego em específico, previamente cadastrada
// em CadastroVaga, na versão para administrador do GEO SENAI

import React from "react";
import { View, Text, Pressable, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

const InformacoesVaga = ({ route, navigation }) => {
  const { vaga } = route.params;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome da Vaga: {vaga.nome_vaga}</Text>
        <Text style={styles.infoText}>Área da Vaga: {vaga.area_vaga}</Text>
        <Text style={styles.infoText}>Descrição: {vaga.desc_vaga}</Text>
        <Text style={styles.infoText}>Requisitos: {vaga.requisitos_vaga}</Text>
        <Text style={styles.infoText}>Carga Horária: {vaga.carga_vaga}</Text>
        <Text style={styles.infoText}>Salário: {vaga.salario_vaga}</Text>
        <Text style={styles.infoText}>Contato: {vaga.contato_vaga}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  backButton: {
    position: "absolute",
    top: height * 0.02,
    left: width * 0.02,
    zIndex: 1,
  },
  infoContainer: {
    marginTop: height * 0.1,
  },
  infoText: {
    fontSize: 18,
    marginBottom: height * 0.02,
  },
});

export default InformacoesVaga;
