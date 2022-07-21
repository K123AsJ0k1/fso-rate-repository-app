import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: "#24292e", 
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10
  },
  scroll: {
    flexDirection: 'row',
  }
});

const AppBar = () => {
  return ( 
    <View style={styles.container}>
      <ScrollView styles={styles.scroll} horizontal>
        <AppBarTab url="/" tabName="Repositories"/>
        <AppBarTab url="/signin" tabName="Sign in"/>
      </ScrollView>
    </View>
  );
};

export default AppBar;