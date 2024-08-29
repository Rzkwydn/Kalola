import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import SalesManagementScreen from '../screens/Sales/SalesManagementScreen';
import InventoryScreen from '../screens/Inventory/InventoryScreen';
import SalesScreen from '../screens/Sales/SalesScreen';
import TransactionScreen from '../screens/Transaction/TransactionScreen';
import SettingScreen from '../screens/Setting/SettingScreen';
import StackTransaction from './StackNavigator/StackTransaction';
import DrawerNavigator from './DrawerNavigator';
import StackSales from './StackNavigator/StackSales';

export type MainStackParamList = {
  DrawerNav: undefined;
  StackTransaction: undefined;
  Transaction: undefined;
  Sales: undefined;
  Inventory: undefined;
  Setting: undefined;
};

const Stack = createDrawerNavigator<MainStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:true}}>
      <Stack.Screen name="Sales" component={StackSales} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name='Setting' component={SettingScreen} />
      <Stack.Screen name="DrawerNav" component={DashboardScreen}/>
      <Stack.Screen name='Transaction' component={TransactionScreen} />
      <Stack.Screen name='StackTransaction' component={StackTransaction} options={{ headerShown : true}} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
