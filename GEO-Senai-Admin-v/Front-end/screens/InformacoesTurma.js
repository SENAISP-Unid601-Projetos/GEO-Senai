import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Button,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InformacoesTurma = ({ route, navigation }) => {
  const { turma } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const [local] = useState(
    `http://10.110.12.19:8080/turmas/deletar/${turma.id_turma}`
  );
  const [nuvem] = useState(
    `https://geosenai.azurewebsites.net/turmas/deletar/${turma.id_turma}`
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const deletarTurma = async () => {
    // Fechar o modal de confirmação
    setModalVisible(false);

    try {
      const response = await fetch(local, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Turma excluída com sucesso
        Alert.alert("Turma excluída com sucesso");
        navigation.navigate("TelaTurmas"); // Navega para a tela de turmas após excluir a turma
      } else {
        // Turma não pôde ser excluída
        Alert.alert("Erro ao excluir turma");
      }
    } catch (error) {
      console.error("Erro ao excluir turma:", error);
      Alert.alert("Erro ao excluir turma. Verifique sua conexão de internet.");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.lixeiraButton}
        onPress={toggleModal} // Quando a lixeira for pressionada, abre o modal de confirmação
      >
        <View style={styles.circle}>
          <Image
            source={require("./../assets/lixeiraicon.png")}
            style={styles.lixeiraIcon}
          />
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirma a exclusão da turma?</Text>
            <View style={styles.buttonsContainer}>
              <Button title="Cancelar" onPress={toggleModal} />
              <Button title="Confirmar" onPress={deletarTurma} />
            </View>
          </View>
        </View>
      </Modal>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
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
            style={[styles.botãoVerMapa, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Ver no mapa</Text>
          </Pressable>
        </View>

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  fecharStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default InformacoesTurma;
