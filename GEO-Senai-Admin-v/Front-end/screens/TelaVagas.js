import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Modal,
  Button,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaVagas = ({ navigation }) => {
  const [vagas, setVagas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const local = "http://10.110.12.19:8080/vagas";
  const nuvem = "https://geosenai.azurewebsites.net/vagas";

  const botaoMais = () => {
    navigation.navigate("CadastroVaga");
  };

  const atualizarVagas = () => {
    fetch(local, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setVagas(data))
      .catch((error) => console.error("Erro ao obter vagas:", error));
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const excluiTudo = async () => {
    setModalVisible(false);

    try {
      const response = await fetch(
        "http://10.110.12.19:8080/vagas/deletar/all",
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

  useEffect(() => {
    atualizarVagas();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome name="arrow-left" size={24} color="black" />
        </Pressable>
      </View>

      <View>
        <Text style={styles.headerTitle}>Vagas de Emprego</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.Buttons}>
          {vagas.map((vaga) => (
            <Pressable
              key={vaga.id}
              style={styles.ButtonVagas}
              onPress={() =>
                navigation.navigate("InformacoesVaga", { vaga: vaga })
              }
            >
              <Text style={styles.buttonText}>
                Área: {vaga.area_vaga} - Empresa: {vaga.nome_vaga}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.ButtonExcluiTudo} onPress={toggleModal}>
        <Text style={styles.buttonText}>Excluir tudo</Text>
      </Pressable>

      <Pressable style={styles.addButton} onPress={botaoMais}>
        <FontAwesome name="plus" size={24} color="white" />
      </Pressable>

      <Pressable style={styles.updateButton} onPress={atualizarVagas}>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginTop: 40,
    marginRight: 10,
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
  ButtonVagas: {
    backgroundColor: "#ff0000",
    padding: 20,
    marginBottom: 10,
    alignItems: "center",
    width: "80%",
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

export default TelaVagas;
