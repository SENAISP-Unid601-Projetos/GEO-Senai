import React, { useState } from 'react';
import { View, TextInput, Pressable, Alert, StyleSheet, Text, Image } from 'react-native';

const CadastroTurma = ({ navigation }) => {
    const [codigoTurma, setCodigoTurma] = useState('');
    const [nomeCurso, setNomeCurso] = useState('');
    const [salaTurma, setSalaTurma] = useState('');
    const [duracaoCurso, setDuracaoCurso] = useState('');
    const [descricaoCurso, setDescricaoCurso] = useState('');
  
    const enviarDados = () => {
      // Valide os campos, se necessário
      if (codigoTurma.trim() === '' || nomeCurso.trim() === '' || salaTurma.trim() === '' || duracaoCurso.trim() === '' || descricaoCurso.trim() === '') {
        Alert.alert('Erro', 'Por favor, preencha todos os campos');
        return;
      }
  
      // Criar objeto turma com os dados
      const novaTurma = {
        "codigo_turma": codigoTurma,
        "nome_curso": nomeCurso,
        "sala_turma": salaTurma,
        "duracao_curso": duracaoCurso,
        "desc_curso": descricaoCurso
      };
  
      // Enviar os dados para o back-end
      fetch('http://localhost:8080/senaiauto/turmas/nova-turma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaTurma),
      })
        .then(response => {
          if (response.ok) {
            // Turma adicionada com sucesso, fazer algo, se necessário
            Alert.alert('Sucesso', 'Turma adicionada com sucesso');
            navigation.navigate('TelaTurmas'); // Navega para a tela de turmas após adicionar a turma
          } else {
            throw new Error('Erro ao adicionar turma');
          }
        })
        .catch(error => {
          console.error('Erro ao adicionar turma:', error);
          Alert.alert('Erro', 'Erro ao adicionar turma. Por favor, tente novamente mais tarde.');
        });
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("./assets/SetaRetorno2.png")}
              style={styles.seta}
            />
          </Pressable>
          <Text style={styles.headerText}>Cadastro de Turma</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Código da Turma"
          value={codigoTurma}
          onChangeText={text => setCodigoTurma(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do Curso"
          value={nomeCurso}
          onChangeText={text => setNomeCurso(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sala"
          value={salaTurma}
          onChangeText={text => setSalaTurma(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Duração do Curso"
          value={duracaoCurso}
          onChangeText={text => setDuracaoCurso(text)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição do Curso"
          multiline
          numberOfLines={4}
          value={descricaoCurso}
          onChangeText={text => setDescricaoCurso(text)}
        />
        <Pressable style={styles.button} onPress={enviarDados}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    textArea: {
      height: 100,
    },
    button: {
      backgroundColor: '#ff0000',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    seta: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
  });
  
  export default CadastroTurma;
