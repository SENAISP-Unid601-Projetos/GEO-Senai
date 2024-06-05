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
import { RFValue } from "react-native-responsive-fontsize";

const InformacoesVaga = ({ route, navigation }) => {
  const { vaga } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const local = `http://10.110.12.19:8080/vagas/deletar/${vaga.id_vaga}`;
  const nuvem = `https://appsenai.azurewebsites.net/vagas/deletar/${vaga.id_vaga}`;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const editarVaga = () => {
    navigation.navigate('EditarVaga', { vaga: vaga });
  };

  const deletarVaga = async () => {
    setModalVisible(false);

    try {
      const response = await fetch(nuvem, {
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
          <FontAwesome name="trash" size={24} color="white" />
        </View>
      </Pressable>

      <Pressable style={styles.editarButton} onPress={editarVaga}>
        <View style={styles.circle}>
          <FontAwesome name="pencil" size={24} color="white" />
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
              <Pressable style={[styles.botoesModalCancelar]} onPress={toggleModal} >
                <Text style={styles.textoConfirmacao}>Cancelar</Text>
              </Pressable>
              <Pressable style={[styles.botoesModalConfirmar]} onPress={deletarVaga} >
                <Text style={styles.textoConfirmacao}>Confirmar</Text>
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
  editarButton: {
    position: "absolute",
    marginTop: 30,
    top: 20,
    right: 80,
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
    fontSize: RFValue(20),
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
    fontSize: RFValue(18),
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
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  botoesModalCancelar: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
    margin: 5,
  },
  botoesModalConfirmar: {
    margin: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "gray",
    alignItems: "center",
  },
  texto: {
    padding: 7  ,
    fontWeight: 'bold',
    fontSize: RFValue(18),
    color: 'white',
  },
  textoConfirmacao: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFValue(18),
  },
});

export default InformacoesVaga;
