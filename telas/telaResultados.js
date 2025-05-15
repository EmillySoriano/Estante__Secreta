import React from 'react';
import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import ImagemBackground from '../components/imagemFundo';
import BotaoSalvar from '../components/botaoSalvar';
import BotaoFavorito from '../components/botaoFav'
import BotaoVoltar from '../components/botaoVoltar';

const TelaResultados = ({ route, navigation }) => {
  const { book } = route.params;

  return (
    <ImagemBackground>

    <BotaoVoltar onPress={() => navigation.goBack()} />

    <View style={styles.header}>
        <Image
          source={require('../assets/LogoES.png')}
          style={styles.logo}
          resizeMode="contain"
        />

      <BotaoFavorito onPress={() => navigation.navigate('Favoritos')} />
      
      </View>
      
    <ScrollView style={styles.container}>
    <View style={{ padding: 20, flexDirection: 'column', gap:10 }}>
    <Text style={styles.title}>{book.volumeInfo.title}</Text>

      <Text style={styles.autor}>
        {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconhecido'}
      </Text>

      <Image
        source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
        style={styles.bookImage}
      />
      
    <Text style={styles.textSinopse}>Sinopse</Text>

      <Text style={styles.sinopse}>
        {book.volumeInfo.description || 'Sinopse não disponível.'}
      </Text>
    </View>  

     <BotaoSalvar book={book}/>

    </ScrollView>
    </ImagemBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
   logo: {
    width: 150,
    height: 40,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 25,
    color: '#FF66C4',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  autor: {
    fontSize: 18,
    textAlign: 'center',
    color: '#8B61C2',
    marginBottom: 10,
  },
  bookImage: {
    width: 100,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  textSinopse: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF66C4',
    marginBottom: 10,
  },
  sinopse: {
    fontSize: 10,
    textAlign: 'justify',
    color: '#8B61C2',
  },
});

export default TelaResultados;
