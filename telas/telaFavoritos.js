import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ImagemBackground from '../components/imagemFundo';
import { getFavoriteBooks } from '../services/favoritos';
import BotaoVoltar from '../components/botaoVoltar';

const TelaFavoritos = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const loadFavorites = async () => {
      const favoriteBooks = await getFavoriteBooks();
      setFavorites(favoriteBooks);
    };
    loadFavorites();

    const unsubscribe = navigation.addListener('focus', loadFavorites);
    return unsubscribe;
  }, [navigation]);

  const renderBookCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Resultados', { book: item })}
    >
      <Image
        source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
        style={styles.bookImage}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.volumeInfo.title}
      </Text>
      <Text style={styles.author} numberOfLines={1}>
        {item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor desconhecido'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ImagemBackground>

    <BotaoVoltar onPress={() => navigation.goBack()} />
    
      <View style={styles.header}>
        <Image
          source={require('../assets/LogoES.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Meus Livros Favoritos</Text>
        {favorites.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum livro favoritado ainda.</Text>
        ) : (
          <FlatList
            data={favorites}
            renderItem={renderBookCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        )}
      </View>
    </ImagemBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 150,
    height: 40,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#FF66C4',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  emptyText: {
    fontSize: 18,
    color: '#8B61C2',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: '47%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  bookImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF66C4',
    textAlign: 'center',
  },
  author: {
    fontSize: 14,
    color: '#8B61C2',
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default TelaFavoritos;
