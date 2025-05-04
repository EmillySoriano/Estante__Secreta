import axios from 'axios';

const API_KEY = 'AIzaSyAlNJlrgozlHTW0N6KRSiIvp35AuE4gvKw';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const buscarLivros = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&key=${API_KEY}`);
    return response.data.items;
  }
  catch (error) {
    console.error('Erro ao buscar livros: ', error);
    throw error;
  }
}
