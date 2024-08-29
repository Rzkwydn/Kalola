import * as React from 'react';
import { Platform } from 'react-native';

import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import SalesScreen from '../../screens/Sales/SalesScreen';
import SalesDetailsScreen from '../../screens/Sales/SalesDetailsScreen';
import SalesManagementScreen from '../../screens/Sales/SalesManagementScreen';

export type StacSalesParamList = {
    Sales: undefined;
    SalesDetails: undefined;
    SalesManagement: undefined;
  };

const Stack = createStackNavigator<StacSalesParamList>();

export default function StackSales() {
  
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          detachPreviousScreen: !navigation.isFocused(),
          header: ({ navigation, route, options, back }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <Appbar.Header>
                {back ? (
                  <Appbar.BackAction onPress={() => navigation.goBack()} />
                ) : (navigation as any).openDrawer ? (
                  <Appbar.Action
                    icon="menu"
                    isLeading
                    onPress={() =>
                      (
                        navigation as any as DrawerNavigationProp<{}>
                      ).openDrawer()
                    }
                  />
                ) : null}
                <Appbar.Content title={title} />
              </Appbar.Header>
            );
          },
        };
      }}
    >
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name='SalesDetails' component={SalesDetailsScreen} />
      <Stack.Screen name="SalesManagement" component={SalesManagementScreen} />
    </Stack.Navigator>
  );
}
