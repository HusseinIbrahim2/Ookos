import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {Entypo} from "@expo/vector-icons";

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ProductOverviewScreen from './screens/ProductOverviewScreen';
import ProductDetail from './screens/ProductDetailsScreen';
import CartItemsScreen from './screens/CartItemsScreen';
import orderReducer from './store/reducers/order';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import OrdersScreen from "./screens/OrdersScreen";
import {createStackNavigator} from '@react-navigation/stack';


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
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Products"
                component={ProductOverviewScreen}
                options={{
                    headerTitle: 'All Products',
                    drawerIcon: drawerConfig => (
                        <Entypo name='shopping-cart' size={20}/>
                    )
                }}/>
            <Drawer.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    headerTitle: 'Your Orders',
                    drawerIcon: drawerConfig => (
                        <Entypo name='add-to-list' size={20}/>
                    )
                }}/>
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Overview' component={MyDrawer} options={{headerShown: false}}/>
                        <Stack.Screen name='ProductDetails' component={ProductDetail}/>
                        <Stack.Screen name='CarteScreen' component={CartItemsScreen}/>
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
