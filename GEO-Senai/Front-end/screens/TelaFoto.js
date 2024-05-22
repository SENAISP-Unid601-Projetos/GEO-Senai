import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaFoto = ({ route, navigation }) => {
  const { sala } = route.params;

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        // URL da sua API
        const apiUrl = `http://10.110.12.19:8080/salas/images/${sala.nomeSala}.png`;

        // Fazendo a solicitação GET usando fetch
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Erro ao recuperar a imagem');
        }

        // Convertendo os dados da imagem para uma string base64
        const imageBlob = await response.blob();
        const imageBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(imageBlob);
        });

        setImageData(imageBase64);
      } catch (error) {
        console.error('Erro ao recuperar a imagem:', error);
      }
    };

    getImage();
  }, []);

  const CaminhoQr = () => {
    navigation.navigate("TelaQR");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={50} color="black" />
      </Pressable>

      {/* Quadro vermelho no centro */}
      <View style={styles.redBack}>
        <Text style={styles.tituloCurso}>Sala: {sala.nomeSala}</Text>

          <Image source={{ uri: imageData }} style={styles.imgFoto} />

        {/* <View style={styles.squareBaixo}>
          <Pressable style={styles.btnControleImg}>
            <FontAwesome name="chevron-left" size={25} color="white" />
          </Pressable>

          <Pressable style={styles.btnControleImg}>
            <FontAwesome name="chevron-right" size={25} color="white" />
          </Pressable>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    height: "100%",
  },
  redBack: {
    alignSelf: "center",
    width: "80%",
    height: "70%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: "1%",
  },
  squareBaixo: {
    width: "100%",
    height: 10,
    aspectRatio: 10 / 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 40,
    marginTop: 30,
  },
  btnControleImg: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 25,
    backgroundColor: "red",
    alignItems: "center",
    width: "20%",
    height: 40,
  },
  buttonQR: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '10%',
    height: "5%",
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTextQR: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },
  tituloCurso: {
    color: "red",
    textAlign: "center",
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '20%',
    borderRadius: 10,
  },
  imgFoto: {
    borderWidth: 2,
    width: "80%",
    height: "100%",
    alignSelf: "center",
    padding: 20,
    borderColor: 'black',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    marginLeft: 20,
    marginTop: 40,
  },
});

export default TelaFoto;
