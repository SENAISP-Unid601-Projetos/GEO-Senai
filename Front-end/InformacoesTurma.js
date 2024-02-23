import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

// Importando o ícone de seta
import { FontAwesome } from "@expo/vector-icons";

// Componente principal da tela inicial
const InformacoesTurma = ({ route, navigation }) => {
  const { turma } = route.params;

  return (
    <View style={styles.container}>
      {/* Ícone de seta para voltar */}
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      {/* Quadro vermelho ocupando a tela */}
      <View style={styles.redBack}>
        {/* Quadro1 */}
        <View
          style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}
        >
          <Text style={styles.titulo}>{turma.codigo_turma}</Text>
          <Text style={styles.txtInfoCurso}>Sala: {turma.sala_turma}</Text>
          <Text style={styles.txtInfoCurso}>
            Duração do curso: {turma.duracao_curso}
          </Text>

          <Pressable
            style={[styles.botãoVerMapa, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Ver no mapa</Text>
          </Pressable>
        </View>

        {/* Quadro2 */}
        <View
          style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}
        >
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

        {/* Quadro3 */}
        <View
          style={[styles.quadro3, styles.roundedCorners, styles.quadroPadding]}
        >
          <Text style={styles.titulo}>{turma.nome_curso}</Text>

          <View style={styles.textoDoMeio}>
            <Text style={styles.descTexto}>{turma.desc_curso}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Cor de fundo da tela
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
    backgroundColor: "white", // Cor de fundo vermelha do quadrado
    justifyContent: "space-between", // Distribui os filhos uniformemente
    alignItems: "center", // Centraliza conteúdo na horizontal
    flexDirection: "row", // Alinha os elementos filhos na horizontal
    flexWrap: "wrap", // Permite que os elementos filhos quebrem para a próxima linha
    padding: 10, // Adicionando preenchimento interno
  },
  quadro: {
    width: "49%", // Largura dos quadros
    height: "46%", // Altura dos quadros
    backgroundColor: "red", // Cor de fundo dos quadros
    marginBottom: 5, // Margem inferior para separar os quadros
    alignItems: "center",
  },
  quadro3: {
    width: "100%", // Largura do quadro3
    height: "50%", // Altura do quadro3
    backgroundColor: "red", // Cor de fundo do quadro3
    marginTop: "1%", // Margem superior para separar do redBack
  },
  // os botões do quadro 1
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
    height: "60%", // Altura do quadro3
    alignItems: "center",
    alignContent: "center",
  },
  descTexto: {
    fontSize: 16,
    padding: 10,
  },

  // Estilo para arredondar as bordas dos quadros
  roundedCorners: {
    borderRadius: 20,
  },

  // Estilo para adicionar margem horizontal aos quadros
  quadroPadding: {
    paddingHorizontal: 40,
  },
});

export default InformacoesTurma;
