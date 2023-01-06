import React, {useLayoutEffect} from "react";
import {View, Text} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";

const EditProductScreen = props => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
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
    }, [props.navigation])
    return (
        <View>
            <Text>Edit screen</Text>
        </View>
    )
}

export default EditProductScreen;
