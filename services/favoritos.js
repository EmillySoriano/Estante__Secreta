import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavoriteBook = async (book) => {
  try {
    const favorites = await getFavoriteBooks();
    const isAlreadyFavorite = favorites.some((item) => item.id === book.id);

    if (!isAlreadyFavorite) {
      favorites.push(book);
      await AsyncStorage.setItem('favoriteBooks', JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Erro ao salvar favorito:', error);
  }
};

export const removeFavoriteBook = async (bookId) => {
  try {
    const favorites = await getFavoriteBooks();
    const updatedFavorites = favorites.filter((item) => item.id !== bookId);
    await AsyncStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
  }
};

export const getFavoriteBooks = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favoriteBooks');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Erro ao obter favoritos:', error);
    return [];
  }
};
