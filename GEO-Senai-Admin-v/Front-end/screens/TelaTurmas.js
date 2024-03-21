// Versão do administrador de TelaTurmas, com o acréscimo da função de acrescentar
// novas turmas

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView, Modal, Button, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaTurmas = ({ navigation }) => {
  const [turmas, setTurmas] = useState([]);
  const [atualizarLista, setAtualizarLista] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [local] = useState("http://10.110.12.19:8080/turmas");

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
        "http://10.110.12.19:8080/turmas/deletar/all",
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

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      <Text style={styles.headerTitle}>Turmas</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.Buttons}>
          {turmas.map((turma) => (
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
              <Button title="Cancelar" onPress={toggleModal} />
              <Button title="Confirmar" onPress={excluiTudo} />
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
});

export default TelaTurmas;
