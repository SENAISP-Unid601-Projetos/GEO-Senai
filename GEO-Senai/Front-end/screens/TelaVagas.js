import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";
import { useApresentacao } from "../src/context/ApresentacaoContext";

const TelaVagas = ({ navigation }) => {
  const { acessibilidade } = useAcessibilidade();
  const { modoApresentacao, modalVisibility, setModalVisibility, toggleModal } =
    useApresentacao();

  const [vagas, setVagas] = useState([]);

  const [paginaAtual, setPaginaAtual] = useState(0);
  const vagasPorPagina = 4; // Alterando para 4 vagas por página
  const [existeProximo, setExisteProximo] = useState(true);
  const [existeAnterior, setExisteAnterior] = useState(false);
  const [atualizarLista, setAtualizarLista] = useState(true);

  const local = "http://10.110.12.19:8080/vagas";
  const nuvem = "https://appsenai.azurewebsites.net/vagas";

  useEffect(() => {
    fetch(nuvem, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setVagas(data))
      .catch((error) => console.error("Erro ao obter vagas:", error));
  }, [atualizarLista]);

  useEffect(() => {
    setExisteProximo((paginaAtual + 1) * vagasPorPagina < vagas.length);
    setExisteAnterior(paginaAtual > 0);
  }, [paginaAtual, vagas.length]);

  const falarTexto = (texto) => {
    Speech.speak(texto, { language: "pt-BR" });
  };

  const atualizarVagas = () => {
    if (acessibilidade) {
      falarTexto("Atualizar lista");
      setAtualizarLista(!atualizarLista);
    } else {
      setAtualizarLista(!atualizarLista);
    }
  };

  const renderizarVagasPaginaAtual = () => {
    const inicio = paginaAtual * vagasPorPagina;
    const fim = inicio + vagasPorPagina;
    const vagasPagina = vagas.slice(inicio, fim);

    const metade = Math.ceil(vagasPagina.length / 2);
    const primeiraMetade = vagasPagina.slice(0, metade);
    const segundaMetade = vagasPagina.slice(metade);

    return (
      <View style={styles.row}>
        <View style={styles.column1}>
          {primeiraMetade.map((vaga) => (
            <Pressable
              key={vaga.id}
              style={styles.buttonVagas}
              onPress={() =>
                navigation.navigate("InformacoesVaga", { vaga: vaga })
              }
            >
              {vaga.imagem_vaga != "" && (
                <View
                  style={{
                    height: "80%",
                    backgroundColor: "red",
                    borderTopLeftRadius: 40,
                  }}
                >
                  <Image
                    style={styles.imgVaga}
                    source={{ uri: vaga.imagem_vaga }}
                  />
                </View>
              )}

              {vaga.imagem_vaga == "" && (
                <View
                  style={{
                    height: "80%",
                    backgroundColor: "white",
                    justifyContent: "center",
                    borderTopLeftRadius: 40,
                  }}
                >
                  <Text style={styles.imagemVaziaTxt}>{vaga.nome_vaga}</Text>
                </View>
              )}

              <Text style={styles.saberMaisTxt}>{vaga.nome_vaga} ...</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.column2}>
          {segundaMetade.map((vaga) => (
            <Pressable
              key={vaga.id}
              style={styles.buttonVagas}
              onPress={() =>
                navigation.navigate("InformacoesVaga", { vaga: vaga })
              }
            >
              {vaga.imagem_vaga != "" && (
                <View
                  style={{
                    height: "80%",
                    backgroundColor: "red",
                    borderTopLeftRadius: 40,
                  }}
                >
                  <Image
                    style={styles.imgVaga}
                    source={{ uri: vaga.imagem_vaga }}
                  />
                </View>
              )}

              {vaga.imagem_vaga == "" && (
                <View
                  style={{
                    height: "80%",
                    backgroundColor: "white",
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.imagemVaziaTxt}>{vaga.nome_vaga}</Text>
                </View>
              )}

              <Text style={styles.saberMaisTxt}> {vaga.nome_vaga} ...</Text>
            </Pressable>
          ))}
        </View>
      </View>
    );
  };

  const avancarPagina = () => {
    if (existeProximo) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const retrocederPagina = () => {
    if (existeAnterior) {
      setPaginaAtual(paginaAtual - 1);
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
          source={require("./../assets/icons/user-plus-solid.svg")}
          style={{ ...styles.iconPlus, height: 50, width: 70 }}
        />
      </View>

      <View>
        <Text style={styles.headerTitle}>Vagas de Emprego</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderizarVagasPaginaAtual()}
      </ScrollView>

      <View style={styles.paginacao}>
        {existeAnterior && (
          <Pressable
            style={styles.botaoPaginacao}
            onPress={retrocederPagina}
            disabled={paginaAtual === 0}
          >
            <Image
              source={require("./../assets/icons/chevron-left-solid.svg")}
              style={{ height: 25, width: 25 }}
            />
          </Pressable>
        )}

        <Text style={styles.paginaAtual}>{paginaAtual + 1}</Text>

        {existeProximo && (
          <Pressable
            style={styles.botaoPaginacao}
            onPress={avancarPagina}
            disabled={(paginaAtual + 1) * vagasPorPagina >= vagas.length}
          >
            <Image
              source={require("./../assets/icons/chevron-right-solid.svg")}
              style={{ height: 25, width: 25 }}
            />
          </Pressable>
        )}
      </View>

      <Pressable style={styles.atualizarButton} onPress={atualizarVagas}>
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
              Painel de vagas de emprego
            </Text>
            <Text style={styles.modalText}>
              Através desta tela você pode navegar por vagas de emprego
              cadastradas do mural do SENAI e obter informações sobre elas
            </Text>
            <Image
              source={require("./../assets/apresentacao/telaVagas.png")}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    marginTop: 20,
  },
  headerTitle: {
    textAlign: "center",
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Para evitar que o último botão seja cortado
  },
  row: {
    justifyContent: "center",
    width: "100%",
    height: "50%",
    flexDirection: "row",
    marginBottom: 20,
  },
  column1: {
    alignItems: "flex-end",
    padding: 20,
    width: "45%",
  },
  column2: {
    alignItems: "flex-start",
    padding: 20,
    width: "45%",
  },
  imgVaga: {
    height: "100%",
    width: 700,
    borderTopLeftRadius: 40,
    marginTop: 10,
  },
  buttonVagas: {
    backgroundColor: "#ff0000",
    height: "100%",
    width: "90%",
    alignItems: "center",
    margin: 20,
    borderTopLeftRadius: 40,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saberMaisTxt: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 33,
    color: "white",
  },
  imagemVaziaTxt: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 40,
    backgroundColor: "white",
    width: 700,
  },
  atualizarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#02234D",
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 270,
  },
  iconPlus: {
    marginTop: 20,
    marginLeft: 10,
  },
  buttonAttText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  cabecalho: {
    flexDirection: "row",
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: 20,
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
    fontSize: 35,
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

export default TelaVagas;
