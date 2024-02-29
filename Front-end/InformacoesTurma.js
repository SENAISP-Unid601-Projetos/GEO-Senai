import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import BotaoADM from "./src/components/BotaoADM";

const InformacoesTurma = ({ route, navigation }) => {
  const { turma } = route.params;

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.lixeiraButton}
        onPress={() => console.log("Lixeira pressionada")}
      >
        <View style={styles.circle}>
          <Image source={require("./assets/lixeiraicon.png")} style={styles.lixeiraIcon} />
        </View>
      </Pressable>

      <BotaoADM />

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      <View style={styles.redBack}>
        <View style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}>
          <Text style={styles.titulo}>{turma.codigo_turma}</Text>
          <Text style={styles.txtInfoCurso}>Sala: {turma.sala_turma}</Text>
          <Text style={styles.txtInfoCurso}>Duração do curso: {turma.duracao_curso}</Text>

          <Pressable
            style={[styles.botãoVerMapa, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Ver no mapa</Text>
          </Pressable>
        </View>

        <View style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}>
          <Pressable
            style={[styles.botaoFoto, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Foto</Text>
          </Pressable>

          <Pressable
            style={[styles.botaoHorario, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Horarios</Text>
          </Pressable>

          <Pressable
            style={[styles.botaoLocalizarse, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Localize-se</Text>
          </Pressable>
        </View>

        <View style={[styles.quadro3, styles.roundedCorners, styles.quadroPadding]}>
          <Text style={styles.titulo}>{turma.nome_curso}</Text>
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
    backgroundColor: "#fff",
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
  lixeiraButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  redBack: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  quadro: {
    width: "49%",
    height: "46%",
    backgroundColor: "red",
    marginBottom: 5,
    alignItems: "center",
  },
  quadro3: {
    width: "100%",
    height: "50%",
    backgroundColor: "red",
    marginTop: "1%",
  },
  botãoVerMapa: {
    marginTop: "8%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 25,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  botaoFoto: {
    marginTop: "5%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 30,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  botaoHorario: {
    marginTop: "5%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 30,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  botaoLocalizarse: {
    marginTop: "5%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 30,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  titulo: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  txtInfoCurso: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  corpoTXT: {
    textAlign: "center",
    fontSize: 25,
  },
  textoDoMeio: {
    backgroundColor: "white",
    marginLeft: "3%",
    marginRight: "3%",
    borderRadius: 10,
    height: "60%",
    alignItems: "center",
    alignContent: "center",
  },
  descTexto: {
    fontSize: 16,
    padding: 10,
  },
  roundedCorners: {
    borderRadius: 20,
  },
  quadroPadding: {
    paddingHorizontal: 40,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  lixeiraIcon: {
    width: 30,
    height: 30,
  },
});

export default InformacoesTurma;
