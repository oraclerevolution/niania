import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ClavierNumerique = ({ onPress }) => {
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'Effacer'];

  return (
    <View style={styles.container}>
      {numeros.map((numero) => (
        <TouchableOpacity
          key={numero}
          style={styles.numeroContainer}
          onPress={() => onPress(numero)}
        >
          <Text style={styles.numeroText}>{numero}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height:355,
    justifyContent: 'center',
    borderWidth:1,
    borderColor:"red"
  },
  numeroContainer: {
    width: '33.33%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  numeroText: {
    fontSize: 24,
  },
});

export default ClavierNumerique;