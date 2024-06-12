// Tela que permite ao administrador cadastrar novas turmas no GEO SENAI

import React, { useState } from 'react'
import {
  View,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons' // Importe o ícone FontAwesome da biblioteca
import { ScrollView } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

const CadastroTurma = ({ navigation }) => {
  const [codigoTurma, setCodigoTurma] = useState('')
  const [nomeCurso, setNomeCurso] = useState('')
  const [salaTurma, setSalaTurma] = useState('')
  const [duracaoCurso, setDuracaoCurso] = useState('')
  const [descricaoCurso, setDescricaoCurso] = useState('')

  const local = 'http://10.110.12.19:8080/turmas/nova-turma'
  const nuvem = 'https://appbackend1.azurewebsites.net/turmas/nova-turma'

  const enviarDados = () => {
    // Valide os campos, se necessário
    if (
      codigoTurma.trim() === '' ||
      nomeCurso.trim() === '' ||
      salaTurma.trim() === '' ||
      duracaoCurso.trim() === '' ||
      descricaoCurso.trim() === ''
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos')
      return
    }

    // Criar objeto turma com os dados
    const novaTurma = {
      codigo_turma: codigoTurma,
      nome_curso: nomeCurso,
      sala_turma: salaTurma,
      duracao_curso: duracaoCurso,
      desc_curso: descricaoCurso,
    }

    // Enviar os dados para o back-end
    fetch(nuvem, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaTurma),
    })
      .then((response) => {
        if (response.ok) {
          // Turma adicionada com sucesso, fazer algo, se necessário
          Alert.alert(
            'Sucesso',
            'Turma adicionada com sucesso. Por favor atualize a tela de turmas para vizualizar as alterações.'
          )
          navigation.navigate('TelaTurmas') // Navega para a tela de turmas após adicionar a turma
        } else {
          throw new Error('Erro ao adicionar turma')
        }
      })
      .catch((error) => {
        console.error('Erro ao adicionar turma:', error)
        Alert.alert(
          'Erro',
          'Erro ao adicionar turma. Por favor, tente novamente mais tarde.'
        )
      })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 40 }}
        >
          <Image
            source={require('./../assets/icons/arrow-left-solid.png')}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>

        <View style={styles.header} />
        <View style={styles.containerForm}>
          <Text style={styles.headerText}>Cadastro de Turma</Text>
          <TextInput
            style={styles.input}
            placeholder="Código da Turma"
            placeholderTextColor="gray"
            value={codigoTurma}
            onChangeText={(text) => setCodigoTurma(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do Curso"
            placeholderTextColor="gray"
            value={nomeCurso}
            onChangeText={(text) => setNomeCurso(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Sala"
            placeholderTextColor="gray"
            value={salaTurma}
            onChangeText={(text) => setSalaTurma(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Duração do Curso"
            placeholderTextColor="gray"
            value={duracaoCurso}
            onChangeText={(text) => setDuracaoCurso(text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descrição do Curso"
            placeholderTextColor="gray"
            multiline
            numberOfLines={4}
            value={descricaoCurso}
            onChangeText={(text) => setDescricaoCurso(text)}
          />
          <View style={styles.containerBtnForm}>
            <Pressable style={styles.button} onPress={enviarDados}>
              <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  containerForm: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  containerBtnForm: {
    flexWrap: 'rowrap',
    alignItems: 'flex-end',
  },
  input: {
    height: 40,
    borderColor: '#E8E8E8', // Cor da borda
    borderWidth: 2, // Largura da borda
    borderRadius: 8, // Raio da borda
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    alignItems: 'center',
    // alignSelf: "flex-end",
    // marginHorizontal: "50%",
  },
  buttonText: {
    color: '#fff',
    fontSize: RFValue(16),
    fontWeight: 'bold',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginBottom: 20,
  },
  seta: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
})

export default CadastroTurma
