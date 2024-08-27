import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import SalesManagementScreen from '../screens/SalesManagementScreen';
import InventoryScreen from '../screens/InventoryScreen';

export type MainStackParamList = {
  Dashboard: undefined;
  SalesManagement: undefined;
  Inventory: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();
const Drawer = createDrawerNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="SalesManagement" component={SalesManagementScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
