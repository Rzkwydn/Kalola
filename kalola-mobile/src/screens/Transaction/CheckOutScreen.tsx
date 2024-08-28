import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const CheckOutScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Check Out</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default CheckOutScreen;