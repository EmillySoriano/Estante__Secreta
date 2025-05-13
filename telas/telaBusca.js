import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ImagemBackground from '../components/imagemFundo';
import BotaoFavorito from '../components/botaoFav';
import Input from '../components/input';
import { Card } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';
import { buscarLivros } from '../services/api';

const TelaBusca = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const query = route.params?.query || '';
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      buscarLivros(query)
        .then((results) => {
          setBooks(results || []);
        })
        .catch((error) => {
          console.error('Erro ao buscar livros:', error);
          Alert.alert('Erro', 'Não foi possível carregar os livros.');
          setBooks([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <ImagemBackground>
      <View style={styles.header}>
        <Image
          source={require('../assets/LogoES.png')}
          style={styles.logo}
          resizeMode="contain"
        />

      <BotaoFavorito onPress={() => navigation.navigate('Favoritos')} />
      
      </View>

      <Input
        placeholder={query}
        style={styles.input}
        editable={false}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        {loading ? (
          <Text style={styles.text}>Carregando...</Text>
        ) : books.length === 0 ? (
          <Text style={styles.text}>Nenhum livro encontrado.</Text>
        ) : (
          <View style={styles.grid}>
            {books.map((book) => (
              <TouchableOpacity
                key={book.id}
                style={styles.card}
                onPress={() => navigation.navigate('Resultados', { book })}
              >
                <Card style={styles.cardInner}>
                  {book.volumeInfo?.imageLinks?.thumbnail ? (
                    <Image
                      source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                      style={styles.cover}
                      resizeMode="contain"
                    />
                  ) : (
                    <Text style={styles.noImage}>Sem capa</Text>
                  )}
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        )} 
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
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    margin: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 130,
    margin: 5,
  },
  cardInner: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    width: 80,
    height: 110,
  },
  noImage: {
    fontSize: 12,
    color: '#666',
  },
  scroll: {
    paddingBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FF66C4',
  },
});

export default TelaBusca;
