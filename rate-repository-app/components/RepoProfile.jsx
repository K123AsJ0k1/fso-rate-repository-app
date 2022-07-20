import { View, Image, StyleSheet } from "react-native"
import RepoInfo from "./RepoInfo";

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    tinyLogo: {
      width: 50,
      height: 50,
      marginTop:15,
      marginLeft:15,
      marginRight:10,
      borderRadius:5,
    },
  });

const RepoProfile = ({ Url, fullName, description, language }) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.tinyLogo}
                source={{
                    uri: Url
                }}
            />
            <RepoInfo 
                fullName={fullName} 
                description={description} 
                language={language} 
            />
        </View>
    )
}

export default RepoProfile