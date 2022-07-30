import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-dom';
//import ListSortingOptions from './ListSortingOptions';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListSortingOptions = ({ title,setTitle,setSort }) => {
  const handleChange = (value) => {
    setTitle(value)
    if (value === "Latest repositories") {
      setSort({ orderBy: "CREATED_AT", orderDirection: "DESC" })
    }
    if (value === "Highest rated repositories") {
      setSort({ orderBy: "RATING_AVERAGE", orderDirection: "DESC" })
    }
    if (value === "Lowest rated repositories") {
      setSort({ orderBy: "RATING_AVERAGE", orderDirection: "ASC" })
    }
  }
  
  return ( 
      <Picker
          selectedValue={title}
          onValueChange={(value, index) => handleChange(value)}
      >   
          <Picker.Item label="Select an item..." value='' enabled={false}/>
          <Picker.Item label="Latest repositories" value="Latest repositories"/>
          <Picker.Item label="Highest rated repositories" value="Highest rated repositories"/>
          <Picker.Item label="Lowest rated repositories" value="Lowest rated repositories"/>
      </Picker>
  )
}

export const RepositoryListContainer = ({ title, setTitle, setSort, repositories }) => {
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
      ListHeaderComponent={() => <ListSortingOptions title={title} setTitle={setTitle} setSort={setSort}/>}
    />
  )
}

const RepositoryList = () => {
  const [ title, setTitle ] = useState("Latest repositories")
  const [ sort, setSort ] = useState({ orderBy: "CREATED_AT", orderDirection: "DESC" })
  const { repositories, loading } = useRepositories(sort)
  
  if (!loading) {
    return <RepositoryListContainer repositories={repositories} title={title} setTitle={setTitle} setSort={setSort} />
  }

  return null
};

export default RepositoryList;