import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";

const ProductItems = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View>
            <TouchableCmp onPress={props.onSelect} useForeground >
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.details} >
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price} >${props.price.toFixed(2)} </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        {props.children}
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        height: 300,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden'
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '22%',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    details: {
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
});


export default ProductItems;