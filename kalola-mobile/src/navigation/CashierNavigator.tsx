import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screen/DashboardScreen';
import SettingScreen from '../screen/Setting/SettingScreen';
import TransactionStackNav from './stacknav/TransactionStackNav';
import OrderStackNav from './stacknav/OrderStackNav';
import ProductStackNav from './stacknav/ProductStackNav';

export type CashierDrawerParamList = {
  DashboardCashier: undefined;
  TransactionStack: undefined;
};

const CashierDrawer = createDrawerNavigator<CashierDrawerParamList>();

const CashierNavigator: React.FC = () => {
  return (
    <CashierDrawer.Navigator initialRouteName='TransactionStack' screenOptions={{headerShown : false}}>
        <CashierDrawer.Screen name='DashboardCashier' component={DashboardScreen} />
        <CashierDrawer.Screen name='TransactionStack' component={TransactionStackNav} />
    </CashierDrawer.Navigator>
  );
};

export default CashierNavigator;
