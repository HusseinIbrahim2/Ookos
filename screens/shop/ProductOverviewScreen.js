import React from "react";
import {Button, FlatList, Text} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {useLayoutEffect} from "react";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../../components/UI/HeaderButton';
import * as cartAction from '../../store/actions/cart';
import ProductItems from "../../components/shop/ProductItems";

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Cart"
                            iconName="shopping-cart"
                            color="black"
                            onPress={() => {
                                props.navigation.navigate('CarteScreen')
                            }}
                        />
                    </HeaderButtons>
                )
            }
        })

    }, [props.navigation])

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetails', {
            prodId: id,
            prodTitle: title
        })
    }

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItems
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title)
                }}
            >
                <Button title="View details" onPress={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title)
                }}/>
                <Button title="Add to cart" onPress={() => {
                    dispatch(cartAction.addToCart(itemData.item))
                }}/>
            </ProductItems>
            }
        />
    )
}

export default ProductOverviewScreen;