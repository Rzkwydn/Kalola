// src/components/CheckoutButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CheckoutButtonProps = {
  onPress: () => void;
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Proceed to Checkout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008CBA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CheckoutButton;
