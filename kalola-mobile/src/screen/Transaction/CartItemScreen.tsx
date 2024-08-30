// src/screens/CartScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartItem from '../../components/CartItem';
import CheckoutButton from '../../components/CheckoutBotton';
import { StackNavigationProp } from '@react-navigation/stack';
import { TransactionStackParamList } from '../../navigation/stacknav/TransactionStackNav';

const sampleCartItems = [
  { id: 1, name: 'Product 1', price: 10.0, quantity: 2 },
  { id: 2, name: 'Product 2', price: 20.0, quantity: 1 },
  // Tambahkan item lain di sini
];

type TransactionScreenNavProp = StackNavigationProp<TransactionStackParamList, 'CartItem'>;

type Props = {
  navigation: TransactionScreenNavProp;
};

const CartItemScreen: React.FC<Props> = ({ navigation }) => {
  const handleRemoveFromCart = (itemId: number) => {
    // Logika untuk menghapus item dari keranjang
  };

  return (
    <View style={styles.container}>
      {sampleCartItems.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={() => handleRemoveFromCart(item.id)}
        />
      ))}
      <CheckoutButton onPress={() => navigation.navigate('CheckOut')} />
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

export default CartItemScreen;
