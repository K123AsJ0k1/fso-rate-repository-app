import { View, StyleSheet } from "react-native"
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop:20,
        marginLeft:10,
    },
    name: {
        fontSize:16,
        fontWeight:'bold'
    },
    description: {
        display: 'flex',
        color:'#808080', 
        fontSize: 15,
        alignItems:'baseline',
        alignSelf:'flex-start',
        paddingTop:5,
        paddingBottom:5,
        width:300,
    },
    language: {
        display: 'flex',
        color:'white',
        backgroundColor: '#0366d6',
        fontSize: 18,
        alignItems:'baseline',
        alignSelf:'flex-start',
        textAlign:'center',
        paddingLeft:5,
        paddingRight:5,
        paddingTop:1,
        paddingBottom:2,
        borderRadius:3,
    }
});

const RepoInfo = ({ fullName, description, language }) => {
    return (
        <View style={styles.container}>
            <Text testID="repo_name" style={styles.name}>{fullName}</Text>
            <Text textID="repo_desc" style={styles.description}>{description}</Text>
            <Text textID="repo_lang" style={styles.language}>{language}</Text>
        </View>
    )
}

export default RepoInfo