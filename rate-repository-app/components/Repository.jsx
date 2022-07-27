import RepositoryItem from "./RepositoryItem"
import { useQuery } from "@apollo/client";
import { GET_REPO } from "../graphql/queries";
import { useParams } from 'react-router-native';
import { View, Text, StyleSheet, Pressable } from "react-native";
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        paddingBottom:15,
    },
    button: {
      display: 'flex',
      color:'white',
      backgroundColor: '#0366d6',
      textAlign:'center',
      paddingTop:10,
      paddingBottom:10,
      marginLeft:15,
      marginRight:15,
      borderRadius:5,
    } 
})

const Repository = () => {
    const { repoId } = useParams()
    const { data, loading } = useQuery(GET_REPO, { variables: { id: repoId } })    

    const handlePress = () => {
        Linking.openURL(data.repository.url)
    }
    
    if (!loading) { 
        return (
            <View style={styles.container}>
                <RepositoryItem item={data?.repository}/>
                <Pressable onPress={() => handlePress()}>
                    <Text style={styles.button}>Open in GitHub</Text>
                </Pressable>
            </View>
        )
    }

    return null
}

export default Repository