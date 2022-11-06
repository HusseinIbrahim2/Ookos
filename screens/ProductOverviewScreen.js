import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

const ProductOverviewScreen = props => {

    const products = useSelector(state => state.products.availabelProducts)
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData.item.title}
        />
    )
}

export default ProductOverviewScreen;