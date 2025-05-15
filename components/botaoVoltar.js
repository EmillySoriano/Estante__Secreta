import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoVoltar = ({ onPress }) => (
 <TouchableOpacity onPress={onPress}>
    <Text style={styles.backButton}>↩  Voltar</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backButton: {
    fontSize: 16,
    color: '#FF66C4',
    padding: 10,
    backgroundColor: '#E8DFFE',
    borderRadius: 90,
    borderColor: '#8B61C2',
    borderWidth: 1,
    padding: 7,
  }
});

export default BotaoVoltar;