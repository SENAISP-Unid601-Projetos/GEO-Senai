import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Cabecalho from "./src/components/Cabecalho";
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone FontAwesome da biblioteca
import { FaPeopleGroup } from "react-icons/fa6";


const TelaInicial = ({ navigation }) => {
  const botaoTurmas = () => {
    navigation.navigate("TelaTurmas");
  };

   const abrirSite = () => {
       const url = 'https://sp.senai.br/unidade/saocarlos';
       Linking.openURL(url);
     };

  return (
    <View style={styles.container}>
       <Image
        source={require("./assets/Brasil.png")}
        style={styles.logo}
      />
       <Image
        source={require("./assets/logoSenai.png")}
        style={styles.logoSenai}
      />
      
      <Text style={styles.BemVindo}>Seja bem-vindo ao GEO SENAI!</Text>
      <Text style={styles.TextoMedio}>
        É um prazer tê-lo conosco, como posso te ajudar?
      </Text>

     

      <Pressable
        style={styles.classesButton}
        onPress={() => console.log("Mapas pressionadas")}
      >
        <Text style={styles.buttonText}>Mapas</Text>
        <FontAwesome name="map" size={30} color="#ffffff" /> {/* Use o ícone FontAwesome */}
      </Pressable>

      <Pressable style={styles.classesButton} onPress={botaoTurmas}>
        <Text style={styles.buttonText}>Turmas</Text>
        <FontAwesome name="users" size={30} color="#ffffff" /> {/* Use o ícone FontAwesome dentro do Pressable */}
      </Pressable>
      
      <Text style={styles.textoOculto}>
            Todos os direitos reservados para @Templarios.
        </Text>

      {/* <Pressable style={styles.classesButton} onPress={abrirSite}>
        <Text style={styles.buttonText}>Notícias</Text>
      </Pressable> */}

      <Pressable
        style={styles.settingsButton}
        onPress={() => console.log("Configurações pressionadas")}
      >
        <FontAwesome name="lock"  style={styles.settingsbuttonText}/>

      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "##E8E8E8",
  },
  classesButton: {
    flexDirection: 'row', // Para alinhar o texto e o ícone lado a lado
    justifyContent: 'space-between',
    backgroundColor: "red",
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    width: 500,
    height: 65,
  },
  settingsButton: {
    backgroundColor: "#ff0000",
    padding: 13,
    borderRadius: 30,
    alignItems: "center",
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  settingsbuttonText: {
    color: "#fff",
    fontSize: 25,
    
    marginTop:-5,
    alignContent: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#ff0000",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "flex-end",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },

  logoSenaigo: {
   
  },
    logo: {
    width: 70,
    height: 53,
    top: 10,
    left: 10,
    position: "absolute",
  },
  BemVindo: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop:40,
  },
  TextoMedio: {
    color: "black",
    fontSize: 20,
    fontWeight: "normal",
    borderRadius: 40,
    marginBottom: 50,
  },
  textoOculto:{
    color:"#C8C8C8",
    fontSize: 10,
  }
});

export default TelaInicial;
