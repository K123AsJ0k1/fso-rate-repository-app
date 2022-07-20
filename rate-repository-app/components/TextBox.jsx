import { Text, View, StyleSheet } from "react-native"

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