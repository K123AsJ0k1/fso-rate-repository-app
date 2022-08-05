import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { useQuery } from "@apollo/client";
import { CHECK_USER_INFO } from '../graphql/queries';

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
  const { data, loading } = useQuery(CHECK_USER_INFO)
  
  return ( 
    <View style={styles.container}>
      <ScrollView styles={styles.scroll} horizontal>
        <AppBarTab url="/" tabName="Repositories"/>
        { data?.me?.id !== undefined ? <AppBarTab url="/createreview" tabName="Create a review"/> : null } 
        { data?.me?.id !== undefined ? <AppBarTab url="/myreviews" tabName="My reviews"/> : null } 
        { data?.me?.id === undefined ? <AppBarTab url="/signin" tabName="Sign in"/> : null }
        { data?.me?.id === undefined ? <AppBarTab url="/signup" tabName="Sign up"/> : null }
        { data?.me?.id !== undefined ? <AppBarTab url="/signout" tabName="Sign out"/> : null } 
      </ScrollView>
    </View>
  );
};

export default AppBar;