import React, { useState, userEffect, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConnection';

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authUser, setAuthUser] = useState('');

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                navigation.navigate('listaLivro')
                return;
            }
        })
    }, [])

    function handleLogin(){
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            
        })
        .catch(err => {
            if(err.code === 'auth/missing-password'){
                alert('Senha é Obrigatória')
                return;
            }
        })

        setEmail('')
        setPassword('')
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
            <View style={styles.Container}>

                <View style={styles.UserImage} >
                    <Image source={require('../../assets/user-orange.png')}
                    style={styles.Image}  />
                </View>

                <View style={styles.form} >
                    <TextInput 
                        style={styles.inputEmail} 
                        placeholder='Email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <TextInput 
                        style={styles.inputPassword} 
                        placeholder='Senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.buttonForm} onPress={handleLogin} >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('createuser')} >
                        <Text style={styles.ButtonCreate} >Ainda não possui uma conta!</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6B674',
    },
    UserImage: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#008D85',
        width: 170,
        height: 170,
        borderRadius: 100,
        marginBottom: 54,
        marginTop: 60,
    },
    Image: {
        width: 190,
        height: 190,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputEmail: {
        backgroundColor: '#FFF',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,       
    },
    inputPassword: {
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
    ButtonCreate: {
        color: '#ff5800',
        fontWeight: 'bold',
        marginTop: 18,
    }
})