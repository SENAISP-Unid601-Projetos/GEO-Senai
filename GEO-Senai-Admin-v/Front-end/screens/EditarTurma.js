import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

const EditarTurma = ({ route, navigation }) => {
  const { turma } = route.params;

  const local = `http://10.110.12.19:8080/turmas/editar/${turma.id_turma}`;
  const nuvem = `https://appsenai.azurewebsites.net/turmas/editar/${turma.id_turma}`;

  const [codigoTurmaEdt, setCodigoTurmaEdt] = useState("");
  const [nomeCursoEdt, setNomeCursoEdt] = useState("");
  const [salaTurmaEdt, setSalaTurmaEdt] = useState("");
  const [duracaoCursoEdt, setDuracaoCursoEdt] = useState("");
  const [descCursoEdt, setDescCursoEdt] = useState("");

  useEffect(() => {
    setCodigoTurmaEdt(turma.codigo_turma);
    setNomeCursoEdt(turma.nome_curso);
    setSalaTurmaEdt(turma.sala_turma);
    setDuracaoCursoEdt(turma.duracao_curso);
    setDescCursoEdt(turma.desc_curso);
  }, []);

  const salvarEdicao = () => {
    const turmaEditada = {
      codigo_turma: codigoTurmaEdt,
      nome_curso: nomeCursoEdt,
      sala_turma: salaTurmaEdt,
      duracao_curso: duracaoCursoEdt,
      desc_curso: descCursoEdt,
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
          Alert.alert("Sucesso", "Turma editada com sucesso. Por favor atualize a tela de turmas para vizualizar as alterações.");
          navigation.navigate("TelaTurmas");
        } else {
          throw new Error("Erro ao editar turma");
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
      <Pressable style={styles.voltarSeta} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={30} color="black" />
      </Pressable>

      <View style={styles.containerForm}>
        <Text style={styles.headerText}>Editar turma</Text>
        <TextInput
          style={styles.input}
          placeholder="Código da turma"
          placeholderTextColor="gray"
          value={codigoTurmaEdt}
          onChangeText={(text) => setCodigoTurmaEdt(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do curso"
          placeholderTextColor="gray"
          value={nomeCursoEdt}
          onChangeText={(text) => setNomeCursoEdt(text)}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Sala"
          placeholderTextColor="gray"
          value={salaTurmaEdt}
          onChangeText={(text) => setSalaTurmaEdt(text)}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Duração do curso"
          placeholderTextColor="gray"
          value={duracaoCursoEdt}
          onChangeText={(text) => setDuracaoCursoEdt(text)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição do curso"
          placeholderTextColor="gray"
          value={descCursoEdt}
          multiline
          numberOfLines={8}
          onChangeText={(text) => setDescCursoEdt(text)}
        />
        <View style={styles.containerBtnForm}>
          <Pressable style={styles.btnEditar} onPress={salvarEdicao}>
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    flex: 1,
    padding: 20,
  },
  containerForm: {
    verticalAlign: "middle",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  containerBtnForm: {
    alignItems: "flex-end",
  },
  voltarSeta: {
    marginTop: 40,
  },
  input: {
    height: 40,
    borderColor: "#E8E8E8",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 200,
  },
  btnEditar: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginBottom: 20,
  },
  seta: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default EditarTurma;
