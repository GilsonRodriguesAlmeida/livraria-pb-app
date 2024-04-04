import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import api from '../services/api'

import Livros from '../components/Livros'

export default function ListaLivros(){
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function loadLivros(){
      const response = await api.get('/books.json')
      const data = response.data;
      const livroArray = Object.keys(data).map(key => ({ ...data[key], id: key }));
      setLivros(livroArray);
    }
    loadLivros();

  }, []);

  return (
    <View>
      <FlatList
        data={livros}
        keyExtractor={item => String(item.id)}
        renderItem={ ({ item }) => <Livros data={item} />}
      />
    </View>
  );
}
