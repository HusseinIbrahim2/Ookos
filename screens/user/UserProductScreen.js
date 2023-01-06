import React from "react";
import {Button, FlatList, StyleSheet, View} from "react-native";

import ProductItems from "../../components/shop/ProductItems";
import {useSelector,useDispatch} from "react-redux";
import * as productAction from '../../store/actions/products'

const UserProductScreen = props => {
    const userProduct = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch()
    return (<FlatList
        data={userProduct}
        keyExtractor={item => item.id}
        renderItem={itemData =>
            <ProductItems
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
            >
                <Button title="Edit" onPress={() => {
                }}/>
                <Button title="Delete" onPress={() => {
                    dispatch(productAction.deleteProduct(itemData.item.id))
                }}/>
            </ProductItems>
        }
    />)
}



export default UserProductScreen;