import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-dom';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate()

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []
  
  const renderItem = ({ item }) => {
    const handlePress = (id) => {
      navigate(`/repository/${id}`)
    }

    return (
      <Pressable onLongPress={() => handlePress(item.id)}>
        <RepositoryItem item={item}/>
      </Pressable>
    )
  }  
  
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

const RepositoryList = () => {
  const { repositories } = useRepositories()
  
  return <RepositoryListContainer repositories={repositories} />
};

export default RepositoryList;