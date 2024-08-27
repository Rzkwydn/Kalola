import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MainNavigator from './src/navigation/MainNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* Gunakan navigator yang sesuai berdasarkan status otentikasi */}
        <MainNavigator/>
      </NavigationContainer>
      </PaperProvider>
  );
};

export default App;
