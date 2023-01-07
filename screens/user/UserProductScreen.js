import React, {useLayoutEffect} from "react";
import {Button, FlatList} from "react-native";

import ProductItems from "../../components/shop/ProductItems";
import {useSelector, useDispatch} from "react-redux";
import * as productAction from '../../store/actions/products'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";

const UserProductScreen = props => {


    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Add"
                            iconName="new-message"
                            color="black"
                            onPress={() => {
                                props.navigation.navigate('EditScreen')
                            }}
                        />
                    </HeaderButtons>
                )
            }
        })
    }, [props.navigation])

    const userProduct = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
    const ediProductHandler = id => {
        props.navigation.navigate('EditScreen', {productId: id })
    }
    return (<FlatList
        data={userProduct}
        keyExtractor={item => item.id}
        renderItem={itemData =>
            <ProductItems
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => {
                    ediProductHandler(itemData.item.id, itemData.item.title)
                }}
            >
                <Button title="Edit" onPress={() => {
                    ediProductHandler(itemData.item.id, itemData.item.title)
                }}/>
                <Button title="Delete" onPress={() => {
                    dispatch(productAction.deleteProduct(itemData.item.id))
                }}/>
            </ProductItems>
        }
    />)
}




export default UserProductScreen;