// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = (role: 'admin' | 'cashier' | 'manager') => {
    dispatch(login(role));
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login as Admin" onPress={() => handleLogin('admin')} />
      <Button title="Login as Casheer" onPress={() => handleLogin('cashier')} />
      <Button title="Login as Manager" onPress={() => handleLogin('manager')} />
    </View>
  );
};

export default LoginScreen;
