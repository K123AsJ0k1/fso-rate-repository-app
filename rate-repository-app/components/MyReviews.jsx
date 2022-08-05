import useGetUserReviews from "../hooks/useGetUserReviews"
import { View, Text, StyleSheet, Pressable, FlatList, Alert } from "react-native";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import useRemoveReview from "../hooks/useRemoveReview"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        paddingBottom:5,
        marginBottom:10,
        flexDirection: 'column',
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
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
    view_button: {
      display: 'flex',
      color:'white',
      fontSize:16,
      backgroundColor: '#0366d6',
      textAlign:'center',
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:40,
      marginRight:5,
      paddingRight:40,
      borderRadius:5,
    }, 
    delete_button: {
        display: 'flex',
        color:'white',
        fontSize:16,
        backgroundColor: '#FF0000',
        textAlign:'center',
        paddingTop:10,
        marginLeft:5,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40,
        borderRadius:5,
      } 
})

const UserReviewItem = ({ review, handleView, handleDelete }) => {
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
            <View style={styles.buttons}>
                    <Pressable onPress={() => handleView(review.node.repositoryId)}>
                        <Text style={styles.view_button}>View repository</Text>
                    </Pressable>
                    <Pressable onPress={() => handleDelete(review.node.id)}>
                        <Text style={styles.delete_button}>Delete review</Text>
                    </Pressable>
            </View>
        </View>
    )
};

const MyReviews = () => {
    const navigate = useNavigate()
    const { userReviews, loading, refetch } = useGetUserReviews()
    const [deleteReview, result] = useRemoveReview()

    const handleView = (repoId) => {
        navigate(`/repository/${repoId}`)
    }

    const onDeletion = async (reviewId) => {
        try { 
            await deleteReview({ deleteReviewId: reviewId })
            refetch()
        } catch (e) {
            console.log(e);
        }
    } 

    const handleDelete = (reviewId) => {
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
                { text: "Delete", onPress: () => onDeletion(reviewId) } 
            ]
          );
    }

    if (!loading) {
        return (
            <FlatList
                data={userReviews}
                renderItem={({ item }) => <UserReviewItem review={item} handleView={handleView} handleDelete={handleDelete}/>}
                keyExtractor={item => item.node.id}
            />
        );
    }

    return null
}

export default MyReviews