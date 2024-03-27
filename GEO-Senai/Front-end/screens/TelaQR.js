import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importando FontAwesome

const TelaQR = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.BemVindo}>Escaneie para baixar o mapa</Text>
      <View>
        <Image
          source={require("./../assets/QR.png")}
          style={styles.QR}
        />
      </View>
      
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={50} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E8E8E8",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButtonText: { // Renomeando para evitar conflito
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
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-end',
  },
  logo: {
    width: 70,
    height: 53,
    top:0 ,
    left:0 ,
    position:'absolute',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  BemVindo: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:50,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
    borderRadius: 60, // Corrigindo para número
  },
  // TEXTO DOS BOTÕES
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
  },
  settingsbuttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    // alignContent: 'center',
  },
  QR: {
    width: 550,
    height: 550,
     top:0 ,
     left:0 ,
     alignItems: 'center',
  },
});

export default TelaQR;
