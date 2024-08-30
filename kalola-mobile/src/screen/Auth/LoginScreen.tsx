import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { GlobalStyles } from '../../styles/GlobalStyles';

// Tentukan tipe untuk navigation prop
type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    // Implement authentication logic here
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Login</Text>
      
      <TextInput
        style={GlobalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={GlobalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      
      <Button title="Login" onPress={handleLogin} />
      
      <Text>Login Screen</Text>
      <Button title="Login as Admin" onPress={() => navigation.navigate ('Admin')} />
      <Button title="Login as Cashier" onPress={() => navigation.navigate ('Cashier')} />
      <Button title="Login as Manager" onPress={() => navigation.navigate ('Manager')} />

      <Text style={GlobalStyles.registerLink}>
        Don't have an account?{' '}
        <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </Text>
      </Text>
      <Text style={GlobalStyles.registerLink}>
        Forgot Password?{' '}
        <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate('Forgot')}
        >
          Resset
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
