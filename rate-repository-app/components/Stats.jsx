import { View, StyleSheet } from "react-native"
import StatItem from "./StatItem"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

const Stats = ({ stars, forks, reviews, rating }) => {
    return (
        <View style={styles.container}>
            <StatItem testID="stats_stars" title="Stars" stat={stars}/>
            <StatItem testID="stats_forks" title="Forks" stat={forks}/>
            <StatItem testID="stats_reviews" title="Reviews" stat={reviews}/>
            <StatItem testiD="stats_rating" title="Rating" stat={rating}/>
        </View>
    )
}

export default Stats