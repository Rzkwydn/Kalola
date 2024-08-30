// src/components/OrderListItem.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface OrderListItemProps {
  order: {
    id: number;
    date: string;
    total: number;
    status: string;
  };
  onPress: () => void;
}

const OrderListItem: React.FC<OrderListItemProps> = ({ order, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.orderId}>Order ID: {order.id}</Text>
        <Text style={styles.orderDate}>Date: {order.date}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.orderTotal}>${order.total}</Text>
        <Text style={styles.orderStatus}>{order.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#888',
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: 14,
    color: '#888',
  },
});

export default OrderListItem;
