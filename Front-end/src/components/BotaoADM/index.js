import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone FontAwesome da biblioteca


const BotaoADM = ({ onPress, adm }) => {
  return (
    <Pressable style={styles.ADMButton} onPress={onPress}>
              <FontAwesome name="lock"  style={styles.settingsbuttonText}/>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  ADMButton: {
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
  settingsbuttonText: {
    color: "#fff",
    fontSize: 25,
    marginTop:-5,
    alignContent: "center",
  },
});

export default BotaoADM;
