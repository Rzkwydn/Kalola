import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  } from '@react-navigation/drawer';
import TransactionScreen from '../../screens/Transaction/TransactionScreen';
import CartItemScreen from '../../screens/Transaction/CartItemScreen';
import CheckOutScreen from '../../screens/Transaction/CheckOutScreen';

export type StackTransactionParamList = {
  Transaction: undefined;
  CartItem: undefined;
  CheckOut: undefined;
};

const Stack = createStackNavigator<StackTransactionParamList>();

const StackTransaction: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Transaction">
      <Stack.Screen name="Transaction" 
      component={TransactionScreen} options={{ headerShown : true }} />
      <Stack.Screen name='CartItem' component={CartItemScreen} />
      <Stack.Screen name="CheckOut" component={CheckOutScreen} />
    </Stack.Navigator>
  );
};

export default StackTransaction;
