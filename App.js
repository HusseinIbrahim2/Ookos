import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ProductOverviewScreen from './screens/ProductOverviewScreen';
import ProductDetail from './screens/ProductDetailsScreen';
import CartItemsScreen from './screens/CartItemsScreen';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={ProductOverviewScreen} options={{ title: 'All Products' }} />
            <Stack.Screen name='ProductDetails' component={ProductDetail} />
            <Stack.Screen name='CarteScreen' component={CartItemsScreen} />
          </Stack.Navigator>
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
