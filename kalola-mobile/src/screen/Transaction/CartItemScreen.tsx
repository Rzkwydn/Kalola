import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { TransactionStackParamList } from '../../navigation/stacknav/TransactionStackNav';

type CartItemScreenNavProp = StackNavigationProp<TransactionStackParamList, 'CartItem'>;

type Props = {
  navigation: CartItemScreenNavProp;
};

const CartItemScreen: React.FC <Props> = ({navigation}) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Cart Item</Text>
      {/* Implement dashboard content here */}
      <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate("CheckOut")}
        >
          Cart Item
        </Text>
    </View>
  );
};

export default CartItemScreen;