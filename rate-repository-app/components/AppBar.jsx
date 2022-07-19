import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#24292e", 
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10
  },
});

const AppBar = () => {
  return ( 
    <View style={styles.container}>
        <AppBarTab tab_name="Repositories"/>
    </View>
  );
};

export default AppBar;