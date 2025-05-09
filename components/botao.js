import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    borderWidth: 1,
    marginBottom: 20,
    height: 40,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

export default Input;
