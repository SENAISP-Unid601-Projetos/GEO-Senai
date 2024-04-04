import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { FontAwesome } from "@expo/vector-icons";

const PerguntasFrequentes = ({ navigation }) => {
  const [perguntaAtiva, setPerguntaAtiva] = useState(null);

  const faqs = [
    {
      pergunta: "• Quais são os telefones do SENAI?",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>
            Conteúdo customizado para a pergunta 1
          </Text>
          <Image
            source={require("./../assets/Brasil.png")}
            style={styles.imagem}
          />
          <Pressable onPress={() => Linking.openURL("https://www.example.com")}>
            <Text style={styles.link}>Link para exemplo.com</Text>
          </Pressable>
        </View>
      ),
    },
    {
      pergunta: "• Onde fica a minha turma?",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>Para localizar sua sala de aula, você pode procurar
           pelo código da sua turma em <Text style={{color: 'red', fontWeight: 'bold'}} onPress={() => navigation.navigate('TelaTurmas')}>Turmas </Text>
           e localizar o nome da sala no primeiro quadro. Depois, basta acessar Mapas e encontrar
           a sala correspondente!
          </Text>
        </View>
      ),
    },
    {
      pergunta: "• Quais são os horários da minha turma?  ",
      conteudoResposta: (
        <View>
          <Text>Conteúdo customizado para a pergunta 3</Text>
        </View>
      ),
    },
    {
      pergunta: "• Qual o horário de intervalo da minha turma?  ",
      conteudoResposta: (
        <View>
          <Text>Conteúdo customizado para a pergunta 3</Text>
        </View>
      ),
    },
    {
      pergunta: "• Onde posso monitorar minha frequência?  ",
      conteudoResposta: (
        <View>
          <Text>Conteúdo customizado para a pergunta 3</Text>
        </View>
      ),
    },
    {
      pergunta: "• Como funciona a biblioteca da escola?  ",
      conteudoResposta: (
        <View>
          <Text>Conteúdo customizado para a pergunta 3</Text>
        </View>
      ),
    },
    {
      pergunta: "• Como faço para obter o uniforme escolar?",
      conteudoResposta: (
        <View>
          <Text>Conteúdo customizado para a pergunta 3</Text>
        </View>
      ),
    },
    {
      pergunta: "• O que é a AAPM?",
      conteudoResposta: (
        <View>
          <Text>Conteúdo customizado para a pergunta 3</Text>
        </View>
      ),
    },
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
        <Text style={styles.subtitulo}>
          Novo no SENAI? Este pequeno "Guia de Sobrevivências" pode te ajudar.
        </Text>
      </View>

      <View style={styles.quadro}>
        {faqs.map((faq, index) => (
          <View key={index}>
            {perguntaAtiva === null || perguntaAtiva === index ? (
              <Pressable
                style={styles.perguntaQuadro}
                onPress={() => togglePergunta(index)}
              >
                <Text style={styles.perguntaTxt}>{faq.pergunta}</Text>
                <FontAwesome
                  name="chevron-down"
                  size={25}
                  color="black"
                  style={styles.seta}
                />
              </Pressable>
            ) : null}
            <Collapsible collapsed={perguntaAtiva !== index}>
              <View style={styles.respostaContainer}>
                {/* Renderizando o conteúdo personalizado da resposta */}
                {faq.conteudoResposta}
              </View>
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
    alignItems: "center",
    marginTop: -60,
  },
  titulo: {
    fontSize: 50,
    fontWeight: "bold",
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  perguntaTxt: {
    padding: 20,
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  respostaContainer: {
    backgroundColor: "white",
    padding: 20,
  },
  txtResposta: {
    padding: 20,
    fontSize: 30,
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
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
    padding: 25,
  },
});

export default PerguntasFrequentes;
