import { View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,

        elevation: 4,  // android specific
        // shadow IOS specific
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});