import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const TelaMapa = ({navigation}) => {
  
  const CaminhoQr = () => {
    navigation.navigate("TelaQR");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Bandeira */}
        <Image source={require("./../assets/Brasil.png")} style={styles.logo} />

        {/* Texto do cabeçalho */}
        <Text style={styles.headerText}>Senai</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.contentContainer}>
        {/* Quadro vermelho */}
        <View style={styles.redBackground}>
          <Image source={require("./../assets/Brasil.png")} style={styles.logo} />
        </View>

        {/* Quadro azul */}
        <View style={styles.blueBackground}>
          <Text>Salas</Text>
          <Pressable
            style={[
              styles.botãoSala1,
              { borderWidth: 1, borderColor: "black" },
            ]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Turmas</Text>
          </Pressable>

          <Pressable
            style={[
              styles.botãoSala1,
              { borderWidth: 1, borderColor: "black" },
            ]}
            onPress={() => console.log("Novo botão 1 pressionado")}
          >
            <Text style={styles.texto}>Botão 1</Text>
          </Pressable>

          {/* Novo botão 2 */}
          <Pressable
            style={[
              styles.botãoSala1,
              { borderWidth: 1, borderColor: "black" },
            ]}
            onPress={() => console.log("Novo botão 2 pressionado")}
          >
            <Text style={styles.texto}>Botão 2</Text>
          </Pressable>

          {/* Você pode continuar adicionando mais Pressable com texto dentro de <Text> aqui */}
        </View>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>

        <Pressable
          style={[
            styles.botão_Voltar,
            { borderWidth: 1, borderColor: "black" },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerText}>voltar</Text>
        </Pressable>

        <Pressable
          style={[styles.botão_Baixar_Caminho,{ borderWidth: 1, borderColor: "black" },]} onPress={CaminhoQr}
        > 
          <Text style={styles.footerText}>Baixar caminho</Text> 
        </Pressable>

        <Pressable
          style={[styles.botãoADM, { borderWidth: 1, borderColor: "black" }]}
          onPress={() => console.log("Turmas pressionados")}
        >
          <Text style={styles.footerText}>ADM</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row", 
    backgroundColor: "#ff0000",
    height: 75,
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingHorizontal: 16, 
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
    flexDirection: "row",
    flex: 1,
  },
  redBackground: {
    flex: 1,
    backgroundColor: "red",
    borderWidth: 30,
    borderColor: "white",
    alignItems: "center",
  },
  blueBackground: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
  },
  botãoSala1: {
    backgroundColor: "#ff0000",
    padding: 20,
    borderRadius: 1000,
    marginBottom: 20,
    alignItems: "center",
    width: 150,
    height: 10,
    borderTopWidth: 20,
    flexDirection: "row",
  },
  texto: {
    fontSize: 20,
  },

  footer: {
    backgroundColor: "white", 
    height: 65, 
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
  },
  botão_Voltar: {
    backgroundColor: "#ff0000",
    borderRadius: 100,
    width: 100,
    height: 50,
    alignItems: "center", 
    justifyContent: "center", 
  },
  botão_Baixar_Caminho: {
    backgroundColor: "#ff0000",
    borderRadius: 100,
    width: 150, 
    height: 50,
    alignItems: "center", 
    justifyContent: "center", 
  },
  botãoADM: {
    backgroundColor: "#ff0000",
    borderRadius: 100,
    width: 100,
    height: 50,
    alignItems: "center", 
    justifyContent: "center", 
  },
  footerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default TelaMapa;
