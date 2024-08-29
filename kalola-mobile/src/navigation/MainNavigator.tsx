// src/navigation/MainNavigator.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import AdminNavigator from './AdminNavigator';
import CashierNavigator from './CashierNavigator';
import ManagerNavigator from './ManagerNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Main = createStackNavigator();

const MainNavigator: React.FC = () => {
  const { userRole } = useSelector((state: RootState) => state.auth);

  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      {userRole === 'admin' && <Main.Screen name="Admin" component={AdminNavigator} />}
      {userRole === 'casheer' && <Main.Screen name="Casheer" component={CashierNavigator} />}
      {userRole === 'manager' && <Main.Screen name="Manager" component={ManagerNavigator} />}
    </Main.Navigator>
  );
};

export default MainNavigator;
