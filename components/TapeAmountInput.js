import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const TapeAmountInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Entrez le montant:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
        placeholder="5000"
      />
      <Text style={{fontSize:20,fontWeight:"bold", textAlign:"center"}}>Frais: 150</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    height:200,
    fontSize: 65,
    textAlign: 'center',
  },
});

export default TapeAmountInput;
