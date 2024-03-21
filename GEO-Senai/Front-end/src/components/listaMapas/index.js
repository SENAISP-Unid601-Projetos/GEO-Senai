import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default  ListaMapas=({setMapaSelecionado}) =>{
  const [selectedValue, setSelectedValue] = useState('Mapa primeiro andar');

  const handleChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
    
    // Dependendo da opção selecionada, defina um valor diferente para setMapaSelecionado
    switch (itemValue) {

      case 'Mapa primeiro andar':
        setMapaSelecionado('1');
        
        break;
      case 'Mapa segundo andar':
        setMapaSelecionado('2');

        break;
      case 'Mapa terceiro andar':
        setMapaSelecionado('3');

        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.estiloBtn}
        onValueChange={handleChange}
      >
        <Picker.Item label="Bloco B ( superior )" value="Mapa primeiro andar" />
        <Picker.Item label="Bloco B ( inferior )" value="Mapa segundo andar" />
        <Picker.Item label="Bloco A" value="Mapa terceiro andar" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  estiloBtn: {
    fontSize:25,
    borderRadius:100,
    height: 75,
    width: 200,
    backgroundColor: '#ED2A2A',
    color: '#ffffff',
    borderColor:"#ED2A2A"
  },
});
