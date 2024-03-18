import React, { useContext } from 'react';
import { StyleSheet, Pressable, View,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone FontAwesome da biblioteca
import AuthContext from '../../context/AuthContext';
import  {  ReactNativeZoomableView  }  from  '@openspacelabs/react-native-zoomable-view' ;

const Mapa = ({ props }) => {


  return (
        <View style={styles.container}>

        <View style={{ flexShrink: 1, height: '100%', width: '100%' }}>
        <ReactNativeZoomableView
            maxZoom={30}
            contentWidth={400}
            contentHeight={150}
        >
            <Image
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            source={require("./../../../assets/mapaSenai.png")}
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
