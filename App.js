import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './store/reducers/products';

export default function App() {

  const rootReducer = combineReducers({
    produscts: productsReducer
  });

  const store = configureStore(rootReducer)
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store} >

      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
