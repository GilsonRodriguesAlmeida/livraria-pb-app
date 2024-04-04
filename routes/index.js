import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Login/index';
import CreateUser from '../Pages/Cadastro/index';
import ListaLivros from '../Screen/listaLivros';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen name='createuser' component={CreateUser}
                options={{
                    
                    title: '',
                    headerTintColor: '#FFF',
                    headerTransparent: true
                }} 
            />
            <Stack.Screen name='listaLivro' component={ListaLivros}
                options={{
                    title: '',
                    headerTintColor: '#FFF',
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    );
}