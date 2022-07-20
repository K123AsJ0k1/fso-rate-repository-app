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
  //<AppBarTab url="/signin" tabName="Sign in"/>
  return ( 
    <View style={styles.container}>
        <AppBarTab url="/" tabName="Repositories"/>
        <AppBarTab url="/signin" tabName="Sign in"/>
    </View>
  );
};

export default AppBar;