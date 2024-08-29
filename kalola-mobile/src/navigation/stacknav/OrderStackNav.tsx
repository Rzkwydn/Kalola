import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderListScreen from '../../screen/Order/OrderListScreen';
import OrderDetailsScreen from '../../screen/Order/OrderDetailsScreen';
import CustomHeader from '../../components/CustomHeader';

export type OrderStackParamList = {
  OrderList: undefined;
  OrderDetails: undefined;
};

const OrderStack = createStackNavigator<OrderStackParamList>();

const OrderStackNav: React.FC = () => {
  return (
    <OrderStack.Navigator 
    initialRouteName="OrderList"
    screenOptions={({ navigation, route }) => ({
        header: (props) => <CustomHeader {...props} navigation={navigation as any} />,
      })}
    >
      <OrderStack.Screen name="OrderList" component={OrderListScreen}/>
      <OrderStack.Screen name="OrderDetails" component={OrderDetailsScreen}/>
    </OrderStack.Navigator>
  );
};

export default OrderStackNav;
