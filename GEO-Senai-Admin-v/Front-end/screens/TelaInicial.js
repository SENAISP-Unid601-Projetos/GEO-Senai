// Tela inicial da versão de administrador do GEO SENAI

import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

const TelaInicial = ({ navigation }) => {
  const botaoTurmas = () => {
    navigation.navigate('TelaTurmas')
  }

  const botaoVagas = () => {
    navigation.navigate('TelaVagas')
  }

  const botaoAdmin = () => {
    navigation.navigate('CadastroAdmin')
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: '15%',
        }}
      >
        <Image source={require('./../assets/Brasil.png')} style={styles.logo} />
        <Pressable onPress={() => navigation.navigate('PerguntasFrequentes')}>
          <Image
            source={require('./../assets/icons/circle-question-solid.png')}
            style={{ width: 50, height: 50 }}
          />
        </Pressable>
      </View>

      <Image
        source={require('./../assets/logoSenai.png')}
        style={styles.senai}
      />

      <Text style={styles.BemVindo}>
        Bem-vindo a versão de administrador do GEO SENAI.
      </Text>
      <Text style={styles.TextoMedio}>O que vamos fazer hoje?</Text>

      <Pressable style={styles.classesButton} onPress={botaoTurmas}>
        <Text style={styles.buttonText}>Gerenciar turmas</Text>
        <Image
          source={require('./../assets/icons/users-solid.png')}
          style={{ width: 40, height: 30 }}
        />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoVagas}>
        <Text style={styles.buttonText}>Gerenciar vagas</Text>
        <Image
          source={require('./../assets/icons/user-plus-solid.png')}
          style={{ width: 40, height: 30 }}
        />
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoAdmin}>
        <Text style={styles.buttonText}>Cadastrar administrador</Text>
        <Image
          source={require('./../assets/icons/key-solid.png')}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>

      <Text style={styles.textoOculto}>
        Todos os direitos reservados para @Templarios.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    padding: 20,
  },
  senai: {
    width: 200,
    height: 50,
  },
  classesButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginBottom: 20,
    alignItems: 'center',
    width: '85%',
  },
  buttonText: {
    color: '#fff',
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
  logo: {
    width: 70,
    height: 53,
  },
  ajuda: {},
  BemVindo: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
  },
  TextoMedio: {
    color: 'black',
    fontSize: RFValue(20),
    fontWeight: 'normal',
    marginBottom: 50,
  },
  textoOculto: {
    color: '#C8C8C8',
    fontSize: RFValue(10),
  },
})

export default TelaInicial
