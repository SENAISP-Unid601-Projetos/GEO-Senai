// Versão do administrador de TelaTurmas, com o acréscimo da função de acrescentar
// novas turmas

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaTurmas = ({ navigation }) => {
  const [turmas, setTurmas] = useState([]);
  const [atualizarLista, setAtualizarLista] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const local = "http://10.110.12.19:8080/turmas";
  const nuvem = "https://appsenai.azurewebsites.net/turmas";

  const localD = "http://10.110.12.19:8080/turmas/deletar/all";
  const nuvemD = "https://appsenai.azurewebsites.net/turmas/deletar/all";

  useEffect(() => {
    fetch(local, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTurmas(data))
      .catch((error) => console.error("Erro ao obter turmas:", error));
  }, [atualizarLista]);

  const adicionarTurma = () => {
    navigation.navigate("CadastroTurma");
  };

  const atualizarListaTurmas = () => {
    setAtualizarLista(!atualizarLista);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const excluiTudo = async () => {
    setModalVisible(false);

    try {
      const response = await fetch(
        localD,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        Alert.alert("Sucesso na exclusão.");
      } else {
        Alert.alert("Erro ao excluir vagas");
      }
    } catch (error) {
      console.error("Erro ao excluir vagas:", error);
      Alert.alert("Erro ao excluir vagas. Verifique sua conexão de internet.");
    }
  };

  // Função para filtrar as turmas com base no texto de pesquisa
  const filteredTurmas = turmas.filter((turma) =>
    turma.codigo_turma.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      <Text style={styles.headerTitle}>Turmas</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar turma... Ex: 3TDS/3MDS"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.Buttons}>
          {filteredTurmas.map((turma) => (
            <Pressable
              key={turma.id}
              style={styles.ButtonTurmas}
              onPress={() =>
                navigation.navigate("InformacoesTurma", { turma: turma })
              }
            >
              <Text style={styles.buttonText}>{turma.codigo_turma}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.ButtonExcluiTudo} onPress={toggleModal}>
        <Text style={styles.buttonText}>Excluir tudo</Text>
      </Pressable>

      <Pressable style={styles.addButton} onPress={adicionarTurma}>
        <FontAwesome name="plus" size={24} color="white" />
      </Pressable>

      <Pressable style={styles.updateButton} onPress={atualizarListaTurmas}>
        <FontAwesome name="refresh" size={24} color="white" />
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
            <Text style={styles.modalText}>Confirma a exclusão?</Text>
            <View style={styles.buttonsContainer}>
              <Pressable
                style={[styles.botoesModalCancelar]}
                onPress={toggleModal}
              >
                <Text style={styles.texto}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.botoesModalConfirmar]}
                onPress={excluiTudo}
              >
                <Text style={styles.texto}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    padding: 20,
  },
  headerTitle: {
    textAlign: "center",
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  Buttons: {
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  ButtonTurmas: {
    backgroundColor: "#ff0000",
    padding: 20,
    marginBottom: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  updateButton: {
    position: "absolute",
    bottom: 20,
    right: 90,
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonExcluiTudo: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "black",
    width: 150,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    marginTop: 40,
    marginRight: 10,
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
    borderWidth: 2,
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
    color: "red",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  botoesModalCancelar: {
    borderRadius: 10,
    backgroundColor: "#4287f5",
    alignItems: "center",
    margin: 5,
  },
  botoesModalConfirmar: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
  },
  texto: {
    padding: 7,
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default TelaTurmas;
