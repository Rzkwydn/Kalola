import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { StackTransactionParamList } from '../../navigation/StackNavigator/StackTransaction';
import { StackNavigationProp } from '@react-navigation/stack';

type TransactionNavigationProp = StackNavigationProp<StackTransactionParamList, 'Transaction'>;

type Props = {
  navigation: TransactionNavigationProp;
};

const TransactionScreen: React.FC < Props >= ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Transaction</Text>
      {/* Implement dashboard content here */}
      <Text
          style={globalStyles.linkText}
          onPress={() => navigation.navigate('CartItem')}
        >
          Cart
        </Text>
    </View>
  );
};

export default TransactionScreen;