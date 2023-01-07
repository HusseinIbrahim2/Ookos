import React, {useLayoutEffect, useState} from "react";
import {View, Text, TextInput, StyleSheet, ScrollView} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {useSelector} from "react-redux";

import CustomHeaderButton from "../../components/UI/HeaderButton";


const EditProductScreen = props => {

    const isProdId = props.route.params?.productId;
    const editedProduct = useSelector(state =>
        state.products.userProducts.find(prod => prod.id == isProdId));

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '')
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState(editedProduct ? editedProduct.price : '');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: isProdId ? 'Edit Product' : 'Add Product',
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title="Edit"
                            iconName="check"
                            color="black"
                            onPress={() => {
                            }}
                        />
                    </HeaderButtons>
                )
            }
        })
    }, [props.navigation, isProdId]);


    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>ImageUrl</Text>
                    <TextInput style={styles.input} value={imageUrl} onChangeText={setImageUrl} v/>
                </View>
                {editedProduct ? null :
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput foc keyboardType='numeric' style={styles.input} value={price} onChangeText={setPrice}/>
                    </View>
                }
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} value={description} onChangeText={setDescription}/>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%',
        marginBottom: 10
    },
    label: {
        marginVertical: 5
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 1,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default EditProductScreen;
