import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const botaoTurmas = () => {
    navigation.navigate('TelaTurmas');
  };

//   const abrirSite = () => {
//     const url = 'https://sp.senai.br/unidade/saocarlos';
//     Linking.openURL(url);
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.BemVindo}>Sejam bem vindos</Text>
      <Text style={styles.TextoMedio}>É um prazer tê-los conosco, como podemos ajudar?</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>SENAI</Text>
        <Image
          source={require("./assets/Brasil.png")}
          style={styles.logo}
        />
      </View>

      <Pressable style={styles.classesButton} onPress={() => console.log('Mapas pressionadas')}>
        <Text style={styles.buttonText}>Mapas</Text>
      </Pressable>
     
      <Pressable style={styles.classesButton} onPress={botaoTurmas}>
        <Text style={styles.buttonText}>Turmas</Text>
      </Pressable>
     
      {/* <Pressable style={styles.classesButton} onPress={abrirSite}>
        <Text style={styles.buttonText}>Notícias</Text>
      </Pressable> */}
     
      <Pressable style={styles.settingsButton} onPress={() => console.log('Configurações pressionadas')}>
        <Text style={styles.settingsbuttonText}>ADM</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  classesButton: {
    backgroundColor: '#ff0000',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: 150,
    height: 70,
  },
  settingsButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 40,
    height: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsbuttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    alignContent: 'center',
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
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 70,
    height: 53,
    top:0 ,
    left:0 ,
    position:'absolute',
  },
  BemVindo: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  TextoMedio: {
    color: 'black',
    fontSize: '15',
    fontWeight: 'normal',
    borderRadius: 40,
  }
});

export default TelaInicial;