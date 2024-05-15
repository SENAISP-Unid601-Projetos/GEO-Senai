import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaHorarios = ({ navigation, route }) => {
  const { turma } = route.params;

  const local = `http://10.110.12.19:8080/turmas/editar/${turma.id_turma}`;
  const nuvem = `https://appsenai.azurewebsites.net/turmas/editar/${turma.id_turma}`;

  const [editando, setEditando] = useState(false);
  const [segundaHrr, setSegundaHrr] = useState("");
  const [tercaHrr, setTercaHrr] = useState("");
  const [quartaHrr, setQuartaHrr] = useState("");
  const [quintaHrr, setQuintaHrr] = useState("");
  const [sextaHrr, setSextaHrr] = useState("");

  useEffect(() => {
    setSegundaHrr(turma.seg_horario);
    setTercaHrr(turma.ter_horario);
    setQuartaHrr(turma.qua_horario);
    setQuintaHrr(turma.qui_horario);
    setSextaHrr(turma.sex_horario);
  }, [turma]);

  const editar = () => {
    setEditando(!editando);
  };

  const salvarHorarios = () => {
    const turmaEditada = {
      codigo_turma: turma.codigo_turma,
      nome_curso: turma.nome_curso,
      sala_turma: turma.sala_turma,
      duracao_curso: turma.duracao_curso,
      desc_curso: turma.desc_curso,
      seg_horario: segundaHrr,
      ter_horario: tercaHrr,
      qua_horario: quartaHrr,
      qui_horario: quintaHrr,
      sex_horario: sextaHrr,
    };

    fetch(local, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turmaEditada),
    })
      .then((response) => {
        if (response.ok) {
          // Atualiza o estado das variáveis de horários
          turma.seg_horario = segundaHrr;
          turma.ter_horario = tercaHrr;
          turma.qua_horario = quartaHrr;
          turma.qui_horario = quintaHrr;
          turma.sex_horario = sextaHrr;
          editar();
        } else {
          throw new Error("Erro ao salvar horários");
        }
      })
      .catch((error) => {
        console.error("Erro ao editar turma:", error);
        Alert.alert(
          "Erro",
          "Erro ao editar turma. Por favor, tente novamente mais tarde."
        );
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome name="arrow-left" size={24} color="black" />
        </Pressable>
        {editando == false && (
          <Pressable style={styles.editarButton} onPress={editar}>
            <View style={styles.circle}>
              <FontAwesome name="pencil" size={24} color="white" />
            </View>
          </Pressable>
        )}
        {editando && (
          <Pressable style={styles.editarButton} onPress={salvarHorarios}>
            <View style={styles.circle}>
              <FontAwesome name="check" size={24} color="white" />
            </View>
          </Pressable>
        )}
      </View>

      {/* Título */}
      <Text style={styles.txtHorarios}>Horários</Text>

      {/* Fundo Cinza */}
      <View style={styles.fundoCinza}>
        {/* Quadros Cinzas Pequenos */}
        <View style={styles.quadroCinzaPequenoTitulo}>
          <Text style={styles.quadroTextoTitulo}>{turma.codigo_turma}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Seg</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          {editando == false && (
            <Text style={styles.quadroTexto}>{turma.seg_horario}</Text>
          )}
          {editando && (
            <TextInput
              style={styles.input}
              placeholder="Insira aqui"
              placeholderTextColor="gray"
              value={segundaHrr}
              onChangeText={(text) => setSegundaHrr(text)}
            />
          )}
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Ter</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          {editando == false && (
            <Text style={styles.quadroTexto}>{turma.ter_horario}</Text>
          )}
          {editando && (
            <TextInput
              style={styles.input}
              placeholder="Insira aqui"
              placeholderTextColor="gray"
              value={tercaHrr}
              onChangeText={(text) => setTercaHrr(text)}
            />
          )}
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Qua</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          {editando == false && (
            <Text style={styles.quadroTexto}>{turma.qua_horario}</Text>
          )}
          {editando && (
            <TextInput
              style={styles.input}
              placeholder="Insira aqui"
              placeholderTextColor="gray"
              value={quartaHrr}
              onChangeText={(text) => setQuartaHrr(text)}
            />
          )}
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Qui</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          {editando == false && (
            <Text style={styles.quadroTexto}>{turma.qui_horario}</Text>
          )}
          {editando && (
            <TextInput
              style={styles.input}
              placeholder="Insira aqui"
              placeholderTextColor="gray"
              value={quintaHrr}
              onChangeText={(text) => setQuintaHrr(text)}
            />
          )}
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Sex</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          {editando == false && (
            <Text style={styles.quadroTexto}>{turma.sex_horario}</Text>
          )}
          {editando && (
            <TextInput
              style={styles.input}
              placeholder="Insira aqui"
              placeholderTextColor="gray"
              value={sextaHrr}
              onChangeText={(text) => setSextaHrr(text)}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },
  fundoCinza: {
    backgroundColor: "gray",
    width: "95%",
    height: "75%",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  quadroCinzaPequenoTitulo: {
    backgroundColor: "#d3d3d3",
    width: "100%",
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  quadroCinzaPequeno: {
    backgroundColor: "#d3d3d3",
    width: "50%",
    height: "16%",
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  quadroTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  quadroTextoTitulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  txtHorarios: {
    marginTop: 20,
    fontSize: 25,
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 60,
    marginRight: "70%",
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "center",
    height: "10%",
  },
  editarButton: {
    marginTop: 50,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default TelaHorarios;
