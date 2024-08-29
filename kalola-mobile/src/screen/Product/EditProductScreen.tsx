import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const EditProductScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Edit Product</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default EditProductScreen;