import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const TransactionScreen: React.FC = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Transaction</Text>
      {/* Implement dashboard content here */}
      <Text
          style={GlobalStyles.linkText}
          onPress={() => Na}
        >
          Cart
        </Text>
    </View>
  );
};

export default TransactionScreen;