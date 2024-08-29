import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AdminNavigator from './AdminNavigator';
// role d konfirmasi di sini
const MainNavigator = () => {
  return (
    <NavigationContainer>
        <AdminNavigator/>
        
    </NavigationContainer>
  );
};

export default MainNavigator;