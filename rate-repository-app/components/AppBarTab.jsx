import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#ffffff', 
    fontSize:20,
    fontWeight: 'bold'
  },
  flexContainer: {
    display: 'flex',
  },
  flexItemA: {
    flexGrow: 0,
    padding: 10,
  },
});

const AppBarTab = ({ tab_name }) => {    
    return (
        <View style={styles.flexItemA}>
            <Text style={styles.text}>{tab_name}</Text>
        </View>
    )
}

export default AppBarTab