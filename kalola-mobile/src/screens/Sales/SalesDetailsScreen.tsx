import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const SalesDetailsScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Sales Detail</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default SalesDetailsScreen;