import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ImagemBackground from '../components/imagemFundo';

const TelaFavoritos = () => (
  <ImagemBackground>
    <Text style={styles.texto}>Tela de Favoritos!</Text>
  </ImagemBackground>
);

const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default TelaFavoritos;