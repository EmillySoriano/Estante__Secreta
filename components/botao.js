import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ onPress, estilo, texto }) => (
  <TouchableOpacity style={[styles.botao, estilo]} onPress={onPress}>
    <Text style={styles.textoBotao}>{texto}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#8B61C2',
    borderRadius: 90,
    padding: 5,
    marginBottom: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
});

export default Botao;