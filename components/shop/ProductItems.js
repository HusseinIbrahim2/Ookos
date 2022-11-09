import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

function ProductItems({ image, title, price, onAddToCart, onViewDetails }) {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.details} >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price} >${price.toFixed(2)} </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.innerButton}>
                    <Button title="View details" onPress={onViewDetails} />
                </View>
                <View style={styles.innerButton}>
                    <Button title="Add to cart" onPress={onAddToCart} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 5,
        height: 300,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '25%',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    innerButton: {
        marginHorizontal: 10,
    },
    details: {
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical:4,
    },
    price: {
        fontSize: 14,
        color: '#888'
      },
});


export default ProductItems;