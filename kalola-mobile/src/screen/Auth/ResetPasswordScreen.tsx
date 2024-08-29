import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { GlobalStyles } from '../../styles/GlobalStyles';

type ForgotNavigationProp = StackNavigationProp<AuthStackParamList, 'Forgot'>;

type Props = {
  navigation: ForgotNavigationProp;
};

const ResetPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }
    // Implement password reset logic here
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Reset Password</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ResetPasswordScreen;
