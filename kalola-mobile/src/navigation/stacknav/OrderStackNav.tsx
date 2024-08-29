import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderListScreen from '../../screen/Order/OrderListScreen';
import OrderDetailsScreen from '../../screen/Order/OrderDetailsScreen';

const OrderStack = createStackNavigator();

const OrderStackNav: React.FC = () => {
  return (
    <OrderStack.Navigator initialRouteName="OrderList">
      <OrderStack.Screen name="OrderList" component={OrderListScreen}/>
      <OrderStack.Screen name="OrderDetails" component={OrderDetailsScreen}/>
    </OrderStack.Navigator>
  );
};

export default OrderStackNav;
