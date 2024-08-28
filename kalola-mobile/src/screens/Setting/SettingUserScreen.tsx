import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const SettingUserScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Setting User</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default SettingUserScreen;