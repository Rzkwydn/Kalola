import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../../navigation/stacknav/ProductStackNav';

type ProductDetailsScreenNavProp = StackNavigationProp<ProductStackParamList, 'ProductDetails'>;

type Props = {
  navigation: ProductDetailsScreenNavProp;
};

const ProductDetailsScreen: React.FC <Props> = ({navigation}) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>Product Details</Text>
      {/* Implement dashboard content here */}
      <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate("EditProduct") }
        >
          Edit Product
        </Text>
    </View>
  );
};

export default ProductDetailsScreen;