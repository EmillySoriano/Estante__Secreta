import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

const ImagemBackground = ({ children }) => (
  <ImageBackground
    source={require('../assets/fundo.jpg')}
    style={{ flex: 1 }}
  >
    <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  safeAreaView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
});

export default ImagemBackground;