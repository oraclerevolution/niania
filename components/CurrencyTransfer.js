import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrencyTransfer = ({ currencyData, onCurrencySelect, Sltedcurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    const selectedBalance = currencyData.find(item => item.currency === currency)?.balance || 0;
    onCurrencySelect(selectedBalance);
    Sltedcurrency= currency
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={handleCurrencyChange}
      >
        <Picker.Item label="Choisissez une devise" value="" />
        {currencyData.map((item, index) => (
          <Picker.Item
            key={index}
            label={`${item.currency} - Balance: ${item.balance}`}
            value={item.currency}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CurrencyTransfer;
