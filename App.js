import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import productsReducer from './store/reducers/products';
import ProductOverviewScreen from './screens/ProductOverviewScreen';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = configureStore({ reducer: rootReducer });
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={ProductOverviewScreen} options={{ title:'All Products' }} />
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
