import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { OrderStackParamList } from '../../navigation/stacknav/OrderStackNav';

type OrderListScreenNavProp = StackNavigationProp<OrderStackParamList, 'OrderList'>;

type Props = {
  navigation: OrderListScreenNavProp;
};

const OrderListScreen: React.FC <Props> = ({navigation}) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Order List</Text>
      {/* Implement dashboard content here */}
      <StatusBar style="auto" />
      <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate("OrderDetails") }
        >
          Order Details
        </Text>
    </View>
  );
};

export default OrderListScreen;