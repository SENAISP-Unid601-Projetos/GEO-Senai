import React,{useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Mapa from "../src/components/Mapa";
import  {  ReactNativeZoomableView  }  from  '@openspacelabs/react-native-zoomable-view' ;
import ListaMapas from "../src/components/listaMapas";

const TelaMapa = ({navigation}) => {

  const [mapaSelecionado, setMapaSelecionado] = useState('1');

  const CaminhoQr = () => {
    navigation.navigate("Qr");
  };

  return (
    <View style={styles.container}>

      <View style={styles.contentContainer}>
                 
      <View style={styles.footer}>
  
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={50} color="black" />
      </Pressable>

      <ListaMapas setMapaSelecionado={setMapaSelecionado}/>

      <Pressable
          style={[
            styles.botão_Baixar_Caminho,
            { },
          ]}
          onPress={CaminhoQr}
        >
          <Text style={styles.footerText}>Baixar caminho</Text>
      </Pressable>
 
      </View>
      
        <Mapa mapaSelecionado={mapaSelecionado}/>

       
      </View>

      {/* Rodapé */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  header: {
    flexDirection: "row", // Organizar itens horizontalmente
    backgroundColor: "#ff0000",
    height: 75,
    alignItems: "center", // Alinhar itens verticalmente
    justifyContent: "space-between", // Distribuir espaço entre os itens
    paddingHorizontal: 16, // Adicionar preenchimento horizontal
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    width: 70,
    height: 53,
  },
  contentContainer: {
    flexDirection: "column",
    flex: 1,
    flexShrink: 1,
  },

  blueBackground: {
    flex: 1,
    backgroundColor: "E8E8E8",
    borderWidth: 1,
    borderColor: "none",
    alignItems: "center",
  },

  texto: {
    fontSize: 20,
  },

  footer: {
    backgroundColor: "#E8E8E8", // Define a cor de fundo do rodapé como branco.
    height: 65, // Define a altura do rodapé como 65 unidades.
    width: "100%", // Define a largura do rodapé como 100% da largura do contêiner pai.
    flexDirection: "row", // Organiza os itens horizontalmente
    justifyContent: "space-between", // Distribui o espaço entre os itens
    alignItems: "center", // Centraliza os itens verticalmente dentro do rodapé.
    marginTop:10,

  },
  botão_Voltar: {
    backgroundColor: "#ff0000",
    borderRadius: 100,
    width: 100,
    height: 50,
    alignItems: "center", // Centraliza os itens horizontalmente dentro do botão
    justifyContent: "center", // Centraliza os itens verticalmente dentro do botão
  },
  botão_Baixar_Caminho: {
    backgroundColor: "#ff0000",
    borderRadius: 100,
    width: 200, // Ajuste a largura para acomodar o texto "Baixar caminho"
    height: 75,
    alignItems: "center", // Centraliza os itens horizontalmente dentro do botão
    justifyContent: "center", // Centraliza os itens verticalmente dentro do botão
  },

  footerText: {
    fontSize: 25,
    color:"#ffffff"
    //alignSelf: 'center',
  },
});

export default TelaMapa;
