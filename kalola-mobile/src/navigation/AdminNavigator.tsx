import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screen/DashboardScreen';
import SettingScreen from '../screen/Setting/SettingScreen';
import TransactionStackNav from './stacknav/TransactionStackNav';
import OrderStackNav from './stacknav/OrderStackNav';
import ProductStackNav from './stacknav/ProductStackNav';

const AdminDrawer = createDrawerNavigator();

const AdminNavigator: React.FC = () => {
  return (
    <AdminDrawer.Navigator screenOptions={{headerShown : false}}>
        <AdminDrawer.Screen name='DashboardAdmin' component={DashboardScreen} />
        <AdminDrawer.Screen name='TransactionStack' component={TransactionStackNav} />
        <AdminDrawer.Screen name='OrderStack' component={OrderStackNav} />
        <AdminDrawer.Screen name='ProductStack' component={ProductStackNav} />
        <AdminDrawer.Screen name='DashboardAdmin' component={SettingScreen} />
    </AdminDrawer.Navigator>
  );
};

export default AdminNavigator;
