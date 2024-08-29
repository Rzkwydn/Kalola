import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store.js';
import AuthNavigator from './src/navigation/AuthNavigator.js';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AuthNavigator/>
      </PaperProvider>
    </StoreProvider>
  );
}