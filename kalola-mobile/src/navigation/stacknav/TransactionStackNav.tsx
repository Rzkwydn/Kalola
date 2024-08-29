import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionScreen from '../../screen/Transaction/TransactionScreen';
import CartItemScreen from '../../screen/Transaction/CartItemScreen';
import CheckOutScreen from '../../screen/Transaction/CheckOutScreen';
import CustomHeader from '../../components/CustomHeader';

const TransactionStack = createStackNavigator();

const TransactionStackNav: React.FC = () => {
  return (
    <TransactionStack.Navigator 
    initialRouteName="Transaction"
    screenOptions={({ navigation, route }) => ({
        header: (props) => <CustomHeader {...props} navigation={navigation as any} />,
      })}
    >
      <TransactionStack.Screen name="Transaction" component={TransactionScreen}/>
      <TransactionStack.Screen name="CartItem" component={CartItemScreen}/>
      <TransactionStack.Screen name="CheckOut" component={CheckOutScreen}/>
    </TransactionStack.Navigator>
  );
};

export default TransactionStackNav;
