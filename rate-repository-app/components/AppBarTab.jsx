import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

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

const AppBarTab = ({ tabName, url }) => {    
    //
    return (
        <View style={styles.flexItemA}>
            <Link to={url}>
              <Text style={styles.text}>{tabName}</Text>
            </Link>
        </View>
    )
}

export default AppBarTab