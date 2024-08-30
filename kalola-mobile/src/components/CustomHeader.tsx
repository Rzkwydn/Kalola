import React from 'react';
import { Appbar } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackHeaderProps } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { RouteProp } from '@react-navigation/native';

// Perbarui tipe back untuk menerima objek dengan title
type CustomHeaderProps = StackHeaderProps & {
  navigation: DrawerNavigationProp<any>; // Tentukan tipe lebih spesifik jika memungkinkan
  route: RouteProp<any, any>; // Tentukan tipe lebih spesifik jika memungkinkan
  back?: { title: string } | boolean; // Modifikasi tipe back
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation, back, options, route }) => {
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
};

export default CustomHeader;
