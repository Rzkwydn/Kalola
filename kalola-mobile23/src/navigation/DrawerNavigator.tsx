import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import InventoryScreen from '../screens/Inventory/InventoryScreen';
import SalesScreen from '../screens/Sales/SalesScreen';
import TransactionScreen from '../screens/Transaction/TransactionScreen';
import SettingScreen from '../screens/Setting/SettingScreen';

export type DrawerParamList = {
  Dashboard: undefined;
  StackTransaction: undefined;
  Sales: undefined;
  Inventory: undefined;
  Setting: undefined;
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name='StackTransaction' component={TransactionScreen} />
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name='Setting' component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
