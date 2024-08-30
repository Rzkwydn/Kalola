import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const AddProductScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Add Product</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default AddProductScreen;
