import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    // Implement registration logic here
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Register</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
