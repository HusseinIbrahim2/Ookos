import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { useSelector } from "react-redux";

const ProductDetail = props => {

    const productId = props.route.params.prodId;
    const selectedProduct = useSelector(state => state.products.availabelProducts.find(prod => prod.id == productId))

    useLayoutEffect(() => {

        const productTitle = selectedProduct.title;
        props.navigation.setOptions({
            title: productTitle
        })

    }, [ productId ,props.navigation])

    return (
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    )
}

export default ProductDetail;