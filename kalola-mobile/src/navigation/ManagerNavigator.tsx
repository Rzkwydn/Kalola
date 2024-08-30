import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screen/DashboardScreen';
import SettingScreen from '../screen/Setting/SettingScreen';
import TransactionStackNav from './stacknav/TransactionStackNav';
import OrderStackNav from './stacknav/OrderStackNav';
import ProductStackNav from './stacknav/ProductStackNav';

export type ManagerDrawerParamList = {
  DashboardManager: undefined;
  OrderStack: undefined;
  ProductStack: undefined;
  ManagerSetting: undefined;
};

const ManagerDrawer = createDrawerNavigator<ManagerDrawerParamList>();

const ManagerNavigator: React.FC = () => {
  return (
    <ManagerDrawer.Navigator initialRouteName='ProductStack' screenOptions={{headerShown : false}}>
        <ManagerDrawer.Screen name='DashboardManager' component={DashboardScreen} />
        <ManagerDrawer.Screen name='OrderStack' component={OrderStackNav} />
        <ManagerDrawer.Screen name='ProductStack' component={ProductStackNav} />
        <ManagerDrawer.Screen name='ManagerSetting' component={SettingScreen} />
    </ManagerDrawer.Navigator>
  );
};

export default ManagerNavigator;
