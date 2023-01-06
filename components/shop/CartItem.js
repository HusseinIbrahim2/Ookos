import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';

const CartItem = props => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.mainText}>{props.title}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
                {props.deletable && (
                    <TouchableOpacity
                        onPress={props.onRemove}
                        style={styles.deleteButton}
                    >
                        <Ionicons name="trash" size={22} color="red"/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontSize: 14,
        color: '#888'
    },
    mainText: {
        fontSize: 14
    },
    deleteButton: {
        marginLeft: 6
    },
});

export default CartItem;