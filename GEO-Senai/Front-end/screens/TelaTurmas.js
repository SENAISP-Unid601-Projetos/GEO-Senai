import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";
import { useApresentacao } from "../src/context/ApresentacaoContext";

const TelaTurmas = ({ navigation }) => {
  const { acessibilidade } = useAcessibilidade();
  const { modoApresentacao, modalVisibility, setModalVisibility, toggleModal } =
    useApresentacao();

  const [turmas, setTurmas] = useState([]);

  const [atualizarLista, setAtualizarLista] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(0);
  const turmasPorPagina = 5;
  const [existeProximo, setExisteProximo] = useState(true);
  const [existeAnterior, setExisteAnterior] = useState(false);

  const local = "http://10.110.12.19:8080/turmas";
  const nuvem = "https://appbackend1.azurewebsites.net/turmas";

  useEffect(() => {
    fetch(nuvem, {
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

  useEffect(() => {
    setPaginaAtual(0);
  }, [searchText]);

  useEffect(() => {
    setExisteProximo((paginaAtual + 1) * turmasPorPagina < turmas.length);
    setExisteAnterior(paginaAtual > 0);
  }, [paginaAtual, turmas.length]);

  const falarTexto = (texto) => {
    Speech.speak(texto, { language: "pt-BR" });
  };

  const renderizarTurmasPaginaAtual = () => {
    const inicio = paginaAtual * turmasPorPagina;
    const fim = inicio + turmasPorPagina;
    return turmas
      .filter((turma) =>
        turma.codigo_turma.toLowerCase().includes(searchText.toLowerCase())
      )
      .slice(inicio, fim)
      .map((turma) => (
        <Pressable
          key={turma.id}
          style={styles.ButtonTurmas}
          onPress={() =>
            navigation.navigate("InformacoesTurma", { turma: turma })
          }
        >
          <Text style={styles.buttonText}>{turma.codigo_turma}</Text>
        </Pressable>
      ));
  };

  const avancarPagina = () => {
    if (acessibilidade) {
      if (existeProximo) {
        setPaginaAtual(paginaAtual + 1);
        falarTexto("Avançar página");
      }
    } else {
      if (existeProximo) {
        setPaginaAtual(paginaAtual + 1);
      }
    }
  };

  const retrocederPagina = () => {
    if (acessibilidade) {
      if (existeAnterior) {
        setPaginaAtual(paginaAtual - 1);
        falarTexto("Retroceder página");
      }
    } else {
      if (existeAnterior) {
        setPaginaAtual(paginaAtual - 1);
      }
    }
  };

  const atualizarListaTurmas = () => {
    if (acessibilidade) {
      falarTexto("Atualizar lista");
      setAtualizarLista(!atualizarLista);
    } else {
      setAtualizarLista(!atualizarLista);
    }
  };

  useEffect(() => {
    if (modoApresentacao) {
      setModalVisibility(true);
    }
  }, [modoApresentacao]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("./../assets/icons/arrow-left-solid.svg")}
            style={{ height: 50, width: 50 }}
          />
        </Pressable>

        <Image
          source={require("./../assets/icons/users-black-solid.svg")}
          style={{ ...styles.icon, height: 50, width: 50 }}
        />
      </View>

      <Text style={styles.headerTitle}>Turmas</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.Buttons}>{renderizarTurmasPaginaAtual()}</View>
      </ScrollView>

      <View style={styles.paginacao}>
        {existeAnterior && (
          <Pressable style={styles.botaoPaginacao} onPress={retrocederPagina}>
            <Image
              source={require("./../assets/icons/chevron-left-solid.svg")}
              style={{ height: 25, width: 25 }}
            />
          </Pressable>
        )}

        <Text style={styles.paginaAtual}>{paginaAtual + 1}</Text>

        {existeProximo && (
          <Pressable style={styles.botaoPaginacao} onPress={avancarPagina}>
            <Image
              source={require("./../assets/icons/chevron-right-solid.svg")}
              style={{ height: 25, width: 25 }}
            />
          </Pressable>
        )}
      </View>

      <Pressable style={styles.atualizarButton} onPress={atualizarListaTurmas}>
        <Image
          source={require("./../assets/icons/arrows-rotate-solid.svg")}
          style={{ height: 25, width: 25 }}
        />
        <Text style={styles.buttonAttText}>Atualizar Lista</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                ...styles.modalText,
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              Painel de turmas
            </Text>
            <Text style={styles.modalText}>
              Através desta tela você pode navegar pelas turmas do SENAI cadastradas e
              obter informações em específico sobre elas
            </Text>
            <Image
              source={require("./../assets/apresentacao/telaTurmas.png")}
              style={{ height: 600, width: 1070 }}
            />
            <Pressable
              onPress={toggleModal}
              style={{
                alignItems: "center",
                backgroundColor: "red",
                borderRadius: 20,
                margin: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  padding: 10,
                  color: "white",
                }}
              >
                Continuar
              </Text>
            </Pressable>
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
    fontSize: 50,
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
    padding: 30,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  atualizarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#02234D",
    padding: 13,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center", // Adicionando alinhamento vertical para centralizar o texto
    width: 300,
    height: 75,
    marginTop: 20, // Ajuste a margem superior conforme necessário
  },
  buttonAttText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  iconPlus: {
    paddingRight: 14,
  },
  backButton: {
    marginTop: 20,
    marginRight: 10,
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: 20,
  },
  searchBar: {
    width: "50%",
    fontSize: 25,
    backgroundColor: "#E8E8E8",
    padding: 10,
    borderWidth: 1,

    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    borderBottomColor: "black",
    borderTopColor: "#E8E8E8",
    borderLeftColor: "#E8E8E8",
    borderRightColor: "#E8E8E8",
  },
  cabecalho: {
    flexDirection: "row",
  },
  paginacao: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoPaginacao: {
    paddingHorizontal: 10,
  },
  paginaAtual: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // escurece o fundo
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
    fontSize: 24,
  },
});

export default TelaTurmas;
