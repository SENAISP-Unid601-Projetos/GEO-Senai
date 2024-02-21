import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const BotaoADM = ({ onPress, adm }) => {
  return (
    <Pressable style={styles.ADMButton} onPress={onPress}>
      <Text style={styles.settingsbuttonText}>{adm ? 'Sair' : 'ADM'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ADMButton: {
    backgroundColor: '#ff0000',
    padding: 13,
    borderRadius: 30,
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  settingsbuttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default BotaoADM;
