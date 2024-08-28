import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { globalStyles } from '../../styles/globalStyles';

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
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      
      <Button title="Login" onPress={handleLogin} />

      <Text style={globalStyles.registerLink}>
        Don't have an account?{' '}
        <Text
          style={globalStyles.linkText}
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </Text>
      </Text>
      <Text style={globalStyles.registerLink}>
        Forgot Password?{' '}
        <Text
          style={globalStyles.linkText}
          onPress={() => navigation.navigate('Forgot')}
        >
          Resset
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
