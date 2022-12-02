import { Text, View, ScrollView, StyleSheet, Image, Button } from "react-native";
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as cartAction from '../store/actions/cart';

const ProductDetail = props => {
    const productId = props.route.params.prodId;
    const productTitle = props.route.params.prodTitle;;
    const selectedProduct = useSelector(state => state.products.availabelProducts.find(prod => prod.id == productId));

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: productTitle
        })
    }, [productId, props.navigation])

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.buttonContainer} >
                <Button title="Add to cart" onPress={() => {dispatch(cartAction.addToCart(selectedProduct))}} />
            </View>
            <View style={styles.details} >
                <Text style={styles.price} >${selectedProduct.price.toFixed(2)} </Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText} >{selectedProduct.description}</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    buttonContainer: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginVertical: 15,
    },
    details: {
        alignItems: 'center',
        marginTop: 20,
    },
    price: {
        fontSize: 20,
        color: '#888',
    },
    description: {
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 20,
    },
    descriptionText: {
        textAlign: 'center',
        fontSize: 18,
    },
});

export default ProductDetail;