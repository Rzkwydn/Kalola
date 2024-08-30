// src/screens/TransactionScreen.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';
import CheckoutButton from '../../components/CheckoutBotton';
import { StackNavigationProp } from '@react-navigation/stack';
import { TransactionStackParamList } from '../../navigation/stacknav/TransactionStackNav';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10.0, imageUrl: '../../../assets/adaptive-icon.png' },
  { id: 2, name: 'Product 2', price: 20.0, imageUrl: '../../../assets/adaptive-icon.png' },
  // Tambahkan produk lain di sini
];

type TransactionScreenNavProp = StackNavigationProp<TransactionStackParamList, 'Transaction'>;

type Props = {
  navigation: TransactionScreenNavProp;
};

const TransactionScreen: React.FC<Props> = ({ navigation }) => {
  const handleAddToCart = (productId: number) => {
    // Logika untuk menambahkan ke keranjang
  };

  return (
    <View style={styles.container}>
      <ProductList products={sampleProducts} onAddToCart={handleAddToCart} />
      <CheckoutButton onPress={() => navigation.navigate('CartItem')} />
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

export default TransactionScreen;
