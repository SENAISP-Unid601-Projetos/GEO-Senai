import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaVagas = ({ navigation }) => { //navegar para tela inicial
  const [vagas, setVagas] = useState([]);

  const atualizarVagas = () => {
    fetch("http://10.110.12.19:8080/vagas", {
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
                navigation.navigate("InformacoesVaga", { vaga: vaga }) //navegar para tela inicial
              }
            >
              <Text style={styles.buttonText}>
                Área: {vaga.area_vaga} - Empresa: {vaga.nome_vaga}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.atualizarButton} onPress={atualizarVagas}>
        <FontAwesome
          name="refresh"
          size={20}
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
  buttonText: {
    color: "#fff",
    fontSize: 14,
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
    width: 200,
    height: 50,
    marginTop: 20, // Ajuste a margem superior conforme necessário
  },
  iconPlus: {
    paddingRight: 14,
  },
  buttonAttText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default TelaVagas;
