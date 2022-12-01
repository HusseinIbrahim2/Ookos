import React from "react";
import { HeaderButton } from 'react-navigation-header-buttons';
import { Entypo } from '@expo/vector-icons';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Entypo}
            iconSize={24}
            color={props.color}
        />
    )
}
export default CustomHeaderButton;