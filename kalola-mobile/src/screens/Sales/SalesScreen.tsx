import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const SalesScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Sales</Text>
      {/* Implement dashboard content here */}
      <StatusBar style="auto" />
    </View>
  );
};

export default SalesScreen;