import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import SalesManagementScreen from '../screens/Sales/SalesManagementScreen';
import InventoryScreen from '../screens/Inventory/InventoryScreen';
import SalesScreen from '../screens/Sales/SalesScreen';
import TransactionScreen from '../screens/Transaction/TransactionScreen';
import SettingScreen from '../screens/Setting/SettingScreen';

export type MainStackParamList = {
  Dashboard: undefined;
  Transaction: undefined;
  Sales: undefined;
  Inventory: undefined;
  Setting: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const Drawer = createDrawerNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name='Transaction' component={TransactionScreen} />
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name='Setting' component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
