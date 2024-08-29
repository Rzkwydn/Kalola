import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const ProductDetailsScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Product Details</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default ProductDetailsScreen;