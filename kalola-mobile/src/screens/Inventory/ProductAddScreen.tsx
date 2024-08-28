import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function ProductAddScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Product Add</Text>
      <StatusBar style="auto" />
    </View>
  );
}