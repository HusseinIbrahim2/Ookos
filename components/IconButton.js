import { Pressable, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

const IconButton = props => {
    return (
        <Pressable onPress={props.pressIcon} style={({ pressed }) => pressed && styles.pressed} >
            <Entypo name={props.name} size={props.size} color={props.color} />
        </Pressable>
    )
}
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})

export default IconButton;