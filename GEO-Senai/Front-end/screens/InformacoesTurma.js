// Tela para exibir todas as informações de uma turma em específico, previamente cadastrada
// em CadastroTurma, na versão para administrador do GEO SENAI

import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InformacoesTurma = ({ route, navigation }) => {
  const TelaFoto = () => {
    navigation.navigate("TelaFoto", { turma: turma });
  };

  const botaoMapa = () => {
    navigation.navigate("TelaMapa");
  };

  const { turma } = route.params;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={50} color="black" />
      </Pressable>

      <View style={styles.redBack}>
        <View
          style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}
        >
          <Text style={styles.titulo}>{turma.codigo_turma}</Text>
          <Text style={styles.txtInfoCurso}>Sala: {turma.sala_turma}</Text>
          <Text style={styles.txtInfoCurso}>
            Duração do curso: {turma.duracao_curso}
          </Text>

          <Pressable
            style={[styles.botoesPequenos, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Ver no mapa</Text>
          </Pressable>
        </View>

        <View
          style={[
            styles.quadroBton,
            styles.roundedCorners,
            styles.quadroPadding,
          ]}
        >
          <Pressable
            style={[styles.botoesPequenosFundo, { borderWidth: 1 }]}
            onPress={TelaFoto}
          >
            <Text style={styles.textoFundo}>Foto</Text>
          </Pressable>

          <Pressable
            style={[styles.botoesPequenosFundo, { borderWidth: 1 }]}
            onPress={() =>
              navigation.navigate("TelaHorarios", { turma: turma })
            }
          >
            <Text style={styles.textoFundo}>Horários</Text>
          </Pressable>

          <Pressable
            style={[styles.botoesPequenosFundo, { borderWidth: 1 }]}
            onPress={botaoMapa}
          >
            <Text style={styles.textoFundo}>Localize-se</Text>
          </Pressable>
        </View>

        <View
          style={[styles.quadro3, styles.roundedCorners, styles.quadroPadding]}
        >
          <Text style={styles.tituloBaixo}>{turma.nome_curso}</Text>
          <View style={styles.textoDoMeio}>
            <Text style={styles.descTexto}>{turma.desc_curso}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 120,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  redBack: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  quadro: {
    width: "49%",
    height: "46%",

    marginBottom: 5,
    alignItems: "baseline",
    justifyContent: "center",
    shadowColor: "#000",
    // Adiciona elevação para Android
  },
  quadroBton: {
    width: "49%",
    height: "46%",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  quadro3: {
    width: "100%",
    height: "50%",
    marginTop: "1%",
  },
  botoesPequenosFundo: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "red",
    width: 800,
    alignItems: "center",
    borderColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5, // Adiciona elevação para Android
  },
  botoesPequenos: {
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "red",
    width: 600,
    alignItems: "center",
    borderColor: "red",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5, // Adiciona elevação para Android
  },
  texto: {
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
  },
  textoFundo: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  titulo: {
    margin: 15,
    textAlign: "center",
    fontSize: 70,
    fontWeight: "bold",
    color: "red",
  },
  tituloBaixo: {
    margin: 15,
    textAlign: "center",
    fontSize: 70,
    fontWeight: "bold",
    color: "red",
  },
  txtInfoCurso: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  textoDoMeio: {
    padding: 20,
    backgroundColor: "white",
    marginLeft: "3%",
    marginRight: "3%",
    borderRadius: 10,
    height: "60%",
    alignItems: "center",
    alignContent: "center",
  },
  descTexto: {
    fontSize: 30,
    padding: 10,
  },
  roundedCorners: {
    borderRadius: 20,
  },
  quadroPadding: {
    paddingHorizontal: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default InformacoesTurma;
