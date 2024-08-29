import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const ProductListScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Product List</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default ProductListScreen;