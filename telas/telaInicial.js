import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ImagemBackground from '../components/imagemFundo';
import Botao from '../components/botao';
import BotaoFavorito from '../components/botaoFav';
import Input from '../components/input';

const TelaInicial = ({ navigation }) => (
  <ImagemBackground>
    <Image source={require('../assets/LogoES.png')} style={styles.logo} />
    <Image source={require('../assets/livro.png')} style={styles.livro} />
    
    <Input placeholder="Busque seu livro ou autor" />
    
    <Botao
      onPress={() => navigation.navigate('Busca')}
      texto="Buscar"
    />
    
    <BotaoFavorito onPress={() => navigation.navigate('Favoritos')} />
    
  </ImagemBackground>
);

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 100,
    marginBottom: 50,
  },
  livro: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 50,
  },
});

export default TelaInicial;