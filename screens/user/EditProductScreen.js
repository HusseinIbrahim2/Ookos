import React, {useLayoutEffect} from "react";
import {View, Text, TextInput, StyleSheet, ScrollView} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";

const EditProductScreen = props => {

    const isProdId = props.route.params?.productId;

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
    },[props.navigation , isProdId]);


    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>ImageUrl</Text>
                    <TextInput style={styles.input}/>
                </View>
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput keyboardType='numeric' style={styles.input}/>
                    </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input}/>
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
