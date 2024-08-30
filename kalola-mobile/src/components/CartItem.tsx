// src/components/CartItem.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type CartItemProps = {
  name: string;
  price: number;
  quantity: number;
  onRemove: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, onRemove }) => {
  return (
    <View style={styles.item}>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)} x {quantity}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
});

export default CartItem;
