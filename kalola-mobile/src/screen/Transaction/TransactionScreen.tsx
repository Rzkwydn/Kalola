import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../../navigation/stacknav/ProductStackNav';
import { TransactionStackParamList } from '../../navigation/stacknav/TransactionStackNav';

type TransactionScreenNavProp = StackNavigationProp<TransactionStackParamList, 'Transaction'>;

type Props = {
  navigation: TransactionScreenNavProp;
};

const TransactionScreen: React.FC <Props> = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Transaction</Text>
      {/* Implement dashboard content here */}
      <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate("CartItem")}
        >
          Cart Item
        </Text>
    </View>
  );
};

export default TransactionScreen;