import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Image, Modal } from "react-native";
import Collapsible from "react-native-collapsible";
import { useAcessibilidade } from "../src/context/AcessibilidadeContext";
import * as Speech from "expo-speech";
import { Table, Row, Rows } from "react-native-table-component";
import { useApresentacao } from "../src/context/ApresentacaoContext";

const PerguntasFrequentes = ({ navigation }) => {
  const [perguntaAtiva, setPerguntaAtiva] = useState(null);

  const { modoApresentacao, modalVisibility, setModalVisibility, toggleModal } =
    useApresentacao();

  const produtosAAPM = [
    ["Produtos"],
    ["Bola de tênis de mesa"],
    ["Camiseta básica (BM, P, G, GG, EG, EGG)"],
    ["Cordão para crachá"],
    ["Óculos de segurança com CA"],
    ["Rede para cabelo"],
  ];

  const faqs = [
    {
      pergunta: "• Quais são os telefones do SENAI?",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta} multiline={true}>
            <Text style={{ fontWeight: "bold" }}>Secretaria:</Text> 16 21068700;
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>Setor de apoio:</Text> 21062783
            e 21062724;{"\n"}
            <Text style={{ fontWeight: "bold" }}>Facebook:</Text>{" "}
            @senaisaocarlos;{"\n"}
            <Text style={{ fontWeight: "bold" }}>Instagram:</Text>{" "}
            @senaisaocarlos601;{"\n"}
            <Text style={{ fontWeight: "bold" }}>E-mail:</Text>{" "}
            senaisaocarlos@sp.senai.br;{"\n"}
          </Text>
        </View>
      ),
    },
    {
      pergunta: "• Onde fica a minha turma?",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>
            Para localizar sua sala de aula, você pode procurar pelo código da
            sua turma em{" "}
            <Text
              style={styles.spanTxtVermelho}
              onPress={() => navigation.navigate("TelaTurmas")}
            >
              Turmas
            </Text>
            , acessá-la e localizar o nome da sala no primeiro quadro. Depois,
            basta acessar{" "}
            <Text
              style={styles.spanTxtVermelho}
              onPress={() => navigation.navigate("TelaMapa")}
            >
              Mapas{" "}
            </Text>
            e encontrar a sala correspondente!
          </Text>
        </View>
      ),
    },
    {
      pergunta: "• Quais são os horários da minha turma?  ",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>
            Para localizar os horários da sua turma, você pode acessar a sua
            turma em{" "}
            <Text
              style={styles.spanTxtVermelho}
              onPress={() => navigation.navigate("TelaTurmas")}
            >
              Turmas{" "}
            </Text>
            e entrar na tela de horários, pressionando Horários no segundo
            quadro.
          </Text>
        </View>
      ),
    },
    {
      pergunta: "• Qual o horário de intervalo da minha turma?  ",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>
            A nossa escola segue os seguintes horários para intervalo:
          </Text>
          <Text style={[styles.txtResposta, styles.spanTxtVermelho]}>
            Período da manhã:
          </Text>
          <Text style={styles.txtResposta}>
            <Text style={{ fontWeight: "bold" }}>
              Cursos de aprendizagem industrial
            </Text>{" "}
            - 9:20 às 9:45
          </Text>
          <Text style={styles.txtResposta}>
            <Text style={{ fontWeight: "bold" }}>Cursos técnicos</Text> - 9:45
            às 10:00
          </Text>
          <Text style={[styles.txtResposta, styles.spanTxtVermelho]}>
            Período da tarde:
          </Text>
          <Text style={styles.txtResposta}>
            <Text style={{ fontWeight: "bold" }}>
              Cursos de aprendizagem industrial
            </Text>{" "}
            - 15:20 às 15:40
          </Text>
          <Text style={styles.txtResposta}>
            <Text style={{ fontWeight: "bold" }}>Cursos técnicos</Text> - 15:45
            às 16h
          </Text>
        </View>
      ),
    },
    {
      pergunta: "• Onde posso monitorar minha frequência?  ",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>
            Infelizmente você não pode monitorar a sua frequência direto pelo
            totem, mas você pode fazê-lo acessando o{" "}
            <Text style={styles.spanTxtVermelho}>Portal Educacional </Text>
            do SENAI, acessando o link{" "}
            <Text style={{ fontWeight: "bold" }}>
              https://pess.sesisenaispedu.org.br/
            </Text>
            .
          </Text>
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Após logar no Portal Educacional, você deve seguir os seguintes
            passos para verificar sua frequência:
          </Text>
          <Text style={styles.txtResposta}>
            {">"} Dentro do menu inicial, acesse{" "}
            <Text style={{ fontWeight: "bold" }}>'Secretaria Virtual'</Text>
          </Text>
          <Text style={styles.txtResposta}>
            {">"} Selecione o serviço{" "}
            <Text style={{ fontWeight: "bold" }}>
              'Relatório de Aulas Dadas'
            </Text>
          </Text>
          <Text style={styles.txtResposta}>
            {">"} Selecione a turma e matrícula e clique em{" "}
            <Text style={{ fontWeight: "bold" }}>'Pesquisar'</Text>
          </Text>
        </View>
      ),
    },
    {
      pergunta: "• Como funciona a biblioteca da escola?  ",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>
            <Text style={{ fontWeight: "bold" }}>Qualquer aluno</Text> pode
            fazer a retirada de livros na biblioteca, seja esse sócio da AAPM ou
            não! A biblioteca do SENAI funciona de{" "}
            <Text style={{ fontWeight: "bold" }}>segunda à sábado</Text>, nos
            seguintes horários:
          </Text>
          <Text style={styles.txtResposta}>
            Segunda-feira à quinta-feira: 8:30 às 13:30 e 15:00 às 22:00
          </Text>
          <Text style={styles.txtResposta}>
            Sexta-feira: 8:30 às 13:30 e 15:00 às 22:00
          </Text>
          <Text style={styles.txtResposta}>
            Sábado: 8:00 às 12:15 e 12:30 às 14:15
          </Text>
        </View>
      ),
    },
    {
      pergunta: "• Produtos vendidos pela escola",
      conteudoResposta: (
        <View>
          <Text style={{ fontSize: 24 }}>
            <Text style={{ color: "red" }}>*</Text>Consultar valores no setor de
            apoio
          </Text>
          <View style={styles.espaco} />
          <Table borderStyle={{ borderWidth: 1, borderColor: "#ccc" }}>
            <Row
              data={produtosAAPM[0]}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows data={produtosAAPM.slice(1)} textStyle={styles.rowText} />
          </Table>
        </View>
      ),
    },
    {
      pergunta: "• O que é a AAPM?",
      conteudoResposta: (
        <View>
          <Text style={styles.txtResposta}>
            A Associação de Pais e Mestres é uma associação em parceria com
            alunos associados, que é a responsável por fornecer fundos para a
            maioria dos eventos do SENAI como o bingo de páscoa, além de
            recursos como geladeiras e microondas, que beneficiam a todos os
            alunos, sejam eles associados ou não.
          </Text>
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Para os associados, a AAPM oferece como benefícios internet dentro
            da escola, ármario próprio e acesso a recursos como mesa de pebolim
            e vídeogame, além de vários descontos dentro da escola.
          </Text>
          <View style={styles.espaco} />
          <Text style={[styles.txtResposta, styles.spanTxtVermelho]}>
            Preços da AAPM:
          </Text>
          <Text style={styles.txtResposta}>
            <Text style={{ fontWeight: "bold" }}>Semestral -</Text> R$120,00
          </Text>
          <Text style={styles.txtResposta}>
            <Text style={{ fontWeight: "bold" }}>Integral -</Text> R$380,00{" "}
            {"("}Em até 6x {"("}dinheiro, cartão ou pix{")"}
            {")"}
          </Text>
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Para se tornar um associado da AAPM, o aluno deve procurar o setor
            de apoio.
          </Text>
        </View>
      ),
    },
  ];

  const togglePergunta = (index) => {
    setPerguntaAtiva(perguntaAtiva === index ? null : index);
  };

  useEffect(() => {
    if (modoApresentacao) {
      setModalVisibility(true);
    }
  }, [modoApresentacao]);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}></View>

      <View style={styles.header}>
        <View style={{ alignSelf: "flex-start" }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require("./../assets/icons/arrow-left-solid.svg")}
              style={{ height: 50, width: 50 }}
            />{" "}
          </Pressable>
        </View>
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
                <Image
                  source={require("./../assets/icons/chevron-down-solid.svg")}
                  style={{ height: 25, width: 25, margin: 25 }}
                />
              </Pressable>
            ) : null}
            <Collapsible collapsed={perguntaAtiva !== index}>
              <View style={styles.respostaContainer}>
                {faq.conteudoResposta}
              </View>
            </Collapsible>
          </View>
        ))}
      </View>
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
              Painel de ajuda
            </Text>
            <Text style={styles.modalText}>
              Através desta tela você pode encontrar informações importantes e
              respostas para algumas dúvidas mais comuns entre os estudantes do
              SENAI
            </Text>

              <Image
                source={require("./../assets/apresentacao/perguntas.png")}
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
    backgroundColor: "#E8E8E8",
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: -40,
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
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
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    textAlign: "left",
    marginTop: 40,
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: 20,
  },
  seta: {
    padding: 25,
    width: 1,
    height: 10,
  },
  spanTxtVermelho: {
    color: "red",
    fontWeight: "bold",
  },
  espaco: {
    height: 10,
  },
  head: {
    height: 60,
    backgroundColor: "red",
  },
  headText: {
    fontSize: 30,
    margin: 6,
    color: "white",
    textAlign: "center",
  },
  rowText: {
    fontSize: 30,
    margin: 6,
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

export default PerguntasFrequentes;
