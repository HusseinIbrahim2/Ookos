import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

function ProductItems({ image, title, price, onAddToCart , onViewDetails }) {

    return (
        <View>
            <Image source={{ uri: image }} />
            <Text>{title}</Text>
            <Text>${price.toFixed(2)} </Text>
            <View>
                <Button title="View details" onPress={onViewDetails} />
                <Button title="Add to cart" onPress={onAddToCart} />
            </View>
        </View>
    )
}

export default ProductItems;