import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { saveFavoriteBook, removeFavoriteBook, getFavoriteBooks } from '../services/favoritos';

const BotaoSalvar = ({ book }) => {
  const imagemNaoSalva = require('../assets/coracaonsalvo.png');
  const imagemSalva = require('../assets/coracaosalvo.png');
  const [getImagem, setImagem] = useState(imagemNaoSalva);

  useEffect(() => {
    const checkFavorite = async () => {
      const favorites = await getFavoriteBooks();
      const isFavorite = favorites.some((item) => item.id === book.id);
      setImagem(isFavorite ? imagemSalva : imagemNaoSalva);
    };
    checkFavorite();
  }, [book]);

  const nsalvo_salvo = async () => {
    const favorites = await getFavoriteBooks();
    const isFavorite = favorites.some((item) => item.id === book.id);

    if (isFavorite) {
      await removeFavoriteBook(book.id);
      setImagem(imagemNaoSalva);
    } else {
      await saveFavoriteBook(book);
      setImagem(imagemSalva);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={nsalvo_salvo}>
        <Image
          source={getImagem}
          style={{ width: 50, height: 50, margin: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BotaoSalvar;
