// Tela para exibir todas as informações de uma vaga de emprego em específico, previamente cadastrada
// em CadastroVaga, na versão para administrador do GEO SENAI

import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";

const InformacoesVaga = ({ route, navigation }) => {
  const { vaga } = route.params;

  const { acessibilidade } = useAcessibilidade();

  const falarTexto = (texto) => {
    Speech.speak(texto, { language: "pt-BR" });
  };

  useEffect(() => {
    if (acessibilidade) {
      falarTexto(vaga.nome_vaga);
    }
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require("./../assets/icons/arrow-left-solid.svg")}
          style={{ height: 50, width: 50 }}
        />
      </Pressable>
      <View>
        <View style={styles.redBack}>
          <View style={styles.whiteBack}>
            {vaga.imagem_vaga != "" && (
              <View
                style={{
                  height: "30%",
                  backgroundColor: "white",
                  borderRadius: 100,
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%", borderRadius: 20 }}
                  source={{ uri: vaga.imagem_vaga }}
                />
              </View>
            )}

            <Text style={styles.txtTituloPrincipal}>{vaga.nome_vaga}</Text>
            <Text style={styles.infoText}>
              <Text style={styles.txtTitulo}>Descrição:</Text> {vaga.desc_vaga}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.txtTitulo}>Requisitos:</Text>{" "}
              {vaga.requisitos_vaga}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.txtTitulo}>Carga Horária:</Text>{" "}
              {vaga.carga_vaga}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.txtTitulo}>Salário: </Text> R$
              {vaga.salario_vaga}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.txtTitulo}>Contato:</Text> {vaga.contato_vaga}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
    width: 900,
    height: 900,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  whiteBack: {
    margin: 20,
    padding: 20,
    height: "92%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  txtTitulo: {
    fontSize: 35,
    color: "red",
  },
  infoText: {
    fontSize: 30,
    marginBottom: 10,
  },
  txtTituloPrincipal: {
    textAlign: "center",
    color: "#808080",
    fontSize: 50,
    marginBottom: 50,
  },
});

export default InformacoesVaga;
