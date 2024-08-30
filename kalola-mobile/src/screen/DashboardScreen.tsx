import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const DashboardScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Dashboard</Text>
      {/* Implement dashboard content here */}
      <Text style={GlobalStyles.text}>Welcome to your business dashboard!</Text>
    </View>
  );
};

export default DashboardScreen;
