import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from '../../screen/Product/ProductListScreen';
import ProductDetailsScreen from '../../screen/Product/ProductDetailsScreen';
import EditProductScreen from '../../screen/Product/EditProductScreen';
import AddProductScreen from '../../screen/Product/AddProductScreen';
import CustomHeader from '../../components/CustomHeader';

export type ProductStackParamList = {
  ProductList: undefined;
  ProductDetails: undefined;
  EditProduct: undefined;
  AddProduct: undefined;
};

const ProductStack = createStackNavigator<ProductStackParamList>();

const ProductStackNav: React.FC = () => {
  return (
    <ProductStack.Navigator 
    initialRouteName="ProductList"
    screenOptions={({ navigation, route }) => ({
        header: (props) => <CustomHeader {...props} navigation={navigation as any} />,
      })}
    >
      <ProductStack.Screen name="ProductList" component={ProductListScreen}/>
      <ProductStack.Screen name="ProductDetails" component={ProductDetailsScreen}/>
      <ProductStack.Screen name="EditProduct" component={EditProductScreen}/>
      <ProductStack.Screen name="AddProduct" component={AddProductScreen}/>
    </ProductStack.Navigator>
  );
};

export default ProductStackNav;
