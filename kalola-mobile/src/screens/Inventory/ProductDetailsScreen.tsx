import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const ProductDetailScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Product Detail</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default ProductDetailScreen;