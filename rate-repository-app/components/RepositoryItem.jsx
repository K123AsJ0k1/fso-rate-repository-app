import { View, StyleSheet } from "react-native"
import Stats from "./Stats";
import RepoProfile from "./RepoProfile";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
    return (
      <View testID="repositoryItem" style={styles.container}>
        <RepoProfile 
          Url={item.ownerAvatarUrl} 
          fullName={item.fullName} 
          description={item.description} 
          language={item.language}
        />
        <Stats 
          stars={item.stargazersCount} 
          forks={item.forksCount} 
          reviews={item.reviewCount} 
          rating={item.ratingAverage}
        />
      </View>
    )
}

export default RepositoryItem