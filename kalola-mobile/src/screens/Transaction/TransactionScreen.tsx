import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const TransactionScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Transaction</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default TransactionScreen;