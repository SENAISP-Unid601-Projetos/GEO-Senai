import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
import Collapsible from 'react-native-collapsible'
import { RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons'

const PerguntasFrequentes = ({ navigation }) => {
  const [perguntaAtiva, setPerguntaAtiva] = useState(null)

  const faqs = [
    {
      pergunta: '• Como cadastrar uma turma/vaga de emprego nova no totem?',
      conteudoResposta: (
        <ScrollView style={{ height: 400 }}>
          <Text style={styles.txtResposta}>
            No menu inicial, acesse a tela de{' '}
            <Text
              style={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => navigation.navigate('TelaTurmas')}
            >
              Turmas
            </Text>{' '}
            /{' '}
            <Text
              style={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => navigation.navigate('TelaVagas')}
            >
              Vagas
            </Text>{' '}
            e pressione o botão de <Text style={{ fontWeight: 'bold' }}>+</Text>{' '}
            como indicado abaixo:
          </Text>

          <Image
            source={require('./../assets/ajuda/botaomais.jpg')}
            style={{ height: 80, width: '95%', alignSelf: 'center' }}
          />
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Feito isso, basta preencher as informações e pressionar o botão
            <Text style={{ fontWeight: 'bold' }}> "Enviar"</Text>.
          </Text>
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Caso não consiga ver sua turma/vaga após o envio, pressione o botão
            de recarregar para atualizar a tela.
          </Text>
        </ScrollView>
      ),
    },
    {
      pergunta: '• Como adicionar horários a uma turma?',
      conteudoResposta: (
        <ScrollView style={{ height: 400 }}>
          <Text style={styles.txtResposta}>
            No menu de turmas, selecione a turma escolhida e pressione o botão
            <Text style={{ fontWeight: 'bold' }}> "Horários"</Text> como
            indicado abaixo:
          </Text>
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/horariosinfo.jpg')}
            style={styles.imagemFAQ}
          />
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Dentro dessa tela, pressione o botão de{' '}
            <Text style={{ fontWeight: 'bold' }}>lápis</Text> para adicionar os
            respectivos horários. Basta pressionar o botão novamente para
            confirmar o envio.
          </Text>
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/horariostela.jpg')}
            style={{ ...styles.imagemFAQ, width: '95%' }}
          />
          <Text style={styles.txtResposta}>
            Caso não consiga ver os horários após o envio, pressione o botão de
            recarregar na tela de turmas para atualizar a tela.
          </Text>
        </ScrollView>
      ),
    },
    {
      pergunta: '• Como adicionar um logotipo a minha vaga de emprego?  ',
      conteudoResposta: (
        <ScrollView style={{ height: 400 }}>
          <Text style={styles.txtResposta}>
            No seu navegador, busque pela sua logo e abra com outra guia, como
            indicado na imagem abaixo:
          </Text>
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/abriremoutraguia.jpg')}
            style={styles.imagemFAQ}
          />
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>Copie o link da página.</Text>
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/copiarlink.jpg')}
            style={styles.imagemFAQ}
          />
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Na tela de cadastro de vaga {'('}ou edição, no caso de a vaga já
            existir{')'}, cole o link da imagem e salve os dados.
          </Text>
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/ondecolar.jpg')}
            style={{ ...styles.imagemFAQ, width: '95%', height: 200 }}
          />
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/linkcolado.jpg')}
            style={{ ...styles.imagemFAQ, width: '95%', height: 200 }}
          />
        </ScrollView>
      ),
    },
    {
      pergunta: '• Como editar uma turma/vaga de emprego existente?  ',
      conteudoResposta: (
        <ScrollView style={{ height: 400 }}>
          <Text style={styles.txtResposta}>
            No menu inicial, acesse a tela de{' '}
            <Text
              style={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => navigation.navigate('TelaTurmas')}
            >
              Turmas
            </Text>{' '}
            /{' '}
            <Text
              style={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => navigation.navigate('TelaVagas')}
            >
              Vagas
            </Text>{' '}
            e pressione aquela que você quiser editar.
          </Text>
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Dentro da vaga/turma escolhida, pressione o botão de lápis, como
            indicado abaixo:
          </Text>
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/editar.jpg')}
            style={{ ...styles.imagemFAQ, width: '95%', height: 200 }}
          />
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Feito isso, basta preencher as informações e pressionar o botão
            <Text style={{ fontWeight: 'bold' }}> "Enviar"</Text> para salvar.
          </Text>
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Caso não consiga ver a edição na sua turma/vaga após o envio,
            pressione o botão de recarregar para atualizar a tela.
          </Text>
        </ScrollView>
      ),
    },
    {
      pergunta: '• Como deletar uma turma/vaga de emprego existente?  ',
      conteudoResposta: (
        <ScrollView style={{ height: 400 }}>
          <Text style={styles.txtResposta}>
            No menu inicial, acesse a tela de{' '}
            <Text
              style={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => navigation.navigate('TelaTurmas')}
            >
              Turmas
            </Text>{' '}
            /{' '}
            <Text
              style={{ color: 'red', fontWeight: 'bold' }}
              onPress={() => navigation.navigate('TelaVagas')}
            >
              Vagas
            </Text>{' '}
            e pressione aquela que você quiser editar.
          </Text>
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Dentro da vaga/turma escolhida, pressione o botão de lixeira, como
            indicado abaixo:
          </Text>
          <View style={styles.espaco} />
          <Image
            source={require('./../assets/ajuda/excluir.jpg')}
            style={{ ...styles.imagemFAQ, width: '95%', height: 200 }}
          />
          <View style={styles.espaco} />
          <View style={styles.espaco} />
          <Text style={styles.txtResposta}>
            Caso ainda consiga ver sua turma/vaga após a exclusão, pressione o
            botão de recarregar para atualizar a tela.
          </Text>
        </ScrollView>
      ),
    },
  ]

  const togglePergunta = (index) => {
    setPerguntaAtiva(perguntaAtiva === index ? null : index)
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}></View>

      <View style={styles.header}>
        <View style={{ alignSelf: 'flex-start', marginTop: 40 }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require('./../assets/icons/arrow-left-solid.png')}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
        </View>
        <Text style={styles.titulo}>Ajuda</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: -40,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  quadro: {
    marginTop: 10,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  perguntaQuadro: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  perguntaTxt: {
    padding: 20,
    fontSize: RFValue(18),
    color: 'white',
    fontWeight: 'bold',
  },
  respostaContainer: {
    backgroundColor: 'white',
    padding: 5,
  },
  txtResposta: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: RFValue(18),
  },
  imagemFAQ: {
    height: 300,
    width: '80%',
    alignSelf: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  cabecalho: {
    flexDirection: 'row',
  },
  backButton: {
    textAlign: 'left',
    marginTop: 40,
  },
  icon: {
    alignSelf: 'flex-end',
    marginLeft: 20,
  },
  spanTxtVermelho: {
    color: 'red',
    fontWeight: 'bold',
  },
  espaco: {
    height: 10,
  },
})

export default PerguntasFrequentes
