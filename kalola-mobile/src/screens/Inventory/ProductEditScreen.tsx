import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const ProductEditScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Product Edit</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default ProductEditScreen;