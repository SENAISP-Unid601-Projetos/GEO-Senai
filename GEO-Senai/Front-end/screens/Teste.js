import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageComponent = () => {
  const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const getImage = async () => {
            try {
                // URL da sua API
                const apiUrl = `http://10.110.12.19:8080/salas/images/0.png`; //  lucas jedi = lucas return (lucas dos name);

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

  return (
    <View style={styles.container}>
      {imageData && <Image source={{ uri: imageData }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default ImageComponent;
