import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const CartItemScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Cart Item</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default CartItemScreen;