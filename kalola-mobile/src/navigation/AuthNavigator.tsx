import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/Auth/LoginScreen';
import RegisterScreen from '../screen/Auth/RegisterScreen';
import ResetPasswordScreen from '../screen/Auth/ResetPasswordScreen';

// Buat stack navigator dengan tipe yang telah didefinisikan
const AuthStack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Forgot" component={ResetPasswordScreen}/>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
