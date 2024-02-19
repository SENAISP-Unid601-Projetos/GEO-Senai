import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const TelaTurmas = ({ navigation }) => {
    const [turmas, setTurmas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/senaiauto/turmas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao recuperar turmas');
                }
                return response.json();
            })
            .then(data => setTurmas(data))
            .catch(error => console.error('Erro ao recuperar turmas:', error));
    }, []);

    const adicionarTurma = () => {
        navigation.navigate('CadastroTurma');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Turmas</Text>
            {turmas.map(turma => (
                <Pressable
                    key={turma.id}
                    style={styles.ButtonTurmas}
                    onPress={() => console.log('Turma pressionada:', turma)}
                >
                    <Text style={styles.buttonText}>{turma.nomeTurma}</Text>
                </Pressable>
            ))}
            <Pressable style={styles.ButtonTurmas} onPress={adicionarTurma}>
                <Text style={styles.buttonText}>Adicionar Turma</Text>
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
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    ButtonTurmas: {
        backgroundColor: '#ff0000',
        padding: 20,
        borderRadius: 30,
        marginBottom: 10,
        alignItems: 'center',
        width: 200,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TelaTurmas;
