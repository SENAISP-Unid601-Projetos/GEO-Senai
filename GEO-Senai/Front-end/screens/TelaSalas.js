import React, { useState, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaSalas = ({ navigation, route }) => {
  const [salas, setSalas] = useState([]);
  const [atualizarLista, setAtualizarLista] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(0);
  const salasPorPagina = 5;
  const [existeProximo, setExisteProximo] = useState(true);
  const [existeAnterior, setExisteAnterior] = useState(false);

  const { local, andar } = route.params;

  const nuvem = "https://appsenai.azurewebsites.net/salas";

  useEffect(() => {
    if (atualizarLista) {
      fetch(local, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setSalas(data))
        .catch((error) => Alert.alert("Erro ao obter salas:", error))
        .finally(() => setAtualizarLista(false));
    }
  }, [atualizarLista, local]);

  useEffect(() => {
    setPaginaAtual(0);
  }, [searchText]);

  useEffect(() => {
    setExisteProximo((paginaAtual + 1) * salasPorPagina < salas.length);
    setExisteAnterior(paginaAtual > 0);
  }, [paginaAtual, salas.length]);

  const renderizarSalasPaginaAtual = () => {
    const inicio = paginaAtual * salasPorPagina;
    const fim = inicio + salasPorPagina;
    return salas
      .filter((sala) =>
        sala.nome_sala.toLowerCase().includes(searchText.toLowerCase())
      )
      .slice(inicio, fim)
      .map((sala) => (
        <Pressable
          key={sala.id}
          style={styles.ButtonTurmas}
          onPress={() => navigation.navigate("TelaFoto", { sala: sala })}
        >
          <Text style={styles.buttonText}>{sala.nome_sala}</Text>
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

  const atualizarListaSalas = () => {
    setAtualizarLista(true);
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

        <FontAwesome name="building" size={50} color="black" style={styles.icon} />
      </View>

      <Text style={styles.headerTitle}>Salas - {andar}</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar sala..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.Buttons}>{renderizarSalasPaginaAtual()}</View>
      </ScrollView>

      <View style={styles.paginacao}>
        {existeAnterior && (
          <Pressable style={styles.botaoPaginacao} onPress={retrocederPagina}>
            <FontAwesome name="chevron-left" size={25} color="black" />
          </Pressable>
        )}

        <Text style={styles.paginaAtual}>{paginaAtual + 1}</Text>

        {existeProximo && (
          <Pressable style={styles.botaoPaginacao} onPress={avancarPagina}>
            <FontAwesome name="chevron-right" size={25} color="black" />
          </Pressable>
        )}
      </View>

      <Pressable style={styles.atualizarButton} onPress={atualizarListaSalas}>
        <FontAwesome
          name="refresh"
          size={50}
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
  headerTitle: {
    textAlign: "center",
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 20,
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
    width: 300,
    height: 75,
    marginTop: 20,
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
    marginTop: 40,
    marginRight: 10,
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: 20,
  },
  searchBar: {
    width: "80%",
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
    alignItems: "center",
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

export default TelaSalas;
