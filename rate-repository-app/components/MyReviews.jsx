import useGetUserReviews from "../hooks/useGetUserReviews"
import RepositoryItem from "./RepositoryItem"
import { useParams } from 'react-router-native';
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import * as Linking from 'expo-linking';
import { format } from "date-fns";
import useGetReviews from "../hooks/useGetReviews";
import useGetRepository from "../hooks/useGetRepostiory";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        paddingBottom:5,
        marginBottom:10,
    },
    structure: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    description: {
        flexDirection: 'column',
        marginTop:20,
        marginLeft:10,
        marginRight:20,
    },
    rating_border: {
        height:50,
        width:50,
        borderColor:'#0366d6',
        borderWidth:2,
        borderRadius:20,
        alignItems:'baseline',
        alignSelf:'flex-start',
        textAlign:'center',
    },
    rating: {
        color:'#0366d6',
        fontSize:18,
        fontWeight:'bold',
        height:45,
        width:45,
        borderColor:'#0366d6',
        borderWidth:2,
        borderRadius:25,
        alignItems:'baseline',
        alignSelf:'flex-start',
        textAlign:'center',
        paddingTop:10,
        marginLeft:15,
        marginTop:10,
        marginRight:5,
    },
    name: {
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:2,
        marginTop:-10,
    },
    time: {
        color: '#808080',
        paddingBottom:5,
    },
    text: {
        marginRight:5,
        width:320,
        paddingBottom:5
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

const UserReviewItem = ({ review }) => {
    return (
        <View style={styles.container}>
            <View style={styles.structure}>
                <Text style={styles.rating}>
                    {review.node.rating}
                </Text>
                <View style={styles.description}>
                    <Text style={styles.name}>
                        {review.node.repositoryId.replace('.','/')}
                    </Text>
                    <Text style={styles.time}>
                        {format(new Date(review.node.createdAt), 'd.m.y')}
                    </Text>
                    <Text style={styles.text}>
                        {review.node.text}
                    </Text>
                </View>
            </View>
        </View>
    )
};

const MyReviews = () => {
    const { userReviews, loading } = useGetUserReviews()

    if (!loading) {
        return (
            <FlatList
                data={userReviews}
                renderItem={({ item }) => <UserReviewItem review={item}/>}
                keyExtractor={item => item.node.id}
            />
        );
    }

    return null
}

export default MyReviews