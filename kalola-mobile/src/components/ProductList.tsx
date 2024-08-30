// src/components/ProductList.tsx

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type ProductListProps = {
  products: Product[];
  onAddToCart: (productId: number) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <ScrollView contentContainerStyle={styles.list}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
});

export default ProductList;
