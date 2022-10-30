import {Text, View, StyleSheet} from 'react-native';
import { GlobalColors } from '../constants/styles';

function ExpenseItem({ amount, description }) {
    return (
        <View style={styles.expenseItem}>
            <View>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>
                    {amount}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalColors.colors.slateblue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalColors.colors.slategray,
        shadowRadius: 4,
        textShadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3
    },
    description: {
        fontSize: 16,
        fontWeight:'bold',
        color: GlobalColors.colors.lavender
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth:80
    },
    amount: {
        color: GlobalColors.colors.slateblue,
        fontWeight: 'bold'
    },
    pressed: {
        opacity:0.75
    }
});

export default ExpenseItem;