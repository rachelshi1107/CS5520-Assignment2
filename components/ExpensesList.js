import { ScrollView, Pressable, StyleSheet } from 'react-native';
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses, onItemPress }) {
    return (
        <ScrollView>
            { expenses.map((expense) => {
                return (
                    <Pressable
                        key={expense.key}
                        onPress={() => {
                            onItemPress(expense);
                        }}
                        style={({ pressed }) => {
                            return pressed && styles.pressedItem;
                        }}
                    >
                        <ExpenseItem amount={expense.amount} description={expense.description}></ExpenseItem>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    pressedItem: {
        opacity: 0.5
    }
});

export default ExpensesList;