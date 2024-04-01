
import React, { useState,useEffect  } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

const Mapa = ({ mapaSelecionado }) => {

  const [mapa, setMapa] = useState(require("./../../../assets/mapaSenai.png"));

  useEffect(() => {
    if (mapaSelecionado === "2") {
      console.log(mapaSelecionado);
      setMapa(require("./../../../assets/blocoB.png"));
    }
    else if (mapaSelecionado === "1") {
      console.log(mapaSelecionado);
      setMapa(require("./../../../assets/mapaSenai.png"));
    }
    else if(mapaSelecionado==="3"){
      setMapa(require("./../../../assets/areaDois.png"));
    }
    else{
      setMapa(require("./../../../assets/mapaSenai.png"));
    }
  }, [mapaSelecionado]);

  return (
    <View style={styles.container}>

      <View style={{ flexShrink: 1, height: 1000, width: 1700 }}>
        <ReactNativeZoomableView
          maxZoom={15}
          contentWidth={800}
          contentHeight={400}
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
        padding: 10,
      },
      box: {
        width: 60,
        height: 60,
        marginVertical: 20,
      },

});

export default Mapa;
