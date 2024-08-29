import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';

const SettingScreen: React.FC = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Setting</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default SettingScreen;