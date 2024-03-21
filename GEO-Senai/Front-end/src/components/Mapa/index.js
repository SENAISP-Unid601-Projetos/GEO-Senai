import React, { useState,useEffect  } from 'react';
import { StyleSheet, Pressable, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone FontAwesome da biblioteca
import AuthContext from '../../context/AuthContext';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

const Mapa = ({ mapaSelecionado }) => {

  const [mapa, setMapa] = useState(require("./../../../assets/Captura_de_tela_2024-03-19_144531-removebg-preview.png"));

  

  useEffect(() => {
    if (mapaSelecionado === "2") {
      console.log(mapaSelecionado);
      setMapa(require("./../../../assets/Brasil.png"));
    }
    else if (mapaSelecionado === "1") {
      console.log(mapaSelecionado);
      setMapa(require("./../../../assets/Captura_de_tela_2024-03-19_144531-removebg-preview.png"));
    }
    else if(mapaSelecionado==="3"){
      setMapa(require("./../../../assets/logoSenai.png"));
    }
    else{
      setMapa(require("./../../../assets/Brasil.png"));
    }
  }, [mapaSelecionado]);

  return (
    <View style={styles.container}>

      <View style={{ flexShrink: 1, height: 1150, width: 800 }}>
        <ReactNativeZoomableView
          maxZoom={30}
          contentWidth={400}
          contentHeight={150}
        >
          <Image
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            source={mapa}
          />
        </ReactNativeZoomableView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },

});

export default Mapa;
