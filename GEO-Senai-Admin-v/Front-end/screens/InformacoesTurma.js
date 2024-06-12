import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

const InformacoesTurma = ({ route, navigation }) => {
  const { turma } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const local = `http://10.110.12.19:8080/turmas/deletar/${turma.id_turma}`;
  const nuvem = `https://appbackend1.azurewebsites.net/turmas/deletar/${turma.id_turma}`;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const editarTurma = () => {
    navigation.navigate("EditarTurma", { turma: turma });
  };

  const botaoHorarios = () => {
    navigation.navigate("TelaHorarios", { turma: turma });
  };

  const deletarTurma = async () => {
    setModalVisible(false);

    try {
      const response = await fetch(nuvem, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        Alert.alert("Turma excluída com sucesso");
        navigation.navigate("TelaTurmas");
      } else {
        Alert.alert("Erro ao excluir turma");
      }
    } catch (error) {
      console.error("Erro ao excluir turma:", error);
      Alert.alert("Erro ao excluir turma. Verifique sua conexão de internet.");
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
          source={require('./../assets/icons/arrow-left-solid.png')}
          style={{ width: 24, height: 24 }}
        />
      </Pressable>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.redBack}>
          <View
            style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}
          >
            <Text style={styles.titulo}>{turma.codigo_turma}</Text>
            <Text style={styles.txtInfoCurso}>Sala: {turma.sala_turma}</Text>
            <Text style={styles.txtInfoCurso}>
              Duração do curso: {turma.duracao_curso}
            </Text>
          </View>

          <View
            style={[
              styles.quadro2,
              styles.roundedCorners,
              styles.quadroPadding,
            ]}
          >

            <Pressable style={styles.botao} onPress={botaoHorarios}>
              <Text style={{...styles.texto, padding: 5, fontSize: RFValue(16)}}>Horários</Text>
            </Pressable>
          </View>

          <View style={styles.quadro3}>
            <Text style={styles.titulo}>{turma.nome_curso}</Text>
            <View style={styles.textoDoMeio}>
              <Text style={styles.descTexto}>{turma.desc_curso}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable style={styles.lixeiraButton} onPress={toggleModal}>
        <View style={styles.circle}>
        <Image
          source={require('./../assets/icons/trash-solid.png')}
          style={{ width: 24, height: 24 }}
        />
        </View>
      </Pressable>

      <Pressable style={styles.editarButton} onPress={editarTurma}>
        <View style={styles.circle}>
        <Image
          source={require('./../assets/icons/pencil-solid.png')}
          style={{ width: 24, height: 24 }}
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
              <Pressable
                style={[styles.botoesModalCancelar]}
                onPress={toggleModal}
              >
                <Text style={styles.textoConfirmacao}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.botoesModalConfirmar]}
                onPress={deletarTurma}
              >
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
    height: "25%",
    backgroundColor: "red",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  quadro2: {
    width: "100%",
    height: "10%",
    backgroundColor: "red",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  quadro3: {
    width: "100%",
    height: "60%",
    backgroundColor: "red",
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  botao: {
    width: '60%',
    margin: 10,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  titulo: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "white",
  },
  txtInfoCurso: {
    textAlign: "center",
    fontSize: RFValue(16),
    fontWeight: "bold",
    color: "white",
  },
  textoDoMeio: {
    backgroundColor: "white",
    marginLeft: "3%",
    marginRight: "3%",
    borderRadius: 10,
    height: '75%',
    alignItems: "center",
    alignContent: "center",
  },
  descTexto: {
    fontSize: RFValue(15),
    padding: 10,
  },
  roundedCorners: {
    borderRadius: 20,
  },
  quadroPadding: {
    paddingHorizontal: 10,
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
    padding: 2,
    fontWeight: "bold",
    fontSize: RFValue(18),
  },
  textoConfirmacao: {
    padding: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: RFValue(18),
  },
});

export default InformacoesTurma;
