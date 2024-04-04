import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { FontAwesome } from "@expo/vector-icons";

const PerguntasFrequentes = ({ navigation }) => {
  const [perguntaAtiva, setPerguntaAtiva] = useState(null);

  const faqs = [
    { pergunta: "Pergunta 1", resposta: "Resposta 1" },
    { pergunta: "Pergunta 2", resposta: "Resposta 2" },
    { pergunta: "Pergunta 3", resposta: "Resposta 3" },
    // Adicione mais perguntas e respostas conforme necessário
  ];

  const togglePergunta = (index) => {
    setPerguntaAtiva(perguntaAtiva === index ? null : index);
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
          name="question-circle"
          size={50}
          color="black"
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.titulo}>Perguntas frequentes</Text>
        <Text style={styles.subtitulo}>Novo no SENAI? Esse "Guia de Sobrevivências" pode te ajudar.</Text>
      </View>

      <View style={styles.quadro}>
        {faqs.map((faq, index) => (
          <View key={index}>
            {perguntaAtiva === null || perguntaAtiva === index ? (
              <Pressable style={styles.perguntaQuadro} onPress={() => togglePergunta(index)}>
                  <Text style={styles.perguntaTxt}>{faq.pergunta}</Text>
                <FontAwesome name="chevron-down" size={25} color="black" style={styles.seta}/>
              </Pressable>
            ) : null}
            <Collapsible collapsed={perguntaAtiva !== index}>
              <Text style={styles.resposta}>{faq.resposta}</Text>
            </Collapsible>
          </View>
        ))}
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
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitulo: {
    marginTop: 10,
    fontSize: 30,
  },
  quadro: {
    marginTop: 40,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "red",
    borderRadius: 20,
    borderWidth: 1,
  },
  perguntaQuadro: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  perguntaTxt: {
    padding: 10,
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  resposta: {
    padding: 20,
    backgroundColor: 'white',
    fontSize: 25,
  },
  cabecalho: {
    flexDirection: "row",
  },
  backButton: {
    marginRight: 10,
    marginTop: 40,
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: 20,
  },
  seta: { 
    padding: 20,
  },
});

export default PerguntasFrequentes;
