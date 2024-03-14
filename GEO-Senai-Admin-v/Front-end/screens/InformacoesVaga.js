import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InformacoesVaga = ({ route, navigation }) => {
  const { vaga } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const local = `http://10.110.12.19:8080/vagas/deletar/${vaga.id_vaga}`;
  const nuvem = `https://geosenai.azurewebsites.net/vagas/${vaga.id_vaga}`;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const deletarVaga = async () => {
    setModalVisible(false);

    try {
      const response = await fetch(local, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        Alert.alert("Vaga excluída com sucesso");
        navigation.navigate("TelaVagas");
      } else {
        Alert.alert("Erro ao excluir vaga");
      }
    } catch (error) {
      console.error("Erro ao excluir vaga:", error);
      Alert.alert("Erro ao excluir vaga. Verifique sua conexão de internet.");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.redBack}>
          <View
            style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}
          >
            <Text style={styles.titulo}>{vaga.nome_vaga}</Text>
          </View>

          <View
            style={[
              styles.quadro2,
              styles.roundedCorners,
              styles.quadroPadding2,
            ]}
          >
            <View style={styles.textoDoMeio}>
              <Text style={styles.descTexto}>
                <Text style={{ fontWeight: "bold" }}>Descrição da vaga:</Text>{" "}
                {vaga.desc_vaga}
              </Text>
              <Text style={styles.descTexto}>
                <Text style={{ fontWeight: "bold" }}>Requisitos:</Text>{" "}
                {vaga.requisitos_vaga}
              </Text>
              <Text style={styles.descTexto}>
                <Text style={{ fontWeight: "bold" }}>Carga Horária:</Text>{" "}
                {vaga.carga_vaga}
              </Text>
              <Text style={styles.descTexto}>
                <Text style={{ fontWeight: "bold" }}>Contato:</Text>{" "}
                {vaga.contato_vaga}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable style={styles.lixeiraButton} onPress={toggleModal}>
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
            <Text style={styles.modalText}>Confirma a exclusão da vaga?</Text>
            <View style={styles.buttonsContainer}>
              <Button title="Cancelar" onPress={toggleModal} />
              <Button title="Confirmar" onPress={deletarVaga} />
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
  },
  backButton: {
    marginTop: 40,
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  lixeiraButton: {
    position: "absolute",
    marginTop: 30,
    top: 20,
    right: 20,
    zIndex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 110,
    paddingHorizontal: 20,
    width: "100%",
  },
  redBack: {
    backgroundColor: "#E8E8E8",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  quadro: {
    width: "100%",
    backgroundColor: "red",
    marginBottom: 10,
    alignItems: "center",
  },
  quadro2: {
    width: "100%",
    backgroundColor: "red",
    marginTop: 10,
  },
  botao: {
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: "white",
    height: 30,
    width: 90,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  titulo: {
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  txtInfoCurso: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  textoDoMeio: {
    backgroundColor: "white",
    marginLeft: "3%",
    marginRight: "3%",
    borderRadius: 10,
    height: "60%",
    alignContent: "center",
  },
  descTexto: {
    fontSize: 18,
    padding: 10,
  },
  roundedCorners: {
    borderRadius: 20,
  },
  quadroPadding: {
    padding: 10,
  },
  quadroPadding2: {
    padding: 10,
    height: "",
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default InformacoesVaga;
