// src/screens/OrderListScreen.tsx

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderStackParamList } from '../../navigation/stacknav/OrderStackNav';

const sampleOrders = [
  { id: 1, date: '2024-08-30', total: 50.0, status: 'Completed' },
  { id: 2, date: '2024-08-29', total: 20.0, status: 'Pending' },
  // Tambahkan pesanan lain di sini
];


type OrderListScreenNavProp = StackNavigationProp<OrderStackParamList, 'OrderList'>;

type Props = {
  navigation: OrderListScreenNavProp;
};

const OrderListScreen: React.FC<Props> = ({ navigation }) => {
  const handlePress = (orderId: number) => {
    navigation.navigate('OrderDetails');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sampleOrders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderListItem
            order={item}
            onPress={() => navigation.navigate('OrderDetails')}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default OrderListScreen;
