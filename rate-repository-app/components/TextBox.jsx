import { View, StyleSheet } from "react-native"
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop:10,
        marginLeft:10,
    },
    title: {
        fontWeight: 'bold'
    }
});

const TextBox = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text>
                {text}
            </Text>
        </View>
    )
}

export default TextBox