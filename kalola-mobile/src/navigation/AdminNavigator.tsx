import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screen/DashboardScreen';
import SettingScreen from '../screen/Setting/SettingScreen';
import OrderStackNav from './stacknav/OrderStackNav';
import ProductStackNav from './stacknav/ProductStackNav';
import TransactionStackNav from './stacknav/TransactionStackNav';

export type AdminDrawerParamList = {
  OrderStack: undefined;
  TransactionStack: undefined;
  ProductStack: undefined;
  DashboardAdmin: undefined;
  AdminSetting: undefined;
};

const AdminDrawer = createDrawerNavigator<AdminDrawerParamList>();

const AdminNavigator: React.FC = () => {
  return (
    <AdminDrawer.Navigator initialRouteName="OrderStack" screenOptions={{headerShown : true}}>
        <AdminDrawer.Screen name='DashboardAdmin' component={DashboardScreen} />
        <AdminDrawer.Screen name='TransactionStack' component={TransactionStackNav} />
        <AdminDrawer.Screen name='OrderStack' component={OrderStackNav} />
        <AdminDrawer.Screen name='ProductStack' component={ProductStackNav} />
        <AdminDrawer.Screen name='AdminSetting' component={SettingScreen} />
    </AdminDrawer.Navigator>
  );
};

export default AdminNavigator;
