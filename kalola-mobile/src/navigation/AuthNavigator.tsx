// src/navigation/AuthNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/Auth/LoginScreen';
import RegisterScreen from '../screen/Auth/RegisterScreen';
import ResetPasswordScreen from '../screen/Auth/ResetPasswordScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import MainNavigator from './MainNavigator';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Forgot: undefined;
  Main: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="Forgot" component={ResetPasswordScreen} />
          </>
        ) : (
          <AuthStack.Screen name="Main" component={MainNavigator} />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
