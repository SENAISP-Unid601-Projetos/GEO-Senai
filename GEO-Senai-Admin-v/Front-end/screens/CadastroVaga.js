import React, { useState } from 'react'
import {
  View,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons' // Importe o ícone FontAwesome da biblioteca
import { RFValue } from 'react-native-responsive-fontsize'

const CadastroVaga = ({ navigation }) => {
  const [imagemVaga, setImagemVaga] = useState('')
  const [areaVaga, setAreaVaga] = useState('')
  const [nomeVaga, setNomeVaga] = useState('')
  const [descricaoVaga, setDescricaoVaga] = useState('')
  const [requisitosVaga, setRequisitosVaga] = useState('')
  const [cargaHorariaVaga, setCargaHorariaVaga] = useState('')
  const [salarioVaga, setSalarioVaga] = useState('')
  const [contatoVaga, setContatoVaga] = useState('')

  const local = 'http://10.110.12.19:8080/vagas/nova-vaga'
  const nuvem = 'https://appbackend1.azurewebsites.net/vagas/nova-vaga'

  const enviarDados = () => {
    // Valide os campos, se necessário
    if (
      areaVaga.trim() === '' ||
      nomeVaga.trim() === '' ||
      descricaoVaga.trim() === '' ||
      requisitosVaga.trim() === '' ||
      cargaHorariaVaga.trim() === '' ||
      contatoVaga.trim() === ''
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios')
      return
    }

    // Criar objeto de vaga com os dados
    const novaVaga = {
      imagem_vaga: imagemVaga,
      area_vaga: areaVaga,
      nome_vaga: nomeVaga,
      desc_vaga: descricaoVaga,
      requisitos_vaga: requisitosVaga,
      carga_vaga: cargaHorariaVaga,
      salario_vaga: salarioVaga,
      contato_vaga: contatoVaga,
    }

    // Enviar os dados para o backend
    fetch(nuvem, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaVaga),
    })
      .then((response) => {
        if (response.ok) {
          // Turma adicionada com sucesso, fazer algo, se necessário
          Alert.alert(
            'Sucesso',
            'Vaga postada com sucesso. Por favor atualize a tela de vagas para vizualizar as alterações.'
          )
          navigation.navigate('TelaVagas')
        } else {
          throw new Error('Erro ao adicionar vaga')
        }
      })
      .catch((error) => {
        console.error('Erro ao adicionar vaga:', error)
        Alert.alert(
          'Erro',
          'Erro ao adicionar vaga. Por favor, tente novamente mais tarde.'
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
          style={styles.voltarSeta}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('./../assets/icons/arrow-left-solid.png')}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>

        <View style={styles.containerForm}>
          <Text style={styles.headerText}>Cadastro de Vaga</Text>
          <TextInput
            style={styles.input}
            placeholder="Endereço de imagem (Logo da empresa)"
            placeholderTextColor="gray"
            value={imagemVaga}
            onChangeText={(text) => setImagemVaga(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Área da Vaga* Ex: TI, Mecânica"
            placeholderTextColor="gray"
            value={areaVaga}
            onChangeText={(text) => setAreaVaga(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome da Vaga*"
            placeholderTextColor="gray"
            value={nomeVaga}
            onChangeText={(text) => setNomeVaga(text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descrição da Vaga*"
            placeholderTextColor="gray"
            multiline
            numberOfLines={4}
            value={descricaoVaga}
            onChangeText={(text) => setDescricaoVaga(text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Requisitos da Vaga*"
            placeholderTextColor="gray"
            multiline
            numberOfLines={4}
            value={requisitosVaga}
            onChangeText={(text) => setRequisitosVaga(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Carga Horária*"
            placeholderTextColor="gray"
            value={cargaHorariaVaga}
            onChangeText={(text) => setCargaHorariaVaga(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Salário"
            placeholderTextColor="gray"
            value={salarioVaga}
            onChangeText={(text) => setSalarioVaga(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contato da Vaga*"
            placeholderTextColor="gray"
            value={contatoVaga}
            onChangeText={(text) => setContatoVaga(text)}
          />
          <View style={styles.containerBtnForm}>
            <Pressable style={styles.btnPublicar} onPress={enviarDados}>
              <Text style={styles.buttonText}>Publicar</Text>
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
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  containerBtnForm: {
    alignItems: 'flex-end',
  },
  voltarSeta: {
    marginTop: 40,
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
  btnPublicar: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    alignItems: 'center',
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

export default CadastroVaga
