import React from "react";
import {FlatList} from "react-native";

import ProductItems from "../../components/shop/ProductItems";
import {useSelector} from "react-redux";


const UserProductScreen = props => {
    const userProduct = useSelector(state => state.products.userProducts)
    return (
        <FlatList
            data={userProduct}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItems
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
            />}
        />)
}

export default UserProductScreen;