import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaTurmas = ({ navigation }) => {
  const [turmas, setTurmas] = useState([]);
  const [atualizarLista, setAtualizarLista] = useState(true);

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

      <Pressable style={styles.atualizarButton} onPress={atualizarListaTurmas}>
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
  buttonAttText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  iconPlus: {
    paddingRight: 14,
  },
  backButton: {
    marginTop: 40,
    marginRight: 10,
  },
});

export default TelaTurmas;
