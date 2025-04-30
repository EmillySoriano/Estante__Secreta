import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoFavorito = ({ onPress }) => (
  <TouchableOpacity style={styles.botaoFavorito} onPress={onPress}>
    <Text style={styles.textoFavorito}>💜</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  botaoFavorito: {
    backgroundColor: '#E8DFFE',
    borderRadius: 90,
    borderColor: '#FF66C4',
    borderWidth: 3,
    padding: 7,
  },
  textoFavorito: {
    fontSize: 15,
  }
});

export default BotaoFavorito;