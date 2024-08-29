import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const CartItemScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Cart Item</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default CartItemScreen;