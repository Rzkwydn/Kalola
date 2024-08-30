// src/components/OrderDetailItem.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OrderDetailItemProps {
  item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
}

const OrderDetailItem: React.FC<OrderDetailItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
});

export default OrderDetailItem;
