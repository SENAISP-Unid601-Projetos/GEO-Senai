import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, TextInput, Button, Alert, ScrollView } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import BotaoADM from './src/components/BotaoADM';

const TelaTurmas = ({ navigation }) => {
  const [turmas, setTurmas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal de login
  const [senha, setSenha] = useState(''); // Estado para armazenar a senha
  const [adm, setAdm] = useState(false); // Estado para controlar se o usuário é um administrador
  const [atualizarLista, setAtualizarLista] = useState(true); // Estado para controlar se a lista de turmas foi atualizada

  useEffect(() => {
    // Chamada para a sua API para obter a lista de turmas
    fetch('http://localhost:8080/senaiauto/turmas')
      .then(response => response.json())
      .then(data => setTurmas(data))
      .catch(error => console.error('Erro ao obter turmas:', error));
  }, [atualizarLista]); // Adicione 'atualizarLista' como dependência para re-chamar o useEffect quando o estado for alterado

  const adicionarTurma = () => {
    navigation.navigate('CadastroTurma');
  };

  // Função para exibir ou ocultar o modal de login
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Função para lidar com o login
  const handleLogin = () => {
    // Lógica de autenticação
    if (senha === '1234') {
      setAdm(true);
      setModalVisible(false);
    } else {
      window.alert('Senha incorreta.');
    }
  };

  // Função para atualizar a lista de turmas
  const atualizarListaTurmas = () => {
    setAtualizarLista(!atualizarLista);
  };

  // Função para entrar/sair do modo ADM
  const toggleADM = () => {
    if (!adm) {
      toggleModal();
    } else {
      setAdm(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.BemVindo}>Turmas</Text>

      {/* Componente Cabeçalho */}
      <Cabecalho />

      <View style={styles.Buttons}>
        {turmas.map(turma => (
          <Pressable
            key={turma.id}
            style={styles.ButtonTurmas}
            onPress={() => navigation.navigate('InformacoesTurma', { turma: turma })}
          >
            <Text style={styles.buttonText}>{turma.codigo_turma}</Text>
          </Pressable>
        ))}
        {adm && (
          <Pressable style={styles.ButtonAdd} onPress={adicionarTurma}>
            <Text style={styles.buttonText}>Adicionar Turma</Text>
          </Pressable>
        )}
      </View>

      <Pressable style={styles.ReturnButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('./assets/SetaRetorno2.png')}
          style={styles.seta}
        />
      </Pressable>

      {/* Componente BotaoADM */}
      <BotaoADM onPress={toggleADM} adm={adm} />

      {/* Botão para atualizar a lista de turmas */}
      {adm && (
        <Pressable
          style={styles.atualizarButton}
          onPress={atualizarListaTurmas}
        >
          <Text style={styles.buttonAttText}>Atualizar Lista</Text>
        </Pressable>
      )}

      {/* Modal de login */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Entre como administrador</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={text => setSenha(text)} // Atualiza o estado da senha
              secureTextEntry={true}
            />
            <Button title="Login" onPress={handleLogin} />
            <Pressable
              style={[styles.button]}
              onPress={toggleModal}
            >
              <Text style={styles.fecharStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#ff0000',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 70,
    height: 53,
    alignSelf: 'flex-start',
  },
  BemVindo: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Buttons: {
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  ButtonTurmas: {
    backgroundColor: '#ff0000',
    padding: 20,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: 'center',
    width: 200,
    height: 65,
  },
  ButtonAdd: {
    backgroundColor: '#0384fc',
    padding: 20,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: 'center',
    width: 200,
    height: 65,
  },
  ReturnButton: {
    backgroundColor: '#ff0000',
    padding: 5,
    borderRadius: 30,
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  atualizarButton: {
    backgroundColor: '#0384fc',
    padding: 13,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center', // Adicionando alinhamento vertical para centralizar o texto
    width: 140,
    height: 40,
    position: 'absolute',
    bottom: 20,
    left: 80,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonAttText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  settingsbuttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  seta: {
    width: 30,
    height: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  fecharStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default TelaTurmas;
