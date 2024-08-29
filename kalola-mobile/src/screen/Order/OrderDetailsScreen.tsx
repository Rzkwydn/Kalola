import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const OrderDetailsScreen: React.FC  = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Order Details</Text>
      {/* Implement dashboard content here */}
      <StatusBar style="auto" />
      <Text
          style={GlobalStyles.linkText}
          onPress={() => /* wola */ }
        >
          Cart
        </Text>
    </View>
  );
};

export default OrderDetailsScreen;