//import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar/>
        <Routes>
          <Route path="/" element={<RepositoryList/>} exact/>
          <Route path="/signin" element={<SignIn/>} exact/>
          <Route path="/signout" element={<SignOut/>} exact/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </View>
  );
};

export default Main;