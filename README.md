# 📚 *Estante Secreta* - *API do Google Books*

Este projeto é uma aplicação mobile desenvolvida com **React Native** que permite pesquisar livros utilizando a **API do Google Books**, visualizar seus detalhes e manter uma lista de livros favoritos.

## ⚙️ Funcionalidades

- **Pesquisa de livros**: Digite o nome de um livro ou autor e visualize os resultados com título, capa e autor.
- **Tela de detalhes**: Clique em um livro para ver mais informações como sinopse, autores e imagem da capa.
- **Favoritar livros**: Marque seus livros preferidos para acessá-los facilmente depois.
- **Lista de favoritos**: Acesse todos os livros favoritados a partir de qualquer tela usando o botão de favoritos.

## 🖼️ Navegação entre Telas

1. **Tela Inicial**  
   Campo de busca, botão de pesquisa e botão de acesso aos favoritos.

2. **Tela de Resultados**  
   Mostra os livros retornados pela API de acordo com a pesquisa.

3. **Tela de Detalhes do Livro**  
   Exibe título, autor, sinopse, imagem da capa e opção de favoritar.

4. **Tela de Favoritos**  
   Lista de livros que o usuário marcou como favoritos, acessível de qualquer lugar.

## 🔧 Tecnologias

- React
- React Native
- Axios
- Google Books API

## 🧪 Protótipo

Você pode visualizar o protótipo da aplicação no [Canva](https://www.canva.com/design/DAGk5fie7tM/9Vi0e6Pwx59lGyRsJWDt7g/view?utm_content=DAGk5fie7tM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha32ba82ba3).

## 🔑 Configuração da Chave da API

Este projeto requer uma chave da API armazenada em um arquivo `config.js`, que **não está incluído no repositório** por motivos de segurança.

Para configurar:
1. Crie um arquivo `config.js` na raiz do projeto.
2. Adicione o seguinte conteúdo, substituindo `sua_chave_aqui` pela chave da API real:
   ```javascript
   export const API_KEY = 'sua_chave_aqui';

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/EmillySoriano/Estante__Secreta.git

# Acesse a pasta do projeto
cd nome-do-projeto

# Instale as dependências
npm install

# Execute no Android
npx react-native run-android

# ou execute no iOS (MacOS apenas)
npx react-native run-ios
