import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ProductOverviewScreen from './screens/ProductOverviewScreen';
import ProductDetail from './screens/ProductDetailsScreen';
import CartItemsScreen from './screens/CartItemsScreen';
import orderReducer from './store/reducers/order';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store} >
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={ProductOverviewScreen} />
                <Drawer.Screen name="ProductDetails" component={ProductDetail} />
                <Drawer.Screen name="CarteScreen" component={CartItemsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
