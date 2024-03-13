import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
   
  const CaminhoQr = () => {
    navigation.navigate("Qr");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>SENAI</Text>
        <Image source={require("./../assets/Brasil.png")} style={styles.logo} />
      </View>

      {/* Título */}
      <Text style={styles.txt_horarios}>Horários</Text>

      {/* Fundo Cinza */}
      <View style={styles.Fundo_Cinza}>
        {/* Quadros Cinzas Pequenos */}
        <View style={styles.quadroCinzaPequenoTitulo}>
          <Text style={styles.quadroTexto}>3-TDS/3-MDS</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Curso</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Turma</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Alunos</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Período</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Horários</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>3-TDS</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>34/40</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Seg a Sex - 13:30 - 17:30</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>3-MDS</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
      </View>

      {/* Botão "Baixar QR" */}
      <Pressable
        style={[styles.BaixarQRButton, { borderWidth: 1, borderColor: 'black' }]} onPress={CaminhoQr}
      >
        <Text style={styles.buttonText}>Baixar QR</Text>
      </Pressable>

      {/* Botão ADM */}
      <Pressable style={[styles.ADMButton, { borderWidth: 1, borderColor: 'black' }]}>
        <Text style={styles.buttonTextADM}>ADM</Text>
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
    top: 0,
    left: 0,
    position: 'absolute',
  },
  Fundo_Cinza: {
    backgroundColor: 'gray',
    width: '80%',
    height: 300,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quadroCinzaPequenoTitulo: {
    backgroundColor: '#d3d3d3',
    width: '100%',
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadroCinzaPequeno: {
    backgroundColor: '#d3d3d3',
    width: '19%',
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadroTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  ADMButton: {
    backgroundColor: '#ff0000',
    padding: 13,
    borderRadius: '60%',
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  BaixarQRButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
  },
  buttonTextADM: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
  },
  txt_horarios: {
    fontSize: 25,
  },
});

export default HomeScreen;