import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import ProductOverviewScreen from '../screens/ProductOverviewScreen';

const ProductsNavigator = createSwitchNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'black' : 'white'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : 'black'
    }
  }
);

export default createAppContainer(ProductsNavigator);
