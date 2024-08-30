// src/navigation/AuthNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/Auth/LoginScreen';
import RegisterScreen from '../screen/Auth/RegisterScreen';
import ResetPasswordScreen from '../screen/Auth/ResetPasswordScreen';
import AdminNavigator from './AdminNavigator';
import CashierNavigator from './CashierNavigator';
import ManagerNavigator from './ManagerNavigator';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Forgot: undefined;
  Admin: undefined;
  Cashier: undefined;
  Manager: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {

  return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
        <AuthStack.Screen name="Forgot" component={ResetPasswordScreen} />
        <AuthStack.Screen name="Admin" component={AdminNavigator} />
        <AuthStack.Screen name="Cashier" component={CashierNavigator} />
        <AuthStack.Screen name="Manager" component={ManagerNavigator} />
      </AuthStack.Navigator>
  );
};

export default AuthNavigator;
