import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store.js';
import MainNavigator from './src/navigation/MainNavigator.js';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}