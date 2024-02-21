import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Cabecalho from './src/components/Cabecalho';

// Componente principal da tela inicial
const InformacoesTurma = ({ route }) => {
  const { turma } = route.params;

  return (
    <View style={styles.container}>
      {/* Cabeçalho vermelho no topo */}
      <View style={styles.header}>
        <Cabecalho/>
      </View>

      {/* Quadro vermelho ocupando a tela */}
      <View style={styles.redBack}>
        {/* Quadro1 */}
        <View style={[styles.quadro, styles.roundedCorners]}>
          <Text style={styles.titulo}>{turma.codigo_turma}</Text>
          <Text style={styles.corpoTXT}>Sala: {turma.sala_turma}</Text>
          <Text style={styles.corpoTXT}>Duração do curso: {turma.duracao_curso}</Text>

          <Pressable
            style={[styles.botãoVerMapa, { borderWidth: 1, }]} 
             onPress={() => console.log('Turmas pressionados')}
             >
            <Text style={styles.texto}>Ver no mapa</Text>
          </Pressable>
        </View>

        {/* Quadro2 */}
        <View style={[styles.quadro, styles.roundedCorners]}>

        <Pressable
            style={[styles.botaoFoto, { borderWidth: 1, }]} 
             onPress={() => console.log('Turmas pressionados')}
             >
            <Text style={styles.texto}>Foto</Text>
          </Pressable>

          <Pressable
            style={[styles.botaoHorario, { borderWidth: 1, }]} 
             onPress={() => console.log('Turmas pressionados')}
             >
            <Text style={styles.texto}>Horarios</Text>
          </Pressable>

          <Pressable
            style={[styles.botaoLocalizarse, { borderWidth: 1, }]} 
             onPress={() => console.log('Turmas pressionados')}
             >
            <Text style={styles.texto}>Localize-se</Text>
          </Pressable>
        </View>

        {/* Quadro3 */}
        <View style={[styles.quadro3, styles.roundedCorners]}>

        <Text style={styles.titulo}>{turma.nome_curso}</Text>

          <View style={styles.textoDoMeio}>
            <Text>{turma.desc_curso}</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo da tela
    paddingHorizontal: 120, // Adicionando margens laterais
  },
  header: {
    backgroundColor: '#ff0000', // Cor de fundo vermelha
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Cor da borda inferior
    alignItems: 'flex-end', // Alinhar itens à direita
    height: 70, // Altura do cabeçalho
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto do cabeçalho (branco)
  },
  logo: {
    width: 70,
    height: 53,
  },

  //quadro vermelho ocupando a tela
  redBack: {
    flex: 1,
    backgroundColor: 'white', // Cor de fundo vermelha do quadrado
    justifyContent: 'space-between', // Distribui os filhos uniformemente
    alignItems: 'center', // Centraliza conteúdo na horizontal
    flexDirection: 'row', // Alinha os elementos filhos na horizontal
    flexWrap: 'wrap', // Permite que os elementos filhos quebrem para a próxima linha
    padding: 10, // Adicionando preenchimento interno
  },
  quadro: {
    width: '49%', // Largura dos quadros
    height: '46%', // Altura dos quadros
    backgroundColor: 'red', // Cor de fundo dos quadros
    marginBottom: 5, // Margem inferior para separar os quadros
    alignItems: 'center',
  },
  quadro3: {
    width: '100%', // Largura do quadro3
    height: '50%', // Altura do quadro3
    backgroundColor: 'red', // Cor de fundo do quadro3
    marginTop: '1%', // Margem superior para separar do redBack
  },
  // os botões do quadro 1
  botãoVerMapa: {
    marginTop:'8%',
    borderRadius: 100,
    backgroundColor: 'white',
    height: 25,
    width: 90,
    alignItems: 'center',
    borderColor: 'black'
  },
  botaoFoto: {
    marginTop:'5%',
    borderRadius: 100,
    backgroundColor: 'white',
    height: 30,
    width: 90,
    alignItems: 'center',
    borderColor: 'black'
  },
  botaoHorario: {
    marginTop:'5%',
    borderRadius: 100,
    backgroundColor: 'white',
    height: 30,
    width: 90,
    alignItems: 'center',
    borderColor: 'black'
  },
  botaoLocalizarse: {
    marginTop:'5%',
    borderRadius: 100,
    backgroundColor: 'white',
    height: 30,
    width: 90,
    alignItems: 'center',
    borderColor: 'black'
  },
 
  titulo: {
    textAlign: 'center',
    fontSize: 50,
  },
  corpoTXT: {
    textAlign: 'center',
    fontSize: 25,
  },
  textoDoMeio: {
    backgroundColor: 'white',
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 10,
    height: '60%', // Altura do quadro3
    alignItems: 'center',
    alignContent: 'center',
  },

  // Estilo para arredondar as bordas dos quadros
  roundedCorners: {
    borderRadius: 20,
  },

});

export default InformacoesTurma;
