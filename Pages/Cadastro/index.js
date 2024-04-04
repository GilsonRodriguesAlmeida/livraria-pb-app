import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateUser({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    async function handleCreateUser(){
       const user = await createUserWithEmailAndPassword(auth, email, password)
       
       setEmail('')
       setPassword('')
    }
 
    return(
        <View style={styles.Container}>

            <View style={styles.form} >

                <TextInput 
                    style={styles.inputUserName} 
                    placeholder='Nome'
                    value={name}
                    onChangeText={(text) => setName(text)}
                 />

                <TextInput 
                    style={styles.inputForm} 
                    placeholder='Email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                 />

                <TextInput 
                    style={styles.inputForm} 
                    placeholder='Senha'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                 />

                <TextInput 
                    style={styles.inputForm} 
                    placeholder='Confirmar senha'
                    value={passwordConfirm}
                    onChangeText={(text) => setPasswordConfirm(text)}
                    secureTextEntry={true}
                 />

                <TouchableOpacity style={styles.buttonForm} onPress={handleCreateUser} >
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6B674',
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputUserName: {
        backgroundColor: '#FFF',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,        
    },
    inputForm: {
        backgroundColor: '#FFF',
        marginTop: 13,
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,
    },
    buttonForm: {
        backgroundColor: '#ff5800',
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
    },
})