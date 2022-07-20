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
            <StatItem title="Stars" stat={stars}/>
            <StatItem title="Forks" stat={forks}/>
            <StatItem title="Reviews" stat={reviews}/>
            <StatItem title="Rating" stat={rating}/>
        </View>
    )
}

export default Stats