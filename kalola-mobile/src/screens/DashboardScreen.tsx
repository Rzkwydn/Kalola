import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const DashboardScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Dashboard</Text>
      {/* Implement dashboard content here */}
      <Text style={globalStyles.text}>Welcome to your business dashboard!</Text>
    </View>
  );
};

export default DashboardScreen;
