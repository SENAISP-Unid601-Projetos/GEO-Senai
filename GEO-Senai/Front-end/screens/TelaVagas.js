import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaVagas = ({ navigation }) => {
  const [vagas, setVagas] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(0);
  const vagasPorPagina = 5;
  const [existeProximo, setExisteProximo] = useState(true);
  const [existeAnterior, setExisteAnterior] = useState(false);

  const local = "http://10.110.12.19:8080/vagas";
  const nuvem = "https://appsenai.azurewebsites.net/vagas";

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

  useEffect(() => {
    atualizarVagas();
  }, []);

  useEffect(() => {
    setExisteProximo((paginaAtual + 1) * vagasPorPagina < vagas.length);
    setExisteAnterior(paginaAtual > 0);
  }, [paginaAtual, vagas.length]);

  const renderizarVagasPaginaAtual = () => {
    const inicio = paginaAtual * vagasPorPagina;
    const fim = inicio + vagasPorPagina;
    return vagas.slice(inicio, fim).map((vaga) => (
      <Pressable
        key={vaga.id}
        style={styles.ButtonVagas}
        onPress={() => navigation.navigate("InformacoesVaga", { vaga: vaga })}
      >
        <Text style={styles.buttonText}>
          Área: {vaga.area_vaga} - Empresa: {vaga.nome_vaga}
        </Text>
      </Pressable>
    ));
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

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome name="arrow-left" size={50} color="black" />
        </Pressable>

        <FontAwesome
          style={styles.icon}
          name="user-plus"
          size={50}
          color="black"
        />
      </View>

      <View>
        <Text style={styles.headerTitle}>Vagas de Emprego</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.Buttons}>{renderizarVagasPaginaAtual()}</View>
      </ScrollView>

      <View style={styles.paginacao}>
        {existeAnterior && (
          <Pressable
            style={styles.botaoPaginacao}
            onPress={retrocederPagina}
            disabled={paginaAtual === 0}
          >
            <FontAwesome name="chevron-left" size={25} color="black" />
          </Pressable>
        )}

        <Text style={styles.paginaAtual}>{paginaAtual + 1}</Text>

        {existeProximo && (
          <Pressable
            style={styles.botaoPaginacao}
            onPress={avancarPagina}
            disabled={(paginaAtual + 1) * vagasPorPagina >= vagas.length}
          >
            <FontAwesome name="chevron-right" size={25} color="black" />
          </Pressable>
        )}
      </View>

      <Pressable style={styles.atualizarButton} onPress={atualizarVagas}>
        <FontAwesome
          name="refresh"
          size={25}
          style={styles.iconPlus}
          color="#ffffff"
        />
        <Text style={styles.buttonAttText}>Atualizar Lista</Text>
      </Pressable>
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
    marginTop: 40,
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
  Buttons: {
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  ButtonVagas: {
    backgroundColor: "#ff0000",
    padding: 30,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25, // Ajuste o tamanho da fonte conforme necessário
    fontWeight: "bold",
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
    paddingRight: 14,
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
    fontSize: 25,
    marginHorizontal: 10,
  },
});

export default TelaVagas;
