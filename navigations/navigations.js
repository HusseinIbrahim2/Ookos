import { createStackNavigator, createAppContainer } from "react-navigation";

import ProductOverviewScreen from "../screens/ProductOverviewScreen";

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    defaultNavigationOptions: {
        headerStyle: {
            backgrondColor: 'Black',
        },
        headerTintColor: 'White',
    }
})

export default createAppContainer(ProductsNavigator)