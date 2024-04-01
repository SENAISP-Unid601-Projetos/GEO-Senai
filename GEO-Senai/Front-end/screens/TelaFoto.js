import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Cor de fundo da tela
  },

// //aparenta não estar sendo utilizado
//   header: {
//     position: 'absolute', // Posicionamento absoluto para o cabeçalho
//     top: 0, // No topo da tela
//     width: '100%', // Largura total
//     backgroundColor: '#ff0000', // Cor de fundo vermelha
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc', // Cor da borda inferior
//     alignItems: 'flex-end', // Alinhar itens à direita
//   },
//   //aparenta não estar sendo utilizado
//   headerText: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: '#fff', // Cor do texto do cabeçalho (branco)
//   },
//   //aparenta não estar sendo utilizado
//   logo: {
//     width: 70,
//     height: 53,
//     position: 'absolute', // Posicionamento absoluto para o logo
//     top: 0,
//     left: 0,
//   },

  
  //quadro vermelho no centro da tela
  redBack: {
    backgroundColor: 'red', // Cor de fundo vermelha do quadrado
    width: '80%', // Largura do quadrado (80% da largura da tela)
    height: '80%', // Altura do quadrado (70% da altura da tela)
    // aspectRatio: 1, // Mantém a proporção 1:1 para fazer um quadrado
    justifyContent: 'space-between', // Distribui os filhos uniformemente
    alignItems: 'center', // Centraliza conteúdo na horizontal
    flexDirection: 'column', // Alinha os elementos filhos na...
    borderRadius: 30,
    borderWidth: 2, // Adicionando borda
    borderColor: 'black', // Definindo a cor da borda como preto
  },

  squareBaixo: {
    backgroundColor: 'red', // Cor de fundo vermelha do quadrado
    width: '100%', // Largura do quadrado (80% da largura da tela)
    height: 10,
    aspectRatio: 10 / 1, // Mantém a proporção 10:1 para fazer uma barra horizontal
    flexDirection: 'row', // Alinhando os botões na horizontal
    justifyContent: 'center', // Centralizando os botões na horizontal
    alignItems: 'center', // Centralizando conteúdo na vertical
    borderRadius: 30,
    marginBottom: 40, // Aumentando a margem inferior para mover os botões para baixo
    marginTop: 30, // Adicionando uma margem superior para espaçamento
    
  },

  //Botões
  buttonRetornar: {
    borderWidth: 1,            // Define a largura da borda como 1
    paddingVertical: 5,        // Reduzindo o padding vertical
    paddingHorizontal: 10,    // Reduzindo o padding horizontal
    borderRadius: 10,          // Define o raio da borda como 10 para tornar os cantos arredondados
    marginHorizontal: 25,      // Adicionando um pequeno espaçamento horizontal entre os botões
    width: 200,                // Definindo a largura do botão como 200
    height: 50,                // Definindo a altura do botão como 50
    backgroundColor: 'white',
    alignItems:  'center',
    borderColor: 'white',
},
buttonTextRetornar: {
  fontSize: 30, 
  fontWeight: 'bold',
  alignSelf: 'center',
},

  buttonSeguir: {
    borderWidth: 1,            // Define a largura da borda como 1
    paddingVertical: 5,        // Reduzindo o padding vertical
    paddingHorizontal: 10,    // Reduzindo o padding horizontal
    borderRadius: 10,          // Define o raio da borda como 10 para tornar os cantos arredondados
    marginHorizontal: 25,      // Adicionando um pequeno espaçamento horizontal entre os botões
    width: 200,                // Definindo a largura do botão como 200
    height: 50,                // Definindo a altura do botão como 50
    backgroundColor: 'white',
    alignItems:  'center',
    borderColor: 'white',
  },
  buttonTextSeguir: {
    fontSize: 30, 
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  buttonQR: {
    borderWidth: 1,
    paddingVertical: 5, // Reduzindo o padding vertical
    paddingHorizontal: 10, // Reduzindo o padding horizontal
    borderRadius: 10,
    marginHorizontal: 5, // Adicionando um pequeno espaçamento horizontal entre os botões
    width: 200,                // Definindo a largura do botão como 200
    height: 50,                // Definindo a altura do botão como 50
    backgroundColor: 'white',
    alignItems:  'center',
    borderColor: 'white',
  },
  buttonTextQR: {
    fontSize: 25, // Reduzindo o tamanho do texto
    fontWeight: 'bold',
  },

  buttonVoltar: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100, // Define a borda para fazer o botão circular (valor alto para garantir que seja um círculo)
    width: 100, // Define a largura do botão
    height: 100, // Define a altura do botão (se estiver usando flexDirection: 'column')
    marginTop: 40, // Adicionando margem superior
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonTextVoltar: {
    fontSize: 21, // Reduzindo o tamanho do texto
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  buttonADM: {
    position: 'absolute',
    bottom: 20,
    //left: 20,
    right: 20,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonTextADM: {
    fontSize: 14, // Reduzindo o tamanho do texto
    fontWeight: 'bold',
  },
 

  Tiulo_Informatica: {
    backgroundColor: 'gray',
    borderRadius: 30,
    width: 120,
    height: 30,
    textAlign: 'center',
    position: 'absolute', // Adicionando posicionamento absoluto
    top: 0, // Posicionando no topo do quadro vermelho
    marginTop: 5, // Adicionando margem superior
  },

  Imagem_Foto: {
    width: '40%', // Mantendo a largura atual
    height: '60%', // Mantendo a altura atual
    alignSelf: 'center', // Alinhando a imagem ao centro horizontalmente
    marginTop: 40, // Adicionando um pequeno espaçamento do título
    borderRadius: 10, // Adicionando borda arredondada
    borderWidth: 2, // Adicionando borda
    borderColor: 'black', // Definindo a cor da borda como preto
    //position: 'absolute',
  },
});

// Componente principal da tela inicial
const HomeScreen = ({ navigation }) => {
  
  const CaminhoQr = () => {
    navigation.navigate("TelaQR");
  };


  return (
    <View style={styles.container}>


      {/* Quadro vermelho no centro */}
      <View style={styles.redBack}>

        <Text style={styles.Tiulo_Informatica}>Informática</Text>

        <Image
          source={require("./../assets/Brasil.png")} // Imagem do logo
          style={styles.Imagem_Foto} // Estilos do logo
        />

        <View style={styles.squareBaixo}>
          <Pressable
            style={[styles.buttonRetornar]} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonTextRetornar}>Retornar</Text>
          </Pressable>

          <Pressable
            style={[styles.buttonSeguir]} 
            onPress={CaminhoQr}
          >
            <Text style={styles.buttonTextSeguir}>Seguir</Text>
          </Pressable>
        </View>

        <Pressable
          style={[styles.buttonQR]} 
          onPress={CaminhoQr}
        >
          <Text style={styles.buttonTextQR}>Gerar QR Code</Text>
        </Pressable>
        
      </View>

      {/* Botão Voltar abaixo do quadro vermelho */}
      <Pressable
        style={[styles.buttonVoltar]} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonTextVoltar}>Voltar</Text>
      </Pressable>

    </View>
  );
};

export default HomeScreen;