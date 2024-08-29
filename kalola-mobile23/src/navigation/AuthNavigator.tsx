import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Authentication/LoginScreen';
import RegisterScreen from '../screens/Authentication/RegisterScreen';
import ResetPasswordScreen from '../screens/Authentication/ResetPasswordScreen';

// Definisikan tipe untuk layar dalam stack navigator ini
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Forgot: undefined;
};

// Buat stack navigator dengan tipe yang telah didefinisikan
const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name='Forgot' component={ResetPasswordScreen}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
