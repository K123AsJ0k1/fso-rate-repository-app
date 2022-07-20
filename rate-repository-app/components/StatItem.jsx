import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        padding:15,
    },
    stat: {
        color:'black',
        fontWeight:'bold',
        fontSize:16,
    },
    title: {
        color:'grey',
        fontSize:14,
        paddingTop:3,
    }
});

const StatItem = ({ title, stat }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.stat}>{Math.abs(stat) > 999 ? Math.sign(stat)*((Math.abs(stat)/1000).toFixed(1)) + 'k' : Math.sign(stat)*Math.abs(stat)}</Text>
            <Text style={styles.title}>{title}</Text>
       </View>
    )
}

export default StatItem