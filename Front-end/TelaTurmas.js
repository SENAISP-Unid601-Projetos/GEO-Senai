import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const TelaTurmas = ({ navigation }) => {
    const [turmas, setTurmas] = useState([]);

    useEffect(() => {
        // Aqui você faria uma chamada para a sua API para obter a lista de turmas
        // Exemplo fictício:
        fetch('http://localhost:8080/senaiauto/turmas')
            .then(response => response.json())
            .then(data => setTurmas(data))
            .catch(error => console.error('Erro ao obter turmas:', error));
    }, []);

    const adicionarTurma = () => {
        navigation.navigate('CadastroTurma');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.BemVindo}>Turmas</Text>
            <View style={styles.header}>
                <Text style={styles.headerText}>SENAI</Text>
                <Image
                    source={require("./assets/Brasil.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.Buttons}>
                {turmas.map(turma => (
                    <Pressable
                        key={turma.id}
                        style={styles.ButtonTurmas}
                        onPress={() => console.log('Turma pressionada:', turma)}
                    >
                        <Text style={styles.buttonText}>{turma.codigo_turma}</Text>
                    </Pressable>
                ))}
                <Pressable style={styles.ButtonTurmas} onPress={adicionarTurma}>
                    <Text style={styles.buttonText}>Adicionar Turma</Text>
                </Pressable>
            </View>

            <Pressable style={styles.ReturnButton} onPress={() => console.log('Configurações pressionadas')}>
                <Image source={require("./assets/SetaRetorno2.png")} style={styles.seta} />
            </Pressable>

            <Pressable style={styles.ADMButton} onPress={() => console.log('Configurações pressionadas')}>
                <Text style={styles.settingsbuttonText}>ADM</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#ff0000',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'flex-end',
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    logo: {
        width: 70,
        height: 53,
        alignSelf: 'flex-start',
    },
    BemVindo: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    Buttons: {
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    ButtonTurmas: {
        backgroundColor: '#ff0000',
        padding: 20,
        borderRadius: 30,
        marginBottom: 10,
        alignItems: 'center',
        width: 200,
        height: 65,
    },
    ButtonAdd: {
      backgroundColor: '#0384fc',
      padding: 20,
      borderRadius: 30,
      marginBottom: 10,
      alignItems: 'center',
      width: 200,
      height: 65,
  },
    ReturnButton: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 30,
        alignItems: 'center',
        width: 40,
        height: 40,
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
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
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    settingsbuttonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    seta: {
        width: 30,
        height: 30,
    },
});

export default TelaTurmas;
