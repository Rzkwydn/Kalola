import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screen/DashboardScreen';
import SettingScreen from '../screen/Setting/SettingScreen';
import TransactionStackNav from './stacknav/TransactionStackNav';
import OrderStackNav from './stacknav/OrderStackNav';
import ProductStackNav from './stacknav/ProductStackNav';

export type AdminDrawerParamList = {
  DashboardAdmin: undefined;
  OrderStack: undefined;
  ProductStack: undefined;
  AdminSetting: undefined;
};

const AdminDrawer = createDrawerNavigator<AdminDrawerParamList>();

const AdminNavigator: React.FC = () => {
  return (
    <AdminDrawer.Navigator screenOptions={{headerShown : false}}>
        <AdminDrawer.Screen name='DashboardAdmin' component={DashboardScreen} />
        <AdminDrawer.Screen name='OrderStack' component={OrderStackNav} />
        <AdminDrawer.Screen name='ProductStack' component={ProductStackNav} />
        <AdminDrawer.Screen name='AdminSetting' component={SettingScreen} />
    </AdminDrawer.Navigator>
  );
};

export default AdminNavigator;
