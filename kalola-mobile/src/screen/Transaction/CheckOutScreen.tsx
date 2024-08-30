// src/screens/CheckoutScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CheckoutScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleCompleteTransaction = () => {
    navigation.navigate('TransactionComplete');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.summaryText}>Order Summary</Text>
      {/* Tambahkan komponen untuk menampilkan ringkasan pesanan */}
      <TouchableOpacity style={styles.button} onPress={handleCompleteTransaction}>
        <Text style={styles.buttonText}>Complete Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  summaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#008CBA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CheckoutScreen;
