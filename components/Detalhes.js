import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Detalhes(props) {
  return(
    <View style={styles.container}>
      <View style={styles.detalhesContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={ props.voltar }>
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.livro.title}</Text>
        <Text style={styles.sinopse}>{props.livro.synopsis}</Text>
        <Text style={styles.descricao}>Genero: {props.livro.genre}</Text>
        <Text style={styles.descricao}>Autor: {props.livro.author}</Text>
        <Text style={styles.descricao}>{props.livro.pages} páginas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  detalhesContainer:{
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar:{
    alignItems: 'center',
    backgroundColor: '#09a6ff',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titulo:{
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  sinopse:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  descricao:{
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
})