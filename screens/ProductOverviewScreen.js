import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as cartAction from '../store/actions/cart';
import ProductItems from "../components/shop/ProductItems";

const ProductOverviewScreen = props => {

    const products = useSelector(state => state.products.availabelProducts);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItems
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetails={() => {
                    props.navigation.navigate('ProductDetails', { prodId: itemData.item.id })
                }}
                onAddToCart={() => {
                    dispatch(cartAction.addToCart(itemData.item));
                }}
            />}
        />
    )
}

export default ProductOverviewScreen;