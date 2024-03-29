//import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';
import SignUp from './SignUp';
import AppBar from './AppBar';
import MyReviews from './MyReviews';
//import Repository from './Repository';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
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
          <Route path="/signup" element={<SignUp/>} exact/>
          <Route path="/createreview" element={<CreateReview/>} exact/>
          <Route path="/myreviews" element={<MyReviews/>} exact/>
          <Route path="/repository/:repoId" element={<SingleRepository/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </View>
  );
};

export default Main;