import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const InventoryScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Inventory</Text>
      {/* Implement dashboard content here */}
    </View>
  );
};

export default InventoryScreen;