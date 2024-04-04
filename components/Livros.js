import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from './Detalhes';

export default function Livros({ data }){
  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>
          {data.title}
        </Text>

        <Image 
          source={{ uri: data.cover }}
          style={styles.capa}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={ () => setVisibleModal(true) }>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes livro={data} voltar={ () => setVisibleModal(false) }/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2,
  },
  title:{
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  capa:{
    height: 550,
    zIndex: 2,
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -55,
    zIndex: 9,
  },
  botao:{
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  botaoTexto:{
    color: '#fff',
    textAlign: 'center',
  }
})