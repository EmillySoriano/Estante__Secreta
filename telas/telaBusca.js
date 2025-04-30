import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import ImagemBackground from '../components/imagemFundo';
import BotaoFavorito from '../components/botaoFav';
import Input from '../components/input';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const TelaBuscas = () => {
   const navigation = useNavigation();
      return (
        <ImagemBackground>
          <View style={styles.loguinho}>
            <Image
            source={require('../assets/LogoES.png')}
            style={styles.logo}
            resizeMode="contain"
          />

            <BotaoFavorito onPress={() => navigation.navigate('Favoritos')} />
      
          </View>

      <Input
        placeholder="Pesquisar..."
        placeholderTextColor="#999"
        style={styles.procurarInput}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          <Card style={styles.card}>
            <Text>livro 1</Text>
          </Card>

          <Card style={styles.card}>
            <Text>livro 2</Text>
          </Card>

          <Card style={styles.card}>
            <Text>livro 3</Text>
          </Card>

          <Card style={styles.card}>
            <Text>livro 4</Text>
          </Card>

          <Card style={styles.card}>
            <Text>livro 5</Text>
          </Card>

          <Card style={styles.card}>
            <Text>livro 6</Text>
          </Card>

          <Card style={styles.card}>
            <Text>livro 7</Text>
          </Card>

          <Card style={styles.card}>
            <Text>livro 8</Text>
          </Card>
        </View>
      </ScrollView>
    </ImagemBackground>
  );
};

const styles = StyleSheet.create({
  loguinho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%'
  },
  logo: {
    width: 150,
    height: 40,
  },
  procurarInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 16,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    width: 100,
    height: 130,
    margin: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20,
  }
});

export default TelaBuscas;
