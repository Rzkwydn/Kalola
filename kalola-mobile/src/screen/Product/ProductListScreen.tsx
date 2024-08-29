import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductStackParamList } from '../../navigation/stacknav/ProductStackNav';

type ProductListScreenNavProp = StackNavigationProp<ProductStackParamList, 'ProductList'>;

type Props = {
  navigation: ProductListScreenNavProp;
};

const ProductListScreen: React.FC <Props> = ({navigation}) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Product List</Text>
      {/* Implement dashboard content here */}
      <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate("ProductDetails") }
        >
          Product Details
        </Text>
        <Text
          style={GlobalStyles.linkText}
          onPress={() => navigation.navigate("AddProduct") }
        >
          Add Product
        </Text>
    </View>
  );
};

export default ProductListScreen;