import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Component, useEffect } from 'react';
import React from 'react';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-dom';
//import ListSortingOptions from './ListSortingOptions';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ListSortingOptions = ({ search, setSearch, title, setTitle, setBy, setDirection }) => {
  const handleSearch = (query) => {
    setSearch(query)
  }

  const handleChange = (value) => {
    setTitle(value)
    if (value === "Latest repositories") {
      setBy("CREATED_AT")
      setDirection("DESC")
    }
    if (value === "Highest rated repositories") {
      setBy("RATING_AVERAGE")
      setDirection("DESC")
    }
    if (value === "Lowest rated repositories") {
      setBy("RATING_AVERAGE")
      setDirection("ASC")
    }
  }
  
  return ( 
    <View>
      <Searchbar
        placeholder='Search'
        onChangeText={handleSearch}
        value={search}
      />
      <Picker
          selectedValue={title}
          onValueChange={(value, index) => handleChange(value)}
      >   
          <Picker.Item label="Select an item..." value='' enabled={false}/>
          <Picker.Item label="Latest repositories" value="Latest repositories"/>
          <Picker.Item label="Highest rated repositories" value="Highest rated repositories"/>
          <Picker.Item label="Lowest rated repositories" value="Lowest rated repositories"/>
      </Picker>
    </View>
  )
}

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    return (
      <ListSortingOptions 
        search={this.props.search} 
        setSearch={this.props.setSearch} 
        title={this.props.title} 
        setTitle={this.props.setTitle} 
        setBy={this.props.setBy}
        setDirection={this.props.setDirection}
      />
    )
  }
  
  render() {
    return (
      <FlatList
        data={this.props.repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.props.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    )
  }
}

const RepositoryList = () => {
  const navigate = useNavigate()
  const [ title, setTitle ] = useState("Latest repositories")
  
  const [ search, setSearch ] = useState("")
  const [ querySearch ] = useDebounce(search, 500)
  const [ by, setBy ] = useState("CREATED_AT")
  const [ direction, setDirection ] = useState("DESC")
  
  const [ sort, setSort ] = useState({ searchKeyword: querySearch, orderBy: by, orderDirection: direction })
  const { repositories, loading } = useRepositories(sort)

  useEffect(() => {
    setSort({ searchKeyword: querySearch, orderBy: by, orderDirection: direction })
  },[querySearch, by, direction])

  if (!loading) {
    
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

    return <RepositoryListContainer 
      repositoryNodes={repositoryNodes} 
      renderItem={renderItem}
      search={search} 
      setSearch={setSearch} 
      title={title} 
      setTitle={setTitle} 
      setBy={setBy}
      setDirection={setDirection}
    />
  }
  
  return null
};

export default RepositoryList;