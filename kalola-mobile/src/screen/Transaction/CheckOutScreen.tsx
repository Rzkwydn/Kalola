import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const CheckOutScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Check Out</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default CheckOutScreen;