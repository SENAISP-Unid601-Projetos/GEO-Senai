import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    // width: 70,
    // height: 53,
    // top:0 ,
    // left:0 ,
  },
  TextoMedio: {
    color: 'black',
    fontSize: '15',
    fontWeight: 'normal',
    borderRadius: 40,
  },

  //Não estou conseguindo conectar no momento, talvez na sprint seguinte???
  // TxtMapas: {
  //   color: 'white',
  //   width: 70,
  //   height: 53,
  //   top:0 ,
  //   left:0 ,
  //   position: 'absolute',
  //   alignSelf: 'center',
  //   alignContent: 'center' ,
  //   alignItems: 'center',
  //   textAlign: 'center',
  // },

  //BOTÕES
  Buttons: {
  borderRadius: 10,
  alignItems: 'center',
  },
  ButtonTurmas: {
    backgroundColor: '#ff0000',
    padding: 20,
    borderRadius: 30, //ARREDONDA O BOTÃO
    marginBottom: 10,
    alignItems: 'center',
    width: 200,
    height: 65,
  },
  ReturnButton: {
    backgroundColor: '#ff0000',
    padding: 5,
    borderRadius: '60%',
    alignItems: 'center',
    //textAlign: 'center',//aparenta não ter utildade momentanea
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  ADMButton: {
    backgroundColor: '#ff0000',
    padding: 13,
    borderRadius: '60%',
    alignItems: 'center',
    textAlign: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
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
  seta: {
    width: 30,
    height: 30,
     top:0 ,
     left:0 ,
     //position:'absolute',
     //alignContent: 'center',
     //alignItems: 'center',
     //alignSelf: 'center',
     //textAlign: 'center',
  },
  QR: {
    width: 350,
    height: 350,
     top:0 ,
     left:0 ,
     alignItems: 'center',
  },

});


const HomeScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>

      {/* define o tema da tela */}
      <Text style={styles.BemVindo}>Scann Qr Code</Text>
      <Text style={styles.TextoMedio}>escaneie para baixar o Map</Text>

      {/* define o "header" da tela com bandeira e o logo senai */}
      <View style={styles.header}>
      {/* <Text Style={styles.TxtMapas}>Mapa</Text> */}
      <Text style={styles.headerText}>SENAI</Text>
      <Image
        source={require("./../assets/Brasil.png")}
        style={styles.logo}
      />
      </View>
        <View>
          <Image
          source={require("./../assets/QR.png")}
          style={styles.QR}
          />
        </View>
      {/* Botões de foother */}
      <Pressable style={[styles.ReturnButton, {borderWidth: 1, borderColor: 'black'}]} onPress={() => navigation.goBack()}>
        {/* <Text  style={styles.settingsbuttonText}>Voltar</Text> */}
        <Image source={require("./../assets/SetaRetorno2.png")}
         style={styles.seta}
        />
      </Pressable>
      <Pressable style={[styles.ADMButton, {borderWidth: 1, borderColor: 'black'}]} onPress={() => console.log('Configurações pressionadas')}>
        <Text  style={styles.settingsbuttonText}>ADM</Text>
      </Pressable>

    </View>
  );
};




export default HomeScreen;