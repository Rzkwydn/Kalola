// src/screens/OrderDetailsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import OrderDetailItem from '../../components/OrderDetailItem';

const sampleOrderDetails = {
  id: 1,
  date: '2024-08-30',
  total: 50.0,
  status: 'Completed',
  items: [
    { id: 1, name: 'Product 1', quantity: 2, price: 10.0 },
    { id: 2, name: 'Product 2', quantity: 1, price: 30.0 },
    // Tambahkan item lain di sini
  ],
};

const OrderDetailsScreen: React.FC<{ route: any }> = () => {


  // Di sini Anda bisa mendapatkan detail pesanan berdasarkan orderId
  const order = sampleOrderDetails; // Misalnya, gunakan data pesanan dari state atau API

  return (
    <View style={styles.container}>
      <Text style={styles.orderId}>Order ID: {order.id}</Text>
      <Text style={styles.orderDate}>Date: {order.date}</Text>
      <Text style={styles.orderStatus}>Status: {order.status}</Text>
      <FlatList
        data={order.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderDetailItem item={item} />
        )}
      />
      <Text style={styles.orderTotal}>Total: ${order.total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  orderStatus: {
    fontSize: 16,
    marginBottom: 20,
  },
  orderTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default OrderDetailsScreen;
